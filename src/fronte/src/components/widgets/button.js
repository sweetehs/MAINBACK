const staticConfig = {
    type: ['type', 'plain', 'round'],
    color: ['primary', 'success', 'info', 'warning', 'danger'],
    size: ['large', 'medium', 'small', 'mini'],
    text: '默认按钮'
}
export default function init() {
    return {
        data: {
            type: 'type',
            color: 'primary',
            size: 'large',
            text: '默认'
        },
        staticConfig: staticConfig,
        tmp: (option = {}) => {
            return `<el-button type="${option.color}" ${option.type == 'type' ? '' : option.type} size="${option.size}">${option.text || '按钮'}</el-button>`
        },
        view: () => {
            return `<Buttonview v-on:changeStatus="changeStatus" :defaultData="defaultData" :staticConfig="staticConfig"></Buttonview>`
        }
    }
}