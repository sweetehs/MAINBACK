import Commonview from "./set/commonview"

import Layoutview from "./set/layoutView"

import Layout from "./self/layout"

import Droppable from "../util/droppable"
export default (Vue, options) => {
    Vue.component('Droppable', Droppable)
    
    Vue.component('Layout', Layout)    

    Vue.component('Commonview', Commonview)    
    Vue.component('Layoutview', Layoutview)
}