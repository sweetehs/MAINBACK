const staticConfig = {
    type: ["input", "textarea"],
    size: ['large', 'medium', 'small', 'mini'],
    readonly: [false, true]
}
export default function init() {
    return {
        name: 'input',
        tag: 'el-input',
        data: {
            attr: {
                placeholder: "请输入文字",
                type: "input",
                size: "medium",
                readonly: false,
            },
            styles: {}
        },
        staticConfig: staticConfig,
        tmp: () => {
            return `<el-input :style='defaultData.styles' :placeholder="defaultData.attr.placeholder" :type="defaultData.attr.type" :size="defaultData.attr.size" :readonly="true"></el-input>`
        },
        view: () => {
            return `<Commonview v-on:changeStatus="changeStatus" :defaultData="defaultData" :staticConfig="staticConfig"></Commonview>`
        }
    }
}