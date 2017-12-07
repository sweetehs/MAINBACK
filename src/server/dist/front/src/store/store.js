import Vue from "vue"
import Vuex from "vuex"
import util from "../util/util"

Vue.use(Vuex);
const localWidgets = localStorage.getItem("auto-produce-system") ? JSON.parse(localStorage.getItem("auto-produce-system")) : []
var temp = [];
const store = new Vuex.Store({
    plugins: [(store) => {
        store.subscribe((mutation, state) => {
            localStorage.setItem("auto-produce-system", JSON.stringify(state.widgets))
            if (mutation.type.indexOf('history') == -1) {
                if (temp.length !== state.historyindex) {
                    // 如果在中间一个做了修改，那么舍弃之后操作                                             
                    for (let i = state.historyindex; i < temp.length; i++) {
                        temp.splice(i, 1)
                    }
                }
                if (temp.length > 10) {
                    temp.shift()
                }
                temp.push(util.deepClone(state.widgets))
                state.historyindex = temp.length
            } else {
                // 防止变化关联
                temp[state.historyindex - 1] = util.deepClone(state.widgets)
            }
        })
    }],
    state: {
        widgets:localWidgets,
        historyindex: 0
    },
    getters: {
        getById: (state, getters) => (id) => {
            let _d = ""
            util.loop(state.widgets, (data) => {
                if (data.id == id) {
                    _d = data
                    return true
                }
            })
            return _d
        },

    },
    mutations: {
        add(state, data) {
            const pdata = this.getters.getById(data.pid)
            if (pdata) {
                pdata.children.push(data)
            } else {
                state.widgets.push(data)
            }
        },
        update(state, data) {
            const gdata = this.getters.getById(data.id)
            gdata.option.data = data.data
        },
        delete(state, id) {
            util.loop(state.widgets, (data, index, parent) => {
                if (data.id == id) {
                    parent.splice(index, 1);
                    return true
                }
            })
        },
        change(state, data) {
            let p1 = ""
            let i1 = ""
            let p2 = ""
            let i2 = ""
            util.loop(state.widgets, (_d, index, parent) => {
                if (data.id1 == _d.id) {
                    p1 = parent
                    i1 = index
                }
                if (data.id2 == _d.id) {
                    p2 = parent
                    i2 = index
                }
                if (p1 && p2) {
                    return true
                }
            })
            var temp = ""
            temp = p1[i1]
            p1[i1] = p2[i2]
            p2[i2] = temp
        },
        historyprev(state) {
            if (state.historyindex > 1) {
                state.historyindex--
                state.widgets = temp[state.historyindex - 1]
            }
        },
        historynext(state) {
            if (state.historyindex < temp.length) {
                state.historyindex++
                state.widgets = temp[state.historyindex - 1]
            }
        }
    },
    actions: {
        add(context, data) {
            context.commit("add", data)
        },
        update(context, data) {
            context.commit("update", data)
        },
        delete(context, id) {
            context.commit("delete", id)
        },
        change(context, data) {
            context.commit("change", data)
        },
        historyprev(context) {
            context.commit("historyprev")
        },
        historynext(context) {
            context.commit("historynext")
        }
    }
})
export default store