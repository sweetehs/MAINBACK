<style lang="less" scoped>
    .event-list {
        li {
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #D8DCE5;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &:last-child {
                border: none
            }
        }
    }
    
    .event-detail {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: #fff;
        .el-icon-close {
            position: absolute;
            right: 0;
            top: 0;
        }
    }
</style>

<template>
    <div class="event-wrapper">
        <ul class="event-list">
            <li v-for="(item,index) in defaultData.event" :key="index">
                {{item.describe}}
                <div>
                    <el-button @click="deletei(index)" size="mini" type="primary">删除</el-button>
                    <el-button @click="edit(item)" size="mini" type="primary">编辑</el-button>
                </div>
            </li>
            <li>
                <el-button size="mini" type="primary" @click="eventAdd">增加</el-button>
            </li>
        </ul>
        <div class="event-detail" v-show="showDetail">
            <i class="el-icon-close" @click="showDetail=false"></i>
            <div class="right-form-item">
                <span class="text">type：</span>
                <div class="content">
                    <el-radio v-for="(er,index) in eventList" v-model="currentData.type" :key="index" :label="er">{{er}}</el-radio>
                </div>
            </div>
            <div class="right-form-item">
                <span class="text">describe：</span>
                <div class="content">
                    <el-input type="textarea" class="large" v-model="currentData.describe"></el-input>
                </div>
            </div>
            <div class="render-action"></div>
            <div class="fn-align-center fn-mt10">
                <el-button type="primary" size="large" @click="showAjaxDialog">增加ajax</el-button>
            </div>
        </div>
        <el-dialog  title="ajax列表"  :visible.sync="isShowAddAjax" width="600px" >
            <div class="fn-pointer" v-for="(item,index) in ajaxList" :key="index" @click="addAjax(item)">{{item.option.data.ajaxData.describe}}</div>
        </el-dialog>
    </div>
</template>

<script>
    import Vue from "vue"
    import util from "../../../util/util"
    export default {
        data() {         
            debugger;   
            return {
                showDetail: false,
                currentData: "",
                eventList: ['click', 'change'],
                isShowAddAjax:false,
                ajaxList: this.store.state.ajax
            }
        },
        props: ["store", "defaultData"],
        methods: {
            _renderAction(){
                this.currentData.action.map((_d) => {
                    // // 暂时写死  ajax数据
                    let $div = document.createElement("div")
                    this.$el.querySelector(".render-action").appendChild($div)          
                    debugger;                              
                    new Vue({
                        template: `<Ajaxview :defaultData="defaultData" :disabled="true"></Ajaxview>`,
                        el: $div,
                        data() {                                                 
                            return {
                                defaultData: _d.option.data
                            }
                        }
                    })                    
                })
            },
            edit(data) {                       
                this.showDetail = true
                this.currentData = data
                this._renderAction()
            },
            deletei(index) {
                this.defaultData.event.splice(index, 1)
            },
            eventAdd() {
                this.currentData = {
                    type: "click",
                    describe: "请输入描述",
                    status: 'add',
                    action: []
                }
                this.defaultData.event.push(this.currentData)
                this.showDetail = true;
            },
            showAjaxDialog(){                
                this.isShowAddAjax = true
            },
            addAjax(item){                     
                this.currentData.action.push(util.deepClone(item))
                this._renderAction()
                this.isShowAddAjax = false
            }
        }
    }
</script>
