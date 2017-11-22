let config = {
    type: ['type', 'plain', 'round'],
    color: ['primary', 'success', 'info', 'warning', 'danger'],
    size: ['medium', 'small', 'mini'],
    text: '默认按钮'
}
export default {
    config: config,
    tmp: (option) => {
        return `<el-button>${config.text}</el-button>`
    },
    view: () => {
        return `<Buttonview></Buttonview>`
    }
}