const staticConfig = {
   
}
export default function init() {
    return {
        data: {
           
        },
        layout: 'layout',
        staticConfig: staticConfig,
        tmp: (option = {}) => {
            return `<Droppable :test="test" @drop="drop1"><Layout></Layout></Droppable>`
        },
        view: () => {            
            return `<Layoutview @changeStatus="changeStatus" :defaultData="defaultData" :staticConfig="staticConfig"></Layoutview>`
        }
    }
}