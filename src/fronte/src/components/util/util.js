var dom = {
    getParentByClassName($dom, className) {
        var $parent = $dom.parentElement
        if(!$parent){
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
    }
}, dom, type)