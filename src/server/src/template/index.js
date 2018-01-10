const fs = require("fs")
const path = require("path")
const ejs = require("ejs")
var index = -1
var renderData = {}
var data = "\n"
const init = () => {
    index = -1
    renderData = {
        template: "",
        axios: "",
        models: [],
        created: [],
        methods: [],
    }
    data = "\n"
}
const space = (n) => {
    var arr = []
    for (let i = 0; i < n; i++) {
        arr.push("    ")
    }
    return arr.join("")
}
const handleSpace = (tmp, num) => {
    // 处理空格，美化
    return tmp.split("\n").map((_t) => {
        return space(num) + _t
    }).join("\n")
}
const pushFun = ({ funName, fun }) => {
    renderData.methods.filter((_d) => {
        if (_d.funName == funName) {
            return true
        }
    }).length == 0 && renderData.methods.push({
        funName: funName,
        fun: fun
    })
}
const modelstag = ['table', 'input']
const loop = (list) => {
    index++
    for (let i = 0; i < list.length; i++) {
        let _data = list[i]
        delete _data.option.data.temp
        if (_data.option.layout == "layout") {
            renderData.template += `${space(index)}<layout :style="baseData['${_data.id}'].styles">${_data.children.length !== 0 ? '\n' : ''}`
            loop(_data.children)
            renderData.template += `\n${_data.children.length !== 0 ? space(index) : ''}</layout>`
        } else {
            _data.option.btmp.match(/{{(.*?)}}/gi).map((str) => {
                let strs = str.match(/^{{(.*?)}}$/)[1].split("|")
                _data.option.btmp = _data.option.btmp.replace(new RegExp(str.replace("|", "\\|")), `:${strs[0]}="baseData['${_data.id}'].${strs[1]}"`)
            })
            let widgetTmp = `${space(index)}${ejs.render(_data.option.btmp, _data.option.data)}${i == list.length - 1 ? '' : '\n'}`
            let tag = widgetTmp.match(/<(.*?)\s{1}/)[0]
            // 如果是需要form表单 需要建立model
            if(modelstag.indexOf(_data.option.name) !== -1){
                let modelName = `${_data.id}model`
                renderData.models.push(`${modelName}:''`)
                if (_data.option.name == "table") {               
                    widgetTmp = widgetTmp.replace(tag, tag + `:ajaxd='${modelName}' `)
                }else{
                    widgetTmp = widgetTmp.replace(tag, tag + `v-model='${modelName}' `)
                }
            }           
            // event处理                        
            if (_data.option.data.event) {
                renderData.axios = `import axios from 'axios'`
                let renderEventData = []
                _data.option.data.event.map((_event) => {
                    var funArr = [];
                    // 事件主体处理
                    _event.action.map((_action) => {
                        if (_action.option.name === "ajax") {
                            let funName = _action.id + "ajax"
                            pushFun({
                                funName: funName,
                                fun: renderSync('./ajax.tmp', _action.option.data.ajaxData)
                            })
                            funArr.push(`this.${funName}()`)
                        }
                    })
                    // 各种钩子判断
                    if (_event.type == "created") {
                        renderData.created = renderData.created.concat(funArr)
                    } else {
                        // 事件标签处理
                        let funName = _data.id + _event.type
                        widgetTmp = widgetTmp.replace(tag, tag + ` @${_event.type}="${funName}" `)
                        pushFun({
                            funName: funName,
                            fun: funArr.join("\n")
                        })
                    }
                })
            }
            renderData.template += widgetTmp
        }
        // 数据处理
        data += `${space(1)}${_data.id}:${JSON.stringify(_data.option.data)},\n`
    }
    index--
}
const renderSync = (url, data) => {
    let str = fs.readFileSync(__dirname + "/" + url).toString()
    return ejs.render(str, data)
}
const writefile = (dirname, name, text) => {
    return new Promise((resolve, reject) => {
        var baseUrl = path.join(__dirname, '../../dist/front/src/_autocomponents', dirname)
        if (!fs.existsSync(baseUrl)) {
            fs.mkdirSync(baseUrl)
        }
        fs.writeFile(path.join(baseUrl, name), text, function (err) {
            resolve()
        })
    })
}
exports.get = (name, listData) => {
    let baseUrl = __dirname + "/"
    init()
    loop(listData)
    // 美化  处理
    renderData.methods.map((_d) => {
        _d.fun = handleSpace(_d.fun, 4)
    })
    renderData.created = renderData.created.map((_d) => {
        return handleSpace(_d, 3)
    })
    renderData.models = renderData.models.map((_d) => {
        return handleSpace(_d, 4)
    })
    renderData.template = handleSpace(renderData.template, 2)
    ejs.renderFile(baseUrl + "./base.tmp", renderData, function (err, file) {
        writefile(name, name + ".vue", file)
    })
    ejs.renderFile(baseUrl + "./baseData.tmp", {
        baseData: `{${data}}`
    }, function (err, file) {
        writefile(name, "data.js", file)
    })
    ejs.renderFile(baseUrl + "./route.tmp", {
        name: name
    }, function (err, file) {
        writefile("", "_route.js", file)
    })
}