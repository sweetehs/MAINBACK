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
    <Table :table="baseData['c44151148'].table"></Table>
</layout>
    </div>
</template>