<template>
    <div>
        <layout :style="baseData['c0'].styles">
            <layout :style="baseData['c12217585'].styles">
                <el-input v-model='c52397920model' :style="baseData['c52397920'].styles" placeholder="请输入文字" type="input" size="medium"  ></el-input>
                <el-button  @click="c24936243click" :style="baseData['c24936243'].styles" type="primary" size="medium">默认</el-button>
                <Table :ajaxd='c50278639model' :table="baseData['c50278639'].table"></Table>
            </layout>
        </layout>
    </div>
</template>
<script>
    import {baseData} from "./data.js"
    import axios from 'axios'
    export default{
        data(){
            return {
                baseData: baseData,
                c52397920model:'',
                c50278639model:''
            }
        },
        created(){

        },
        methods:{
            c61707066ajax(){
                axios({
                    method: 'post',
                    url: 'http://www.test.com',
                    data: {
                        key:'testValue',key:'testValue',
                    },
                    success(ajaxData){
                        this.c50278639model = ajaxData.data.list        
                    },
                    error(){
                
                    }
                })
            },
            c24936243click(){
                this.c61707066ajax()
            },
        }
    }
</script>
<style>
    
</style>