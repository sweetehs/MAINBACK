<template>
    <div>
        <layout :style="baseData['c0'].styles">
            <el-button  @click="c55668459click" :style="baseData['c55668459'].styles" type="primary" size="medium">默认</el-button>
            <Table :ajaxd='c51940114model' :table="baseData['c51940114'].table"></Table>
        </layout>
    </div>
</template>
<script>
    import {baseData} from "./data.js"
    import axios from 'axios'
    export default{
        data(){
            return {
                baseData: baseData
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
            }
        }
    }
</script>
<style>
    
</style>