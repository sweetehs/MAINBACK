<style lang="less" scoped>
    .ajax-wrapper{
        padding: 10px;
        box-sizing: border-box;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: #eee;
        // display: none;
        // background: #fff
    }
    li{
        height: 100px;
        width: 100px;
        display: inline-block;
        border: 1px solid #abc;
        padding: 5px;
        font-size: 13px;
        margin: 5px;
        vertical-align: middle;
        text-align: center;
    }
    .add{
        border: none;
        &:hover{
            cursor: pointer;
        }
        .el-icon-plus{
            font-size: 50px;
            color: #abc;
            margin-top: 20px;
        }
    }
    
</style>

<template>
    <div class="ajax-wrapper">        
        <ul>
            <li @click="view()">获取数据列表</li>
            <li class="add">
                <i class="el-icon-plus"></i>
            </li>
        </ul>
    </div>
</template>
<script>
    import {mountView} from "./widgets/mount"
    import ajaxWidget from "./widgets/list/ajax"
    export default {
        methods:{
            view(){               
                mountView(ajaxWidget(), {}, (data) => {					
					debugger;
				})
            }
        }
    }
</script>
