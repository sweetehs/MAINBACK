import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);
/*
    widgets:[{
        id:'',
        name:'',
        data:'',        
        children:[],
        vue:''
    }]
*/
const widgetsFind = []
const store = new Vuex.Store({
    state: {
        widgets: []
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