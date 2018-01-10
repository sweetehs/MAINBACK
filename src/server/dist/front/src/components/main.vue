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
.main-right{
  flex: 1;
  display: flex;
  flex-direction: column;
  .main-top{
    height: 60px;
    line-height: 60px;
		background: #41B883;
		flex-shrink: 0;
  }
  .main-middle {  
    flex: 1;    
    overflow: hidden;
  }
}

</style>

<template>
	<div id="main">   
		<div class="main-left">
			<Left></Left>
		</div>
		<div class="main-right">  
		<div class="main-top">
			<Top></Top>
		</div>  		
		<div class="main-middle">
			<Middle></Middle>
		</div>
		</div>    
	</div>
</template>

<script>
import Left from "./left"
import Middle from "./middle"
import Top from "./top"
export default {
	name: "app",
	data() {
		return {};
	},
	mounted() {},
	components: {
		Left: Left,
		Middle: Middle,
		Top:Top
	}
};
</script>

