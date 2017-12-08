<style lang="less" scoped>
    .event-list{
        li{
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #D8DCE5;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &:last-child{
                border: none
            }
        }
    }
    .event-detail{
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: #fff;
        .el-icon-close{
            position: absolute;
            right: 0;
            top: 0;
        }
    }
</style>

<template>
    <div class="event-wrapper">
        <ul class="event-list">
            <li v-for="(item,index) in eventData" :key="index">
                {{item.describe}}
                <el-button @click="edit(item)" size="mini" type="primary">编辑</el-button>
            </li>
            <li><el-button size="mini" type="primary">增加</el-button></li>
        </ul>
        <div class="event-detail" v-show="showDetail">
            <i class="el-icon-close" @click="showDetail=false"></i>                       
            <div v-for="(item,index) in currentEdit.action" :key="index">
                <div class="right-form-item">
                    <span class="text">type：</span>            
                    <div class="content">{{item.detail.option.name}}</div>
                </div>
                <div class="right-form-item ">
                    <span class="text">event：</span>            
                    <div class="content">
                        <el-radio v-for="(er,index) in eventList" v-model="item.name" :key="index" :label="er">{{er}}</el-radio>
                    </div>             
                </div>
                <div :class="'event'+item.detail.id"></div>
            </div>
        </div>
        <el-dialog title="增加事件">
            xxx
        </el-dialog>
    </div>
</template>
<script>
    import Vue from "vue"
    export default{
        data(){                       
            return {
                showDetail:false,
                currentEdit:"",
                eventList:['click','change']
            }
        },
        props:["store","eventData"],
        methods:{
            edit(data){
                var that = this
                data.action.map((_d)=>{    
                    // 暂时写死  ajax数据
                    _d.detail = this.store.getters.getAjaxById(_d.id)   
                    setTimeout(()=>{
                        new Vue({
                            template:`<Ajaxview :defaultData="defaultData" :disabled="true"></Ajaxview>`,
                            el:this.$el.querySelector(".event"+_d.id),
                            data(){
                                // debugger;                                
                                return {
                                    defaultData:_d.detail.option.data
                                }
                            }
                        })     
                    },50)
                                   
                })
                this.showDetail = true
                debugger;
                this.currentEdit = data                  
            }
        }
    }
</script>
