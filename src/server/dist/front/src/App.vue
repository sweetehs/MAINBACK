<style lang="less">
div {
  box-sizing: border-box;
}
#app {
  height: 100%;
}
</style>

<template>
  <div id="app">   
    <router-view></router-view> 		
  </div>
</template>

<script>
import Vue from "vue";
import Left from "./components/left"
import Middle from "./components/middle"
export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {},
  components: {
    Left: Left,
    Middle: Middle
  }
};
</script>

