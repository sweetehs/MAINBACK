<style lang="less" scoped>
div {
  box-sizing: border-box;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main-top {
  height: 50px;
  border-bottom: 1px solid #abc;
}
.main-bottom {
  flex: 1;
  display: flex;
}
.main-left {
  padding: 10px;
  border-right: 1px solid #abc;
  width: 300px;
}
.main-right {
  padding: 10px;
  border-left: 1px solid #abc;
  width: 300px;
}
.main-middle {
  padding: 10px;
  flex: 1;
}
</style>

<template>
  <div id="app">            
		<div class="main-top"></div>
		<div class="main-bottom">
			<div class="main-left">
				<Left></Left>
			</div>
			<div class="main-middle">
        <Middle></Middle>
      </div>
      <div class="main-right">
        <Right></Right>
      </div>
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
    Middle: Middle,
    Right: Right
  }
};
</script>

