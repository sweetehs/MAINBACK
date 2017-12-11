const staticConfig = {

}
export default function init() {
    return {
        name: 'table',        
        data: {
            table: {
                describe: "描述",
                cells: [{
                    prop: "name",
                    label: "名字"
                }, {
                    prop: "sex",
                    label: "姓别"
                }],
                list: [{
                    name: "黑崎一护",
                    sex: "男"
                }, {
                    name: "大蛇丸",
                    sex: "男"
                }]
            },
            attr: {

            },
            styles: {}
        },
        staticConfig: staticConfig,
        btmp: `<Table {{table|table}}></Table>`,
        tmp: () => {
            return `<Table :table="defaultData.table"></Table>`
        },
        view: () => {
            return `<Tableview :defaultData="defaultData" :staticConfig="staticConfig"></Tableview>`
        }
    }
}