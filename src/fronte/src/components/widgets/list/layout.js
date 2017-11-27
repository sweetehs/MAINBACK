const staticConfig = {

}
export default function init() {
    return {
        name: "layout",
        data: {
            temp: {
               
            },
            styles: {
                height: "100%",
                width: "100%",
                flex: 1,
                "flex-direction": "column"
            }
        },
        layout: 'layout',
        staticConfig: staticConfig,
        tmp: () => {
            return `<Layout :style='defaultData.styles'>
                        <Droppable @drop="drop"></Droppable>
                    </Layout>`
        },
        view: () => {
            return `<Layoutview @changeStatus="changeStatus" :pvue="pvue" :defaultData="defaultData" :staticConfig="staticConfig"></Layoutview>`
        }
    }
}