<style>
    
</style>

<template>
    <div class="buttonview">
        <div>
            <header>形状</header>
            <label v-for="(item,index) in config.type" :key="index">
                  <el-radio v-model="type" :label="item">{{item}}</el-radio>
              </label>
        </div>
        <div>
            <header>颜色</header>
            <label v-for="(item,index) in config.color" :key="index">
                  <el-radio v-model="color" :label="item">{{item}}</el-radio>
              </label>
        </div>
        <div>
            <header>尺寸</header>
            <label v-for="(item,index) in config.size" :key="index">
                  <el-radio v-model="size" :label="item">{{item}}</el-radio>
              </label>
        </div>
    </div>
</template>

<script>
    import button from "./button";
    export default {
        data() {
            return {
                config: button.config,
                type: button.config.type[0],
                color: button.config.color[0],
                size: button.config.size[0]
            };
        }
    };
</script>

