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
    },
    addClass($dom, className) {
        if ($dom.className.indexOf(className) == -1) {
            $dom.className = $dom.className + " " + className
        }
    },
    removeClass($dom, className) {
        if ($dom) {
            $dom.className = $dom.className.replace(" " + className, "")
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
            let flag = callback(_data, i, list)
            if (_data.children && _data.children.length !== 0 && !flag) {
                this.loop(_data.children, callback)
            }
        }
    },
    deepClone(o) {
        return JSON.parse(JSON.stringify(o))
    },
    getId(className) {
        return className.match(/c\d{1,8}/)[0] || ""
    }
}, dom, type)