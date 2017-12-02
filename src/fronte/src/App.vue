<style lang="less" scoped>
div {
  box-sizing: border-box;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: row;
}
.main-left {    
  width: 240px;
  height: 100%;
}
.main-middle {  
  flex: 1;
  height: 100%;
}
</style>

<template>
  <div id="app">    
    <div class="main-left"><Left></Left></div>      
    <div class="main-middle">      
      <Middle></Middle>
    </div>  		
  </div>
</template>

<script>
import Vue from "vue";
import Left from "./components/left";
import Middle from "./components/middle";
import Right from "./components/right";
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

