<template>
    <div>
        <layout :style="baseData['c0'].styles">
            <layout :style="baseData['c89955637'].styles">
                <layout :style="baseData['c93310791'].styles">
                    <layout :style="baseData['c70799113'].styles">
                        <el-button :style="baseData['c49583908'].styles" type="primary" size="medium">默认</el-button>
                        <Table :ajaxd='c41809336model' :table="baseData['c41809336'].table"></Table>
                    </layout>
                </layout>
            </layout>
            <layout :style="baseData['c27648681'].styles">
                <el-button :style="baseData['c75003973'].styles" type="primary" size="medium">默认</el-button>
                <Table :ajaxd='c72974474model' :table="baseData['c72974474'].table"></Table>
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
                c41809336model:'',
                c72974474model:''
            }
        },
        created(){

        },
        methods:{
        }
    }
</script>
<style>
    
</style>