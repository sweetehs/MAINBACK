import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        addList(state, data) {
                        
        }
    },
    actions: {
        addList(context, data) {            
           
        }
    },
    getters: {}
})
export default store