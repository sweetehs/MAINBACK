const staticConfig = {
    type: ["input", "textarea"],
    size: ['large', 'medium', 'small', 'mini'],
    readonly: [false, true]
}
export default function init() {
    return {
        data: {
            text: "文本",
            placeholder: "请输入文字",
            type: "input",
            size: "medium",
            readonly: false
        },
        staticConfig: staticConfig,
        tmp: (option = {}) => {
            return `<span class="fn-iblock">${option.text}：</span><el-input placeholder="${option.placeholder}" type="${option.type}" size="${option.size}" :readonly="true"></el-input>`
        },
        view: () => {
            return `<Inputview v-on:changeStatus="changeStatus" :defaultData="defaultData" :staticConfig="staticConfig"></Inputview>`
        }
    }
}