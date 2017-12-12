export default function init() {
    return {
        name: 'ajax',
        data: {
            ajaxData: {
                describe: "ajax接口描述",
                url: "http://www.test.com",
                method: "get",
                params: [{
                    key: "key",
                    test: "testValue"
                }],
                link: ""
            }
        },
        view: () => {
            return `<Ajaxview :defaultData="defaultData" :disabled="false"></Ajaxview>`
        }
    }
}