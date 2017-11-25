<style scoped>
    
</style>

<template>
    <div>
        <div class="right-form-item">
            <span class="text">是否弹性：</span>
            <div class="content">
                <label>
                    <el-radio @change="changeStatus" v-model="isFlex" label="true">是</el-radio>
                </label>
                <label>
                    <el-radio @change="changeStatus" v-model="isFlex" label="false">否</el-radio>              
                </label>                
            </div>           
        </div> 
        <div class="right-form-item">
            <span class="text">弹性盒子：</span>
            <div class="content">
                <el-input @change="changeStatus" size="small" v-model="flex"></el-input>              
            </div>           
        </div> 
        <div class="right-form-item">
            <span class="text">盒子方向：</span>
            <div class="content">
                <el-radio @change="changeStatus" v-model="defaultData.styles['flex-direction']" label="column">纵向</el-radio>
                <el-radio @change="changeStatus" v-model="defaultData.styles['flex-direction']" label="row">横向</el-radio>                
            </div>           
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
                isFlex: this.defaultData.styles.width == "auto" ? "true" : "false",   
                flex: this.defaultData.styles.flex
            };
        },       
        watch:{
            flex(){
                
            }
        },
        props:['defaultData','staticConfig'],
        components:{
            Stylec:Stylec
        },
        methods:{
            changeStatus(data){                               
                if(util.isObject(data)){
                    Object.assign(this.defaultData.styles,data)                                        
                }     
                if(this.isFlex === "true"){
                    this.defaultData.styles.flex = this.flex;
                    this.defaultData.styles.width = "auto"
                }else{
                     this.defaultData.styles.flex = "none";                     
                }
                this.$emit("changeStatus",this.defaultData)            
            }
        }
    };
</script>

