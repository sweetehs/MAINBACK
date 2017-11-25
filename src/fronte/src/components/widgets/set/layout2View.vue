<style scoped>
    .el-input{
        width: 100px;
        margin: 0 10px;
    }
</style>

<template>
    <div>
        <Stylec @changeStatus="changeStatus" :styles="defaultData.styles"></Stylec>
    </div>
</template>

<script>    
    import Stylec from "../set/style"
    import util from "../../util/util"
    export default {
        data() {                        
            return {                                
               
            };
        },       
        watch:{
            
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

