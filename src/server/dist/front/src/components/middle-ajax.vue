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
            <li v-for="(item,index) in ajaxList" :key="index" :class="item.id" @click="view(item.id)">{{item.option.data.ajaxData.describe}}</li>
            <li class="add">
                <i class="el-icon-plus" @click="add"></i>
            </li>
        </ul>
    </div>
</template>
<script>
    import {mountView} from "./widgets/mount"
    import ajaxWidget from "./widgets/list/ajax"
    import util from "../util/util"
    export default {
        data(){
            return {
                ajaxList:this.$store.state.ajax
            }
        },
        methods:{           
            add(){
                const storeData = {
                    id: util.randomid(),                    
                    option: ajaxWidget()                    
                }
                this.$store.dispatch("ajaxAdd", storeData)
            },
            view(id){                                                               
                mountView(Object.assign(ajaxWidget(),this.$store.getters.getAjaxById(id).option) ,{},(data)=>{                    
                    this.$store.dispatch("ajaxUpdate", {
                        id:id,
                        data:data
                    })
                })
            }
        }
    }
</script>
