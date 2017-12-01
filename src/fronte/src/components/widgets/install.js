import Commonview from "./set/commonview"
import Layoutview from "./set/layoutView"
import Layout from "./self/layout"
import Droppable from "../util/droppable"
export default (Vue, options) => {
    // 常用组件
    Vue.component('Droppable', Droppable)
    // 组件本身
    Vue.component('Layout', Layout)    
    // 组件设置     
    Vue.component('Commonview', Commonview)    
    Vue.component('Layoutview', Layoutview)
}