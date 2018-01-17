<template>
    <div>
        <layout :style="baseData['c0'].styles">
            <layout :style="baseData['c21721755'].styles">
                <layout :style="baseData['c76734255'].styles">
                    <el-button :style="baseData['c60490392'].styles" type="primary" size="medium">默认</el-button>
                    <Table :ajaxd='c56509546model' :table="baseData['c56509546'].table"></Table>
                    <el-input v-model='c84293572model' :style="baseData['c84293572'].styles" placeholder="请输入文字" type="input" size="medium"  ></el-input>
                </layout>
            </layout>    <layout :style="baseData['c37444039'].styles">
                <el-button  @click="c33802866click" :style="baseData['c33802866'].styles" type="primary" size="medium">默认</el-button>
                <Table :ajaxd='c97018897model' :table="baseData['c97018897'].table"></Table>
                <layout :style="baseData['c87442295'].styles">
        </layout>
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
                c56509546model:'',
                c84293572model:'',
                c97018897model:''
            }
        },
        created(){

        },
        methods:{
            c10653790ajax(){
                axios({
                    method: 'get',
                    url: 'http://www.test.com',
                    data: {
                        key:'testValue',key:'testValue',
                    },
                    success(ajaxData){},
                    error(){
                
                    }
                })
            },
            c33802866click(){
                this.c10653790ajax()
            },
        }
    }
</script>
<style>
    
</style>