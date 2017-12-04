const staticConfig = {

}
export default function init() {
    return {
        name: "layout",
        data: {            
            temp: {
                isFlex: true,
                isFlexValue: true
            },
            styles: {
                height: "100%",
                width: "100%",
                display: "flex",
                flex: 1,
                "flex-direction": "column",
            }
        },
        layout: 'layout',
        staticConfig: staticConfig,
        tmp: () => {
            return `<Layout :style='defaultData.styles'></Layout>`
        },
        view: () => {
            return `<Layoutview @changeStatus="changeStatus" :pvue="pvue" :defaultData="defaultData" :staticConfig="staticConfig"></Layoutview>`
        }
    }
}