const staticConfig = {
    
    }
    export default function init() {
        return {
            name: "layout",
            data: {
                styles: {
                    height: "100%",
                    width: "100%"
                }
            },
            layout: 'layout',
            staticConfig: staticConfig,
            tmp: () => {
                return `<Layout2 :style='defaultData.styles'>
                            <Droppable slot="s1" @drop="drop"></Droppable>
                            <Droppable slot="s2" @drop="drop"></Droppable>
                        </Layout2>`
            },
            view: () => {
                return `<Layout2view @changeStatus="changeStatus" :defaultData="defaultData" :staticConfig="staticConfig"></Layout2view>`
            }
        }
    }