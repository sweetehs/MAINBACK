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
        getById: (state, getters) => (id) => {
            return widgetsFind.filter((_data) => {
                return _data.id == id
            })
        }
    },
    mutations: {
        add(state, data) {
            state.widgets.push(data)
            widgetsFind.push(data)
        }
    },
    actions: {
        add(context, data) {
            const _data = this.getters.getById(data.id)
            if (_data.length == 0) {
                context.commit("add", data)
            }
        }
    }
})
export default store