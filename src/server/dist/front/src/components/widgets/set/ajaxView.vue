<style>

</style>
<template>
    <div>
        <div class="right-form-item">
            <span class="text">describe：</span>
            <div class="content">
                <el-input type="textarea" class="large" v-model="defaultData.ajaxData.describe" :disabled="disabled"></el-input>                            
            </div>
        </div>
        <div class="right-form-item">
            <span class="text">URL：</span>
            <div class="content">
                <el-input class="large" placeholder="请输入url" v-model="defaultData.ajaxData.url" :disabled="disabled"></el-input>           
            </div>
        </div>       
        <div class="right-form-item">
            <span class="text">method：</span>
            <div class="content">
                <el-radio v-model="defaultData.ajaxData.method" label="get" :disabled="disabled">get</el-radio>
                <el-radio v-model="defaultData.ajaxData.method" label="post" :disabled="disabled">post</el-radio>                                  
            </div>
        </div>       
        <div class="right-form-item">
            <span class="text">params：</span>
            <div class="content">
                <p class="fn-iblock" v-for="(item,index) in defaultData.ajaxData.params" :key="index">
                    <el-input placeholder="请输入参数" v-model="item.key" :disabled="disabled"></el-input>                          
                    <el-input placeholder="请输入参数测试值" v-model="item.test" :disabled="disabled"></el-input>      
                    <i v-if="!disabled" class="el-icon-minus" @click="deletei(index)"></i>
                    <i class="el-icon-plus" v-if="!disabled" @click="add()"></i>
                </p>                   
                <i class="el-icon-plus" v-if="disabled"  @click="showLinkForm()"></i>
            </div>
        </div>
        <div v-if="disabled">
            <div class="right-form-item">
                <span class="text">关联：</span>
                <div class="content">
                    <span v-if="defaultData.ajaxData.link">
                        {{defaultData.ajaxData.link.id}}
                    </span>  
                    <el-button type="primary" size="mini" @click="showLinkTable">关联</el-button>
                </div>
            </div>                       
        </div>         
        <div>
            <el-dialog title="可以关联的table"  :visible.sync="isShowLinkTable" width="600px" >
                <div class="fn-pointer" v-for="(item,index) in tableList" @click="link(item)" :key="index">{{item.option.data.table.describe}}</div>
            </el-dialog>
            <el-dialog title="可以关联的form"  :visible.sync="isShowForms" width="600px" >
                <el-radio v-for="(er,index) in linkForms" v-model="currentLinkRadio" :key="index" :label="er">{{er}}</el-radio>
            </el-dialog>
        </div>
    </div>
</template>
<script>
    import store from "../../../store/store"
    export default{
        data(){
            return {
                isShowLinkTable:false,
                isShowForms:false,
                tableList:store.getters.getWidgetByType("table"),
                linkForms:['input','select'],
                currentLinkRadio:'input',
                linkFormList:[]
            }
        },
        props:["defaultData","disabled"],
        /*
            disabled=false  代表自己的数据
            disabled=true   代表供外部查看的数据可以有关联功能
        */
        methods:{
            deletei(index){
                this.defaultData.ajaxData.params.splice(index,1)
            },
            add(){
                this.defaultData.ajaxData.params.push({
                    key: "key",
                    test: "testValue"
                })
            },
            showLinkTable(){             
                this.linkFormList = store.getters.getWidgetByType(this.currentLinkRadio)
                this.isShowLinkTable = true
            },
            showLinkForm(){
                this.isShowForms = true
            },
            link(item){ 
                this.isShowLinkTable = false
                this.defaultData.ajaxData.link = item                
            }
        }
    }
</script>