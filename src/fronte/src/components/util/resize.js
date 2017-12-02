export function Resize(_obj) {
    var startPageX = ""
    let obj = Object.assign({
        el: "",
        target: "",
        isDrag: false,
        callback() { }
    }, _obj)
    obj.el.addEventListener("mousedown", (event) => {
        obj.isDrag = true
        startPageX = event.pageX
    })
    obj.el.addEventListener("mousemove", (event) => {
        if (obj.isDrag) {
            let _c = obj.target.offsetWidth - (startPageX - event.pageX)
            console.log(startPageX - event.pageX)
            // debugger
            // obj.target.style.width = _c
            // obj.callback({
            //     width: _c
            // })
        }
    })
    obj.el.addEventListener("mouseup", () => {
        obj.isDrag = false
    })
}