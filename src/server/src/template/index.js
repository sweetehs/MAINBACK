const fs = require("fs")
const path = require("path")
const ejs = require("ejs")
const test = [{ "id": "c0", "pid": "", "option": { "name": "layout", "data": { "temp": { "isFlex": true, "isFlexValue": true }, "styles": { "height": "100%", "width": "100%", "display": "flex", "flex": 1, "flex-direction": "column" } }, "layout": "layout", "staticConfig": {} }, "children": [{ "id": "c42665303", "pid": "c0", "option": { "name": "button", "tag": "el-button", "data": { "attr": { "type": "info", "size": "large", "text": "默认0" }, "styles": {} }, "staticConfig": { "type": ["primary", "success", "info", "warning", "danger"], "size": ["large", "medium", "small", "mini"] } }, "children": [] }, { "id": "c91863989", "pid": "c0", "option": { "name": "layout", "data": { "temp": { "isFlex": true, "isFlexValue": true }, "styles": { "height": "100%", "width": "100%", "display": "flex", "flex": 1, "flex-direction": "column" } }, "layout": "layout", "staticConfig": {} }, "children": [{ "id": "c94297335", "pid": "c91863989", "option": { "name": "button", "tag": "el-button", "data": { "attr": { "type": "danger", "size": "large", "text": "默认1" }, "styles": {} }, "staticConfig": { "type": ["primary", "success", "info", "warning", "danger"], "size": ["large", "medium", "small", "mini"] } }, "children": [] }] }] }]
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
        let tag = _data.option.tag || _data.option.name
        let attr = []
        delete _data.option.data.temp
        if (_data.option.data.attr) {
            for (let j in _data.option.data.attr) {
                if (j !== "text") {
                    attr.push(`${j}="${_data.option.data.attr[j]}"`)
                }
            }
        }
        data += `${space(1)}${_data.id}:${JSON.stringify(_data.option.data)},\n`
        template += `${space(index)}<${tag} ${attr.join(" ")} :style="baseData['${_data.id}'].styles">${_data.children.length !== 0 ? '\n' : ''}`
        if (_data.children) {
            loop(_data.children)
        }
        if (_data.option.data.attr && _data.option.data.attr.text) {
            template += _data.option.data.attr.text
        }
        template += `${_data.children.length !== 0 ? space(index) : ''}</${tag}>\n`
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
exports.get = (name) => {
    let baseUrl = __dirname + "/"
    init()
    loop(test)
    readfile("./base.tmp").then((file) => {
        file = file.replace("##template##", template)
        writefile(name, name + ".vue", file)
    })
    readfile("./baseData.tmp").then((file) => {
        data = `{${data}}`
        file = file.replace("##baseData##", data)
        writefile(name, "data.js", file)
    })
    ejs.renderFile(baseUrl + "./route.tmp", {
        name: name
    }, {}, function (err, file) {
        writefile("", "_route.js", file)
    });
}