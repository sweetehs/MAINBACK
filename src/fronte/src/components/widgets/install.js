import Commonview from "./set/commonview"

import Layoutview from "./set/layoutView"
import Layout2view from "./set/layout2View"

import Layout from "./self/layout"
import Layout2 from "./self/layout2"

import Droppable from "../util/droppable"
export default (Vue, options) => {
    Vue.component('Droppable', Droppable)
    
    Vue.component('Layout', Layout)
    Vue.component('Layout2', Layout2)

    Vue.component('Commonview', Commonview)    
    Vue.component('Layoutview', Layoutview)
    Vue.component('Layout2view', Layout2view)
}