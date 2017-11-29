<style scoped>
    
</style>

<template>
    <div>       
        <div class="right-form-item">
            <span class="text">弹性盒子：</span>
            <div class="content">
                <el-checkbox v-model="defaultData.temp.isFlex" @change="changeStatus"></el-checkbox>                
            </div>
        </div> 
        <div class="right-form-item">
            <span class="text">内容方向：</span>
            <div class="content">
                <el-radio @change="changeStatus" v-model="defaultData.styles['flex-direction']" label="column">竖直排列</el-radio>
                <el-radio @change="changeStatus" v-model="defaultData.styles['flex-direction']" label="row">水平排列</el-radio>                
            </div>           
        </div> 
         <div v-if="pvue" class="right-form-item">
            <span class="text"><el-checkbox v-model="defaultData.temp.isFlexValue" @change="changeFlexValue"></el-checkbox>flex：</span>
            <div class="content">
                <el-input :disabled="!defaultData.temp.isFlexValue" @change="changeFlexValue" size="small" v-model="defaultData.styles.flex"></el-input>                     
            </div>           
        </div> 
        <Stylec v-if="pvue" :disabled="disabled" @changeStatus="changeStatus" :styles="defaultData.styles"></Stylec>
    </div>
</template>

<script>    
    import Stylec from "../set/style"
    import util from "../../util/util"
    export default {
        data() {                        
            return {     
                isFlex:this.defaultData.temp.isFlex,
                disabled:{}
            };
        },       
        props:['defaultData','staticConfig','pvue'],
        components:{
            Stylec:Stylec
        },
        created(){                
            this.changeFlexValue()                  
        },
        methods:{          
            changeFlexValue(){                
                if(this.defaultData.temp.isFlexValue && this.pvue){
                    if( this.defaultData.styles.flex == "none"){
                        this.defaultData.styles.flex = 1
                    }
                    if(this.pvue.option.data.styles["flex-direction"] == "column"){
                        this.disabled.height = true
                        this.disabled.width = false                       
                    }else{
                        this.disabled.width = true
                        this.disabled.height = false
                    }
                }else{
                    this.defaultData.styles.flex = "none"
                    this.disabled.height = false
                    this.disabled.width = false
                }
                this.disabled = Object.assign({},this.disabled)
            },
            changeStatus(data){                                
                // 判断禁用                               
                if(this.defaultData.temp.isFlex){    
                    this.defaultData.styles.display = "flex"                     
                }else{                    
                    this.defaultData.styles.display = "block"                  
                }                          
                if(util.isObject(data)){
                    Object.assign(this.defaultData.styles,data)                                        
                }
                this.$emit("changeStatus",this.defaultData)            
            }
        }
    };
</script>

