<template>
    <div>        
        <div class="right-form-item" v-if="defaultData.text">
            <header>文字</header><el-input v-model="defaultData.text" @change="changeStatus" placeholder="请输入内容"></el-input>           
        </div>
        <div class="right-form-item" v-if="defaultData.placeholder">
            <header>placeholder</header><el-input v-model="defaultData.placeholder" @change="changeStatus" placeholder="请输入内容"></el-input>           
        </div>
        <div>           
        </div>
        <div v-for="(item,key) in staticConfig1" :key="key" class="right-form-item">
            <header>{{key}}</header>
            <label v-for="(item1,key1) in item" :key="key1">
                  <el-radio @change="changeStatus" v-model="defaultData[key]" :label="item1">{{item1}}</el-radio>
              </label>
        </div>         
        <Stylec @changeStatus="changeStatus" :styles="defaultData.styles"></Stylec>        
    </div>
</template>

<script>    
    import Stylec from "./style"
    import util from "../../util/util"
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
        },
        watch:{
           
        },
        methods:{
            changeStatus(data){
                if(util.isObject(data)){
                    this.defaultData.styles = data;                    
                }                
                this.$emit("changeStatus",this.defaultData)            
            }
        }
    };
</script>

