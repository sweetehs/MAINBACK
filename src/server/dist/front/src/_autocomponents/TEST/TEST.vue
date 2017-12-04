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
<layout  :style="baseData['c0'].styles">
    <el-button type="info" size="large" :style="baseData['c42665303'].styles">默认0</el-button>
    <layout  :style="baseData['c91863989'].styles">
        <el-button type="danger" size="large" :style="baseData['c94297335'].styles">默认1</el-button>
    </layout>
</layout>

    </div>
</template>

ase