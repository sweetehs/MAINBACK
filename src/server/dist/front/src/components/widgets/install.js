import Droppable from "../util/droppable"

import Commonview from "./set/commonview"

import Layout from "../../output/layout"
import Layoutview from "./set/layoutView"

import Table from "../../output/table"
export default (Vue, options) => {
    // 常用组件
    Vue.component('Droppable', Droppable)
    // 组件本身
    Vue.component('Layout', Layout)    
    Vue.component('Table', Table) 
    // 组件设置     
    Vue.component('Commonview', Commonview)    
    Vue.component('Layoutview', Layoutview)
}