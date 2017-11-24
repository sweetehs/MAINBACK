<style scoped>
    .el-input{
        width: 100px;
        margin: 0 10px;
    }
</style>

<template>
    <div>
        <div class="right-form-item">
            <header>栏数</header>
            <el-input v-model="num" @change="changeStatus"></el-input>           
        </div>
        <header>栏宽</header>
        <div class="right-form-item" v-for="(item,index) in defaultData.num" :key="index">            
            px:<el-input v-model="defaultData.num[index].width" @change="changeStatus"></el-input>
            flex:<el-input v-model="defaultData.num[index].flex" @change="changeStatus"></el-input>  
        </div>
        <Stylec @changeStatus="changeStatus" :styles="defaultData.styles"></Stylec>
    </div>
</template>

<script>    
    import Stylec from "../set/style"
    import util from "../../util/util"
    export default {
        data() {                        
            return {                                
               num:1
            };
        },       
        watch:{
            num(a,b){
                b = b||1
                if(a>b){
                    for(var i=0;i<a-b;i++){
                        this.defaultData.num.push({
                            width:"",
                            flex:1
                        })
                    }
                    
                }else{
                    for(var i=0;i<b-a;i++){
                        this.defaultData.num.pop()
                    }
                }                
            }
        },
        props:['defaultData','staticConfig'],
        components:{
            Stylec:Stylec
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

