import Vue from "vue"
import Vuex from "vuex"
import Util from "../components/util/util"

Vue.use(Vuex);
const localWidgets = localStorage.getItem("auto-produce-system") ? JSON.parse(localStorage.getItem("auto-produce-system")) : []
const store = new Vuex.Store({
    plugins: [(store) => {
        store.subscribe((mutation, state) => {            
            localStorage.setItem("auto-produce-system", JSON.stringify(state.widgets))
            console.log(JSON.stringify(state.widgets))
        })
    }],
    state: {
        widgets: [] || localWidgets
    },
    getters: {
        getById: (state, getters) => (id) => {
            let _d = ""
            Util.loop(state.widgets, (data) => {
                if (data.id == id) {
                    _d = data
                }
            })
            return _d
        }
    },
    mutations: {
        add(state, data) {
            if (data.pdata) {
                data.pdata.children.push(data.data)
            } else {
                state.widgets.push(data.data)
            }            
        },
        update(state, data) {
            const gdata = this.getters.getById(data.id)
            gdata.option.data = data.data
        }
    },
    actions: {
        add(context, data) {
            const pdata = this.getters.getById(data.pid)
            context.commit("add", {
                data: data,
                pdata: pdata
            })
        },
        update(context, data) {
            context.commit("update", data)
        }

    }
})
export default store