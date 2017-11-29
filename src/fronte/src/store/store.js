import Vue from "vue"
import Vuex from "vuex"
import Util from "../components/util/util"

Vue.use(Vuex);
const localWidgets = localStorage.getItem("auto-produce-system") ? JSON.parse(localStorage.getItem("auto-produce-system")) : []
const store = new Vuex.Store({
    plugins: [(store) => {
        store.subscribe((mutation, state) => {
            localStorage.setItem("auto-produce-system", JSON.stringify(state.widgets))            
        })
    }],
    state: {
        widgets: []||localWidgets
    },
    getters: {
        getById: (state, getters) => (id) => {
            let _d = ""
            Util.loop(state.widgets, (data) => {
                if (data.id == id) {
                    _d = data
                    return true
                }
            })
            return _d
        }
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
        }
    },
    actions: {
        add(context, data) {
            context.commit("add", data)
        },
        update(context, data) {
            context.commit("update", data)
        }

    }
})
export default store