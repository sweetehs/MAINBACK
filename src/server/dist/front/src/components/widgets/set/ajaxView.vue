<style>

</style>
<template>
    <div>
        <div class="right-form-item">
            <span class="text">method：</span>
            <div class="content">
                <el-radio v-model="defaultData.ajaxData.method" label="get">get</el-radio>
                <el-radio v-model="defaultData.ajaxData.method" label="post">post</el-radio>                                  
            </div>
        </div>
        <div class="right-form-item">
            <span class="text">URL：</span>
            <div class="content">
                <el-input class="large" placeholder="请输入url" v-model="defaultData.ajaxData.url"></el-input>           
            </div>
        </div>
        <div class="right-form-item">
            <span class="text">params：</span>
            <div class="content">
                <el-input v-for="(item,index) in defaultData.ajaxData.params" :key="index" class="large fn-mb5" placeholder="请输入参数" v-model="item.key"></el-input>                          
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:["defaultData"]
    }
</script>