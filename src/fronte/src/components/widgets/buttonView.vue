<style>
    
</style>

<template>
    <div>
        <div class="right-form-item">
            <header>文字</header><el-input v-model="text" @change="changeStatus" placeholder="请输入内容"></el-input>           
        </div>
        <div class="right-form-item">
            <header>形状</header>
            <label v-for="(item,index) in staticConfig.type" :key="index">
                  <el-radio @change="changeStatus" v-model="type" :label="item">{{item}}</el-radio>
              </label>
        </div>
        <div class="right-form-item">
            <header>颜色</header>
            <label v-for="(item,index) in staticConfig.color" :key="index">
                  <el-radio @change="changeStatus" v-model="color" :label="item">{{item}}</el-radio>
              </label>
        </div>
        <div class="right-form-item">
            <header>尺寸</header>
            <label v-for="(item,index) in staticConfig.size" :key="index">
                  <el-radio @change="changeStatus" v-model="size" :label="item">{{item}}</el-radio>
            </label>
        </div>
        <!-- <Stylec></Stylec> -->
    </div>
</template>

<script>    
    import Stylec from "./_style"
    export default {
        data() {            
            return {                                
                type: this.defaultData.type,
                color: this.defaultData.color,
                size: this.defaultData.size,
                text: this.defaultData.text
            };
        },       
        props:['defaultData','staticConfig'],
         components:{
            Stylec:Stylec
        },
        methods:{
            changeStatus(){
                this.$emit("changeStatus",{
                    type:this.type,
                    color:this.color,
                    size:this.size,
                    text:this.text
                })            
            }
        }
    };
</script>

