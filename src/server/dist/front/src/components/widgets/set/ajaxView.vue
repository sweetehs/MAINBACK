<style>

</style>
<template>
    <div>
        <div class="right-form-item">
            <span class="text">describe：</span>
            <div class="content">
                <el-input type="textarea" class="large" v-model="defaultData.ajaxData.describe" :disabled="disabled"></el-input>                            
            </div>
        </div>
        <div class="right-form-item">
            <span class="text">URL：</span>
            <div class="content">
                <el-input class="large" placeholder="请输入url" v-model="defaultData.ajaxData.url" :disabled="disabled"></el-input>           
            </div>
        </div>       
        <div class="right-form-item">
            <span class="text">method：</span>
            <div class="content">
                <el-radio v-model="defaultData.ajaxData.method" label="get" :disabled="disabled">get</el-radio>
                <el-radio v-model="defaultData.ajaxData.method" label="post" :disabled="disabled">post</el-radio>                                  
            </div>
        </div>
       
        <div class="right-form-item">
            <span class="text">params：</span>
            <div class="content">
                <p class="fn-iblock" v-for="(item,index) in defaultData.ajaxData.params" :key="index">
                    <el-input class="fn-mb5" placeholder="请输入参数" v-model="item.key" :disabled="disabled"></el-input>                          
                    <el-input class="fn-mb5" placeholder="请输入参数测试值" v-model="item.test" :disabled="disabled"></el-input>      
                    <i v-if="!disabled" class="el-icon-minus" @click="deletei(index)"></i>                 
                </p>                   
                <i class="el-icon-plus" @click="add" v-if="!disabled"></i>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){            
            return {

            }
        },
        props:["defaultData","disabled"],
        methods:{
            deletei(index){
                this.defaultData.ajaxData.params.splice(index,1)
            },
            add(){
                this.defaultData.ajaxData.params.push({
                    key: "key",
                    test: "testValue"
                })
            }
        }
    }
</script>