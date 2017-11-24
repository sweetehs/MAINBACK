const staticConfig = {
    border: [true, false],
    size: ['large', 'medium', 'small', 'mini'],
    // isbutton: [true, false]
}
export default function init() {
    return {
        data: {
            text: '选项',
            border: false,
            size: 'large',
            isbutton: false,
            styles: {}
        },
        staticConfig: staticConfig,
        tmp: (option = {}) => {
            if (option.isbutton) {
                return `<el-radio-group size="${option.size}">` + option.text.map((_data) => {
                    return `<el-radio-button label="${_data}"></el-radio-button>`
                }).join('') + "</el-radio-group>"
            } else {
                return `<el-radio :style='defaultData.style' :border="defaultData.border" :size="defaultData.size">{{defaultData.text}}</el-radio>`
            }
        },
        view: () => {
            return `<Commonview v-on:changeStatus="changeStatus" :defaultData="defaultData" :staticConfig="staticConfig"></Commonview>`
        }
    }
}