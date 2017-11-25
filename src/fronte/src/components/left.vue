<style lang="less" scoped>
	
</style>

<template>
	<div class="left-warpper">
		<Draggable data="button">
			<el-button>按钮</el-button>
		</Draggable>
		<Draggable data="radio">
			<el-radio>单选</el-radio>
		</Draggable>
		<Draggable data="input">
			<el-input :readonly="true"></el-input>
		</Draggable>
		<Draggable data="layout">
			<div>一列布局</div>
		</Draggable>
		<Draggable data="layout2">
			<div>两列布局</div>
		</Draggable>
	</div>
</template>

<script>
	import Draggable from "./util/draggable";
	export default {
		data() {
			return {
	
			};
		},
		components: {
			Draggable: Draggable
		}
	};
</script>
