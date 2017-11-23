<style scoped>
    .el-input{
        width: 80px;
        margin: 0 5px;
    }
</style>

<template>
    <div>
        <div class="right-form-item">
            宽度：<el-input size="small" v-model="width"></el-input>              
        </div>     
         <div class="right-form-item">            
            高度：<el-input size="small" v-model="height"></el-input>         
        </div>            
    </div>
</template>

<script>    
    export default {
        data(){
            return {
                width:100,
                height:100                
            }
        }
    };
</script>

