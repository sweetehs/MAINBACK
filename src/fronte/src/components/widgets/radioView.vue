<style>
    
</style>

<template>
    <div>
        <div class="right-form-item">
            <header>个数</header><el-input v-model="num" @change="changeStatus" size="small"></el-input>           
        </div> 
        <div class="right-form-item">
            <header>文字</header>
            <p v-for="(item,index) in text" :key="index">
                <el-input v-model="text[index]" @change="changeStatus" size="small"></el-input>
            </p>
        </div>        
        <div class="right-form-item">
            <header>边框</header>
            <label v-for="(item,index) in staticConfig.border" :key="index">
                  <el-radio @change="changeStatus" v-model="border" :label="item">{{item}}</el-radio>
            </label>
        </div>
        <div class="right-form-item">
            <header>尺寸</header>
            <label v-for="(item,index) in staticConfig.size" :key="index">
                  <el-radio @change="changeStatus" v-model="size" :label="item">{{item}}</el-radio>
            </label>
        </div>
        <div class="right-form-item">
            <header>按钮</header>
            <label v-for="(item,index) in staticConfig.isbutton" :key="index">
                  <el-radio @change="changeStatus" v-model="isbutton" :label="item">{{item}}</el-radio>
            </label>
        </div>
    </div>
</template>

<script>    
    export default {
        data() {                                    
            return {        
                isbutton:this.defaultData.isbutton,             
                num:this.defaultData.num,           
                border: this.defaultData.border,               
                size: this.defaultData.size,
                text: this.defaultData.text
            };
        },
        watch:{
            num(){
                for(let i=1;i<this.num;i++){
                    this.text.push("选项")
                }
            }
        },
        props:['defaultData','staticConfig'],
        methods:{
            changeStatus(){
                this.$emit("changeStatus",{
                    isbutton:this.isbutton,
                    num:this.num,
                    border:this.border,                    
                    size:this.size,
                    text:this.text
                })            
            }
        }
    };
</script>

