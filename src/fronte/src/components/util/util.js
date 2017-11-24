export default {
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
    isArray(a) {
        return Object.prototype.toString.call(a) === "[object Array]";
    },
    isObject(a) {
        return Object.prototype.toString.call(a) === "[object Object]";
    }
}