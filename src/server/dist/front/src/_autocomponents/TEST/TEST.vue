<template>
    <div>
        <layout :style="baseData['c0'].styles">
            <el-button  @click="c10627978click" :style="baseData['c10627978'].styles" type="primary" size="medium">默认</el-button>
            <Table :ajaxd='c70155063model' :table="baseData['c70155063'].table"></Table>
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
                c70155063model:''
            }
        },
        methods:{
        
            c10653790ajax(){
                axios({
                    method: 'get',
                    url: 'http://www.test.com',
                    data: {
                        key:'test',key:'test',
                    },
                    success(ajaxData){
                        
                            this.c70155063model = ajaxData.data.list
                        
                    },
                    error(){
                
                    }
                })
            },
            c10627978click(){
                this.c10653790ajax()
            },
        }
    }
</script>
<style>
    
</style>