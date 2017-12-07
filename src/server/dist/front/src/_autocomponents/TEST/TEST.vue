<style>
    
</style>

<script>
    import {baseData} from "./data.js"
    export default{
        data(){
            return {
                baseData: baseData
            }
        },
        method:{

        }
    }
</script>
<template>
    <div>
<layout :style="baseData['c0'].styles">
</layout><layout :style="baseData['c0'].styles">
    <layout :style="baseData['c63624592'].styles">
        <el-input :style="baseData['c9237123'].styles" placeholder="请输入文字" type="input" size="medium"  ></el-input>        <el-button :style="baseData['c47049475'].styles" type="primary" size="medium">默认</el-button>        <Table :table="baseData['c96902875'].table"></Table>
    </layout>
</layout>
    </div>
</template>