<template>
    <div>
        <div class="right-form-item">
            <span class="text">describe：</span>
            <div class="content">
                <el-input class="large" type="textarea" v-model="defaultData.describe" placeholder="请输入内容"></el-input>           
            </div>             
        </div>
        <div class="right-form-item">
            <span class="text">pholder：</span>
            <div class="content">
                <el-input class="large" v-model="defaultData.attr.placeholder" placeholder="请输入内容"></el-input>           
            </div>             
        </div>
        <div v-for="(item,key) in staticConfig1" :key="key" class="right-form-item fs">
            <span class="text">{{key}}：</span>
            <div class="content">
                <label v-for="(item1,key1) in item" :key="key1">
                  <el-radio v-model="defaultData.attr[key]" :label="item1">{{item1}}</el-radio>
                 </label>
            </div>            
        </div>         
        <Stylec :styles="defaultData.styles" :disabled="{}"></Stylec>        
    </div>
</template>

<script>    
    import Stylec from "./style"
    import util from "../../../util/util"
    export default {       
        props:['defaultData','staticConfig'],
        components:{
            Stylec:Stylec
        },
        data(){
            var staticConfig1 = util.ofilter(this.staticConfig,(index,item)=>{
                return util.isArray(item)
            })            
            return {
                staticConfig1:staticConfig1
            }
        }
    };
</script>

