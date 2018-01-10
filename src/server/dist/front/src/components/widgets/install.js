// import Droppable from "../../util/droppable"

import Inputview from "./set/inputView"
import Buttonview from "./set/buttonView"

import Layout from "../../output/layout"
import Layoutview from "./set/layoutView"

import Table from "../../output/table"
import Tableview from "./set/tableView"

import Ajaxview from "./set/ajaxView"

import Eventview from "./set/eventView"
export default (Vue, options) => {
    // 常用组件
    Vue.component('Inputview', Inputview)
    Vue.component('Buttonview', Buttonview)    
    Vue.component('Layout', Layout)    
    Vue.component('Layoutview', Layoutview)
    Vue.component('Table', Table)         
    Vue.component('Tableview', Tableview)
    Vue.component('Ajaxview', Ajaxview)
    Vue.component('Eventview', Eventview)    
}