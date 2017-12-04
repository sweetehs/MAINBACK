import Vue from 'vue'
import Router from 'vue-router'
import Main from "../components/main"
import routes from "../_autocomponents/_route"
Vue.use(Router)

const baseRoute = [
    {
        path: '/main',
        component: Main
    }
]
export default new Router({
    routes: baseRoute.concat(routes)
})
