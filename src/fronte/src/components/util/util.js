var dom = {
    getParentByClassName($dom, className) {
        var $parent = $dom.parentElement
        if (!$parent) {
            return
        }
        if ($parent.className.indexOf(className) !== -1) {
            return $parent
        } else {
            return dom.getParentByClassName($parent, className)
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
            if (_data.children && _data.children.length !== 0) {
                this.loop(_data.children)
            } else {
                callback(_data)
            }
        }
    }
}, dom, type)