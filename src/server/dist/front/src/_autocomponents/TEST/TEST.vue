<template>
    <div>
        <layout :style="baseData['c0'].styles">
            <el-button  @click="c55668459click" :style="baseData['c55668459'].styles" type="primary" size="medium">默认</el-button>
            <Table :ajaxd='c789350model' :table="baseData['c789350'].table"></Table>
            <Table :ajaxd='c51940114model' :table="baseData['c51940114'].table"></Table>
            <el-button  @click="c82636735click" :style="baseData['c82636735'].styles" type="primary" size="medium">默认</el-button>
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
                c789350model:'',
                c51940114model:''                                                
            }
        },
        methods:{
        
            c55668459click(){
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
            },
        
            c82636735click(){
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