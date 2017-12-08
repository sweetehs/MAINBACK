<style>
    
</style>

<template>
    <div>       
        <div class="right-form-item">
            <span class="text">宽度：</span>
            <div class="content">                
                <el-input :disabled="disabled.width" size="small" v-model="styles.width"></el-input>              
            </div>           
        </div>         
         <div class="right-form-item">  
            <span class="text"> 高度：</span>
            <div class="content">                
                <el-input :disabled="disabled.height" size="small" v-model="styles.height"></el-input> 
            </div>                                
        </div>            
    </div>
</template>

<script>    
    export default {            
        props:["styles","disabled"],       
    };
</script>

