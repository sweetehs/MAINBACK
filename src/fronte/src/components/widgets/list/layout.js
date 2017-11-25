const staticConfig = {

}
export default function init() {
    return {
        name: "layout",
        data: {
            num: [{
                width: "",
                flex: 1
            }],            
            styles: {
                height: "100%",
                width: "100%"
            }
        },
        layout: 'layout',
        staticConfig: staticConfig,
        tmp: () => {
            return `<Layout :style='defaultData.styles' :num="defaultData.num">
                        <Droppable slot="item" slot-scope="props" @drop="drop" :style="props.styles">
                            <div class="layout-item" :style="props.styles"></div>
                        </Droppable>
                    </Layout>`
        },
        view: () => {
            return `<Layoutview @changeStatus="changeStatus" :defaultData="defaultData" :staticConfig="staticConfig"></Layoutview>`
        }
    }
}