<style lang="less" scoped>
    .common-widget-action{
        position: absolute;
        right: -10px;
        top: -10px;
    }
    .el-icon-setting{
        display: block;
        font-size: 20px;        
        color: #5a5e66;
    }
    .el-dropdown-menu{
        margin-top: 0;
    }
    ul{       
        display: inline-block;
        font-size: 12px;
        background: #fff;        
        box-shadow: 0 0 10px #888;
        border-radius: 4px;
        position: absolute;
        width: 50px;
        text-align: center;
        left: -8px;        
        li{
            padding:5px 0;
            &:hover{
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
</style>
<template>
    <div class="common-widget-action" @click="stopUp">
        <i class="el-icon-setting" @click="showAction"></i>
        <ul v-show="isShowAction">
            <li @click="copy">复制</li>
            <li @click="paste">粘贴</li>
            <li @click="deletei">删除</li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                isShowAction:false
            }
        },
        props:["dvue"],
        methods:{
            stopUp(event){
                event.cancelBubble = true
            },
            showAction(event){
                this.isShowAction = !this.isShowAction
            },
            copy(){                
                this.isShowAction = false
            },
            paste(){
                
            },
            deletei(){}
        }
    }
</script>

