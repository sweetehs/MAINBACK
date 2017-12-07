const fs = require("fs")
const path = require("path")
const ejs = require("ejs")
var index = -1
var template = ""
var data = "\n"
const init = () => {
    index = -1
    html = ""
    data = "\n"
}
const space = (n) => {
    var arr = []
    for (let i = 0; i < n; i++) {
        arr.push("    ")
    }
    return arr.join("")
}
const loop = (list) => {
    index++
    for (let i = 0; i < list.length; i++) {
        let _data = list[i]
        delete _data.option.data.temp
        data += `${space(1)}${_data.id}:${JSON.stringify(_data.option.data)},\n`
        if (_data.option.layout == "layout") {
            template += `${space(index)}<layout :style="baseData['${_data.id}'].styles">${_data.children.length !== 0 ? '\n' : ''}`
            loop(_data.children)
            template += `\n${_data.children.length !== 0 ? space(index) : ''}</layout>`
        } else {
            _data.option.btmp.match(/{{(.*?)}}/gi).map((str) => {
                let strs = str.match(/^{{(.*?)}}$/)[1].split("|")
                _data.option.btmp = _data.option.btmp.replace(new RegExp(str.replace("|", "\\|")), `:${strs[0]}="baseData['${_data.id}'].${strs[1]}"`)
            })
            template += `${space(index)}${ejs.render(_data.option.btmp, _data.option.data)}\n`
        }
    }
    index--
}
const readfile = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + "/" + url, function (err, data) {
            resolve(data.toString())
        });
    })
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
    ejs.renderFile(baseUrl + "./base.tmp", {
        template: template
    }, function (err, file) {
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