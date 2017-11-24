<style lang="less">
    .dnd-drop-content{
        flex: 1;        
    }
    .layout-wrapper{
        border: 1px solid #eee;
        border-radius: 10px;
        height: 100%;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        .layout-item{
            flex:1;
            height: 100%;            
            border: 1px solid #eee;
            border-radius: 10px;
            width: 100%;
            box-sizing: border-box;
        }
    }
</style>
<template>
    <div class="layout-wrapper">
        <slot name="item" v-for="(item,index) in num" :styles="item"></slot>
    </div>
</template>

<script>
    export default{
        props:["num"],
        watch:{
            num:{
                handler(){
                    
                },
                deep:true
            }
        }
    }
</script>