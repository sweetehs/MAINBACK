<style scoped>
    
</style>

<template>
    <div>       
        <div class="right-form-item">
            <span class="text">
                <el-checkbox v-model="isFlex" @change="changeStatus"></el-checkbox>
                弹性盒子：
            </span>
            <div class="content">
                <el-input :disabled="!isFlex" @change="changeStatus" size="small" v-model="defaultData.styles.flex"></el-input>              
            </div>           
        </div> 
        <div class="right-form-item">
            <span class="text">盒子方向：</span>
            <div class="content">
                <el-radio @change="changeStatus" v-model="defaultData.styles['flex-direction']" label="column">竖直排列</el-radio>
                <el-radio @change="changeStatus" v-model="defaultData.styles['flex-direction']" label="row">水平排列</el-radio>                
            </div>           
        </div> 
        <Stylec :disabled="disabled" @changeStatus="changeStatus" :styles="defaultData.styles"></Stylec>
    </div>
</template>

<script>    
    import Stylec from "../set/style"
    import util from "../../util/util"
    export default {
        data() {                        
            return {     
                isFlex:true,
                disabled:{}
            };
        },       
        watch:{            
        },
        props:['defaultData','staticConfig','pvue'],
        components:{
            Stylec:Stylec
        },
        created(){
            this.changeDisabled()            
        },
        methods:{
            changeDisabled(){                         
                if(!this.pvue || !this.pvue._vue){
                    return 
                }         
                if(this.isFlex){                                             
                    if(this.pvue._vue.defaultData.styles["flex-direction"] == "column"){
                        this.disabled.height = true
                        this.disabled.width = false                        
                    }else{
                        this.disabled.height = false
                        this.disabled.width = true                        
                    }
                }else{
                    this.defaultData.styles.flex = "none"
                    this.disabled.width = false
                    this.disabled.height = false
                }
                this.disabled = Object.assign({},this.disabled)
            },
            changeStatus(data){
                // 判断禁用               
                this.changeDisabled()                           
                if(util.isObject(data)){
                    Object.assign(this.defaultData.styles,data)                                        
                }
                this.$emit("changeStatus",this.defaultData)            
            }
        }
    };
</script>

