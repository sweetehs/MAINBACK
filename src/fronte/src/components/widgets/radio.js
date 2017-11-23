const staticConfig = {
    text: ['选项'],
    border: [true, false],
    size: ['large', 'medium', 'small', 'mini'],
    isbutton: [true, false]
}
export default function init() {
    return {
        data: {
            num: 1,
            text: ['选项'],
            border: false,
            size: 'large',
            isbutton: false
        },
        staticConfig: staticConfig,
        tmp: (option = {}) => {
            if (option.isbutton) {                
                return `<el-radio-group size="${option.size}">` + option.text.map((_data) => {
                    return `<el-radio-button label="${_data}"></el-radio-button>`
                }).join('') + "</el-radio-group>"
            } else {
                return option.text.map((_data) => {
                    return `<el-radio ${option.border ? 'border' : ''} size="${option.size}">${_data}</el-radio>`
                }).join('')
            }

        },
        view: () => {
            return `<Radioview v-on:changeStatus="changeStatus" :defaultData="defaultData" :staticConfig="staticConfig"></Radioview>`
        }
    }
}