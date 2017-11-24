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
            readonly: false,
            styles: {}
        },
        staticConfig: staticConfig,
        tmp: () => {
            return `<span class="fn-iblock">{{defaultData.text}}：</span><el-input :style='defaultData.styles' :placeholder="defaultData.placeholder" :type="defaultData.type" :size="defaultData.size" :readonly="true"></el-input>`
        },
        view: () => {
            return `<Commonview v-on:changeStatus="changeStatus" :defaultData="defaultData" :staticConfig="staticConfig"></Commonview>`
        }
    }
}