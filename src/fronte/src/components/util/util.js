var dom = {
    getParentByClassName($dom, className) {
        if (!$dom) {
            return
        }
        if ($dom.className.indexOf(className) !== -1) {
            return $dom
        } else {
            return dom.getParentByClassName($dom.parentElement, className)
        }
    }
}
var type = {
    isArray(a) {
        return Object.prototype.toString.call(a) === "[object Array]";
    },
    isObject(a) {
        return Object.prototype.toString.call(a) === "[object Object]";
    }
}
export default Object.assign({
    randomid() {
        return 'c' + parseInt(Math.random() * 100000000)
    },
    ofilter(o, callback) {
        var temp = {};
        for (var i in o) {
            var flag = callback(i, o[i])
            if (flag) {
                temp[i] = o[i]
            }
        }
        return temp;
    },
    loop(list, callback) {
        for (let i = 0; i < list.length; i++) {
            let _data = list[i]
            let flag = callback(_data)
            if (_data.children && _data.children.length !== 0 && !flag) {
                this.loop(_data.children, callback)
            }
        }
    }
}, dom, type)