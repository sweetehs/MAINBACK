<style>
    
</style>
<template>
    <div>    
        <el-table :data="table.list" border style="width: 100%">    
            <el-table-column v-for="(item,index) in table.cells" :key="index" :prop="item.prop" :label="item.label"></el-table-column>    
        </el-table>
    </div>
</template>
<script>
    export default {
        data(){            
            return {
                tableData:[{
                    date:"2011-12-12"
                }]
            }
        },
        props:["table"]
    }
</script>

