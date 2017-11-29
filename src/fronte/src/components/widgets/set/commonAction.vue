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
        font-size: 14px;
        background: #fff;        
        box-shadow: 0 0 10px #888;
        border-radius: 4px;
        position: absolute;
        width: 80px;
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
    <div class="common-widget-action" @click="stopUp" :style="position">        
        <ul v-show="isShowAction">
            <li @click="exec('copy')">复制</li>
            <li @click="exec('paste')">粘贴</li>
            <li @click="exec('deletei')">删除</li>
        </ul>
    </div>
</template>
<script>
    import util from "../../util/util"
    export default{
        data(){
            return {
                isShowAction:false,
                actionId:"",
                target:"",
                position:{
                    top:0,
                    left:0,
                }
            }
        },
        props:["cvue"],
        methods:{
            setData({x,y,target}){                
                this.isShowAction = true
                this.position.left = x
                this.position.top = y
                this.target = target
                this.actionId = util.getParentByClassName(target, "widget-wrapper").className.match(/c\d{0,8}/)[0]
            },
            stopUp(event){
                event.cancelBubble = true
            },
            showAction(event){
                this.isShowAction = !this.isShowAction
            },
            exec(type){
                 this.isShowAction = false
                if(this.actionId == "c0"){
                    return
                }
                this[type]()               
            },
            copy(){
                
            },
            paste(){
                
            },
            deletei(){
                this.target.remove()                             
            }
        }
    }
</script>

