const staticConfig = {
    // type: ['type', 'plain', 'round'],
    type: ['primary', 'success', 'info', 'warning', 'danger'],
    size: ['large', 'medium', 'small', 'mini']
}
export default function init() {
    return {
        name: 'button',
        tag: 'el-button',
        data: {            
            attr: {
                type: 'primary',
                size: 'medium',
                text: '默认',
            },
            styles: {}
        },
        staticConfig: staticConfig,
        btmp: `<el-button {{style|styles}} type="<%=attr.type%>" size="<%=attr.size%>"><%=attr.text%></el-button>`,
        tmp: () => {
            return `<el-button :style='defaultData.styles' :type="defaultData.attr.type" :size="defaultData.attr.size">{{defaultData.attr.text}}</el-button>`
        },
        view: () => {
            return `<Commonview @changeStatus="changeStatus" :defaultData="defaultData" :staticConfig="staticConfig"></Commonview>`
        }
    }
}