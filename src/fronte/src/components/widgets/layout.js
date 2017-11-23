const staticConfig = {
   
}
export default function init() {
    return {
        data: {
           
        },
        layout: 'layout',
        staticConfig: staticConfig,
        tmp: (option = {}) => {
            return `<Droppable><Layout></Layout></Droppable>`
        },
        view: () => {            
            return `<Layoutview v-on:changeStatus="changeStatus" :defaultData="defaultData" :staticConfig="staticConfig"></Layoutview>`
        }
    }
}