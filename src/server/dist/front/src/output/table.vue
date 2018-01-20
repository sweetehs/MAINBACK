<style lang="less" scoped>
    table{
        width: 100%;
        text-align: center;
        background: #ffffff;
        border: 1px solid  #a8bfde;
        border-collapse: collapse;
        th,tr,td{
            height: 36px;
            line-height: 36px;            
        }
        tr,td{
            border: 1px solid  #E6E7F1;
        }
        th{
            background: #767E95;
            color: #fff;
            font-weight: normal;
        }
        tr{
           
            &:nth-child(even){
                background: #F6F7FA;
            }
        }
        td{
            width: 100px;
        }
    }
</style>
<template>
    <div>    
        <table>
            <thead>
                <th v-for="(item,index) in table.cells" :key="index">{{item.label}}</th>
            </thead>
            <tbody>
                <tr v-for="(l,index) in ajaxd" :key="index">
                    <td v-for="(c,index) in table.cells" :key="index">{{l[table.cells[index].prop]}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        data(){            
            return {
               
            }
        },
        props:["table","ajaxd"]
    }
</script>

