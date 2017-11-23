import Buttonview from "./buttonView"
import Radioview from "./radioview"
import Inputview from "./inputview"
import Layoutview from "./layoutview"
import Layout from "./self/layout"
import Droppable from "../util/droppable";
export default (Vue, options) => {
    Vue.component('Droppable', Droppable)
    
    Vue.component('Layout', Layout)

    Vue.component('Buttonview', Buttonview)
    Vue.component('Radioview', Radioview)
    Vue.component('Inputview', Inputview)
    Vue.component('Layoutview', Layoutview)
}