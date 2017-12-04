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
            // type: 'type',
            attr: {
                type: 'primary',
                size: 'large',
                text: '默认',
            },
            styles: {}
        },
        staticConfig: staticConfig,
        tmp: () => {
            return `<el-button :style='defaultData.styles' :type="defaultData.attr.type" :size="defaultData.attr.size">{{defaultData.attr.text}}</el-button>`
        },
        view: () => {
            return `<Commonview @changeStatus="changeStatus" :defaultData="defaultData" :staticConfig="staticConfig"></Commonview>`
        }
    }
}