<style>
    
</style>

<template>
    <div>       
        <div class="right-form-item">
            <span class="text">宽度：</span>
            <div class="content">
                <el-input @change="changeStatus" size="small" v-model="width"></el-input>              
            </div>           
        </div>         
         <div class="right-form-item">  
            <span class="text"> 高度：</span>
            <div class="content">
                <el-input @change="changeStatus" size="small" v-model="height"></el-input> 
            </div>                                
        </div>            
    </div>
</template>

<script>    
    export default {
        data(){            
            return {
                width:this.styles.width,
                height:this.styles.height,
                flex:this.styles.flex
            }
        },
        props:["styles"],
        methods:{
            changeStatus(){                
                this.$emit("changeStatus",{
                    width:this.width,
                    height:this.height,
                    flex:this.flex
                })
            }
        }
    };
</script>

