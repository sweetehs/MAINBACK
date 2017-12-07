export default function init() {
    return {
        name: 'ajax',
        data: {
            ajaxData: {
                url: "http://www.test.com",
                method: "get",
                params: [{
                    key: "key"
                }]
            }
        },
        view: () => {
            return `<Ajaxview :defaultData="defaultData"></Ajaxview>`
        }
    }
}