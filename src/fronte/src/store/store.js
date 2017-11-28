import Vue from "vue"
import Vuex from "vuex"
import Util from "../components/util/util"

Vue.use(Vuex);
const widgetsFind = []
let localWidgets = localStorage.getItem("auto-produce-system")
const store = new Vuex.Store({
    plugins: [(store) => {
        store.subscribe((mutation, state) => {
            localStorage.setItem("auto-produce-system", JSON.stringify(state.widgets))
        })
    }],
    state: {
        widgets: localWidgets ? JSON.parse(localWidgets) : []
    },
    getters: {
        getById: (state, getters) => (pid) => {
            return widgetsFind.filter((_data) => {
                return _data.id == pid
            })
        }

    },
    mutations: {
        add(state, data) {
            if (data.pdata) {
                data.pdata.children.push(data.data)
            } else {
                state.widgets.push(data.data)
            }
            widgetsFind.push(data.data)
        }
    },
    actions: {
        add(context, data) {
            const pdata = this.getters.getById(data.pid)[0]
            context.commit("add", {
                data: data,
                pdata: pdata
            })
        }
    }
})
export default store