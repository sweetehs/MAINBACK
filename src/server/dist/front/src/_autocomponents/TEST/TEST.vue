<template>
    <div>
        <layout :style="baseData['c0'].styles">
            <el-button  @click="c46312686click" :style="baseData['c46312686'].styles" type="primary" size="medium">默认</el-button>
            <Table :ajaxd='c80654796model' :table="baseData['c80654796'].table"></Table>
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
                c80654796model:''                                                
            }
        },
        methods:{
        
            c46312686click(){
                axios({
                    method: 'post',
                    url: 'http://www.test.com',
                    data: {
                        key:'test',
                    },
                    success(ajaxData){
                
                    },
                    error(){
                
                    }
                })
            }
        }
    }
</script>
<style>
    
</style>