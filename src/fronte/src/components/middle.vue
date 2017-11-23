<style lang="less">
	.middle-wrapper,.middle-inner{
		height: 100%;
	}
	.widget-item {
		display: inline-block;
	}	
</style>

<template>
	<div class="middle-wrapper">
		<Droppable @drop="drop">
			<div class="middle-inner"></div>
		</Droppable>		
	</div>
</template>

<script>	
	import widgetConfig from "./widgets/_config";
	import {
		mount
	} from "./widgets/_mount";
	const getId = () => {
		return 'c' + parseInt(Math.random() * 100000000)		
	}
	export default {
		data() {
			return {};
		},		
		methods: {
			drop(params) {				
				const data = widgetConfig[params.data]()
				const id = getId()
				mount(params.el.children[0],id,data)
			}
		}		
	}
</script>
