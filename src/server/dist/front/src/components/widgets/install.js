import Droppable from "../../util/droppable"

import Commonview from "./set/commonview"

import Layout from "../../output/layout"
import Layoutview from "./set/layoutView"

import Table from "../../output/table"
import Tableview from "./set/tableView"

import Ajaxview from "./set/ajaxView"

import Eventview from "./set/eventView"
import Right from "../right"
export default (Vue, options) => {
    // 常用组件
    Vue.component('Droppable', Droppable)
    Vue.component('Commonview', Commonview)    
    Vue.component('Layout', Layout)    
    Vue.component('Layoutview', Layoutview)
    Vue.component('Table', Table)         
    Vue.component('Tableview', Tableview)
    Vue.component('Ajaxview', Ajaxview)
    Vue.component('Eventview', Eventview)
    Vue.component('Right', Right)
}