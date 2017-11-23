<style>
    
</style>

<template>
    <div>
        <div class="right-form-item">
            <header>文本</header><el-input v-model="text" @change="changeStatus"></el-input>           
        </div>
        <div class="right-form-item">
            <header>placeholder</header><el-input v-model="placeholder" @change="changeStatus"></el-input>           
        </div>
        <div class="right-form-item">
            <header>类型</header>
            <label v-for="(item,index) in staticConfig.type" :key="index">
                  <el-radio @change="changeStatus" v-model="type" :label="item">{{item}}</el-radio>
              </label>
        </div>        
        <div class="right-form-item">
            <header>尺寸</header>
            <label v-for="(item,index) in staticConfig.size" :key="index">
                  <el-radio @change="changeStatus" v-model="size" :label="item">{{item}}</el-radio>
              </label>
        </div>
        <div class="right-form-item">
            <header>只读</header>
            <label v-for="(item,index) in staticConfig.readonly" :key="index">
                  <el-radio @change="changeStatus" v-model="readonly" :label="item">{{item}}</el-radio>
              </label>
        </div>
    </div>
</template>

<script>    
    export default {
        data() {            
            return {                 
                text:this.defaultData.text,               
                placeholder: this.defaultData.placeholder,
                type: this.defaultData.type,
                size: this.defaultData.size,
                readonly: this.defaultData.readonly
            };
        },       
        props:['defaultData','staticConfig'],
        methods:{
            changeStatus(){
                this.$emit("changeStatus",{
                    text:this.text,
                    placeholder: this.placeholder,
                    type: this.type,
                    size: this.size,
                    readonly: this.readonly
                })            
            }
        }
    };
</script>

