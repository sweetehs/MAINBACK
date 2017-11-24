const staticConfig = {
    // type: ['type', 'plain', 'round'],
    color: ['primary', 'success', 'info', 'warning', 'danger'],
    size: ['large', 'medium', 'small', 'mini']
}
export default function init() {
    return {
        name: 'el-button',
        data: {
            type: 'type',
            color: 'primary',
            size: 'large',
            text: '默认',
            styles: {}
        },
        staticConfig: staticConfig,
        tmp: () => {
            return `<el-button :style='defaultData.styles' :type="defaultData.color" :size="defaultData.size">{{defaultData.text}}</el-button>`
        },
        view: () => {
            return `<Commonview @changeStatus="changeStatus" :defaultData="defaultData" :staticConfig="staticConfig"></Commonview>`
        }
    }
}