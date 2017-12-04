<style lang="less">
#main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}
.main-left {    
  width: 240px;
  height: 100%;
  flex-shrink: 0
}
.main-middle {  
  flex: 1;
  height: 100%;
}
</style>

<template>
  <div id="main">   
    <div class="main-left"><Left></Left></div>      
    <div class="main-middle">      
      <Middle></Middle>
    </div>  		
  </div>
</template>

<script>
import Left from "./left"
import Middle from "./middle"
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

