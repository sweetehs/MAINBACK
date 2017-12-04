const test = [{ "id": "c0", "pid": "", "option": { "name": "layout", "data": { "temp": { "isFlex": true, "isFlexValue": true }, "styles": { "height": "100%", "width": "100%", "display": "flex", "flex": "none", "flex-direction": "row" } }, "layout": "layout", "staticConfig": {} }, "children": [{ "id": "c33568507", "pid": "c0", "option": { "name": "layout", "data": { "temp": { "isFlex": true, "isFlexValue": true }, "styles": { "height": "100%", "width": "100%", "display": "flex", "flex": 1, "flex-direction": "row" } }, "layout": "layout", "staticConfig": {} }, "children": [{ "id": "c29365269", "pid": "c33568507", "option": { "name": "button", "data": { "type": "type", "color": "primary", "size": "large", "text": "默认", "styles": {} }, "staticConfig": { "color": ["primary", "success", "info", "warning", "danger"], "size": ["large", "medium", "small", "mini"] } }, "children": [] }] }, { "id": "c9707488", "pid": "c0", "option": { "name": "layout", "data": { "temp": { "isFlex": true, "isFlexValue": true }, "styles": { "height": "100%", "width": "100%", "display": "flex", "flex": 1, "flex-direction": "column" } }, "layout": "layout", "staticConfig": {} }, "children": [] }] }]
var index = -1
var html = ""
var data = ""
const init = () => {
    var index = -1
    var html = ""
    var data = ""
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
    for (var i = 0; i < list.length; i++) {
        var _data = list[i]
        delete _data.option.data.temp
        data += `${space(1)}${_data.id}:${JSON.stringify(_data.option.data)},\n`
        html += `${space(index)}<${_data.option.name} class="${_data.id}">${_data.children.length !== 0 ? '\n' : ''}`
        if (_data.children) {
            loop(_data.children)
        }
        html += `${_data.children.length !== 0 ? space(index) : ''}</${_data.option.name}>\n`
    }
    index--
}
const readfile = (url) => {

}
const writefile = () => {

}
exports.template = () => {
    init()
}