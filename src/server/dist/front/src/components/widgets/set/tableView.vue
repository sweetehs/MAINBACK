<style>

</style>

<template>
    <div>        
        <div class="right-form-item" v-for="(item,index) in defaultData.table.cells" :key="index">
            <span class="text">name：</span>
            <el-input v-model="item.label"></el-input>   
            <span class="text">prop：</span>
            <el-input v-model="item.prop"></el-input>     
            <i class="el-icon-close" @click="deleteCell(index)"></i>
        </div>
        <div>
            <el-button size="small" type="primary"@click="addCell">增加</el-button>
        </div>
    </div>    
</template>
<script>
    export default{
        data(){
            return {}
        },
        props:['defaultData','staticConfig'],
        methods:{
            addCell(){
                this.defaultData.table.cells.push({
                    label:"label",
                    prop:"prop"
                })                               
            },
            deleteCell(index){
                this.defaultData.table.cells.splice(index,1)                
            }
        }
    }
</script>
