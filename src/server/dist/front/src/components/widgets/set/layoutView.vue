<style scoped>
    
</style>

<template>
    <div>       
        <div class="right-form-item">
            <span class="text">弹性盒子：</span>
            <div class="content">
                <el-checkbox v-model="defaultData.temp.isFlex" @change="changeFlexBox"></el-checkbox>                
            </div>
        </div> 
        <div class="right-form-item">
            <span class="text">内容方向：</span>
            <div class="content">
                <el-radio @change="changeFlexValue" :disabled="!defaultData.temp.isFlex" v-model="defaultData.styles['flex-direction']" label="column">竖直</el-radio>
                <el-radio @change="changeFlexValue" :disabled="!defaultData.temp.isFlex" v-model="defaultData.styles['flex-direction']" label="row">水平</el-radio>                
            </div>           
        </div> 
         <div v-if="pvue" class="right-form-item">
            <span class="text"><el-checkbox @change="changeFlexValue"  :disabled="!defaultData.temp.isFlex" v-model="defaultData.temp.isFlexValue"></el-checkbox>flex：</span>
            <div class="content">
                <el-input :disabled="!defaultData.temp.isFlexValue||!defaultData.temp.isFlex" @change="changeFlexValue" size="small" v-model="defaultData.styles.flex"></el-input>                     
            </div>           
        </div> 
        <Stylec v-if="pvue" :disabled="disabled" @changeStatus="changeStatus" :styles="defaultData.styles"></Stylec>
    </div>
</template>

<script>    
    import Stylec from "../set/style"
    import util from "../../../util/util"
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
            this.changeFlexBox()                  
        },
        methods:{          
            changeFlexBox(){      
                
                if(this.defaultData.temp.isFlex){   
                    this.defaultData.styles.display = "flex"                 
                    this.changeFlexValue()                  
                }else{
                    this.defaultData.styles.display = "block"                 
                    this.defaultData.styles.flex = "none"
                    this.disabled.height = false
                    this.disabled.width = false                      
                    this.disabled = Object.assign({},this.disabled)
                }
                this.$emit("changeStatus",this.defaultData)            
            },
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
                this.$emit("changeStatus",this.defaultData)  
            },
            changeStatus(data){                                                                 
                if(util.isObject(data)){
                    Object.assign(this.defaultData.styles,data)                                        
                }
                this.$emit("changeStatus",this.defaultData)            
            }
        }
    };
</script>

