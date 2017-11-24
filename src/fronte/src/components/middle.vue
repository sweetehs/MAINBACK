<style lang="less">
	.middle-wrapper,.middle-inner{
		height: 100%;
	}
	.widget-item {
		display: inline-block;
	}	
	.widget-layout{
		height: 100%;
		>div{
			height:100%;
		}
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
	import widgetConfig from "./widgets/config";
	import util from "./util/util"
	import {
		mount
	} from "./widgets/mount";	
	export default {
		data() {
			return {};
		},		
		mounted(){
			
		},
		methods: {
			drop(params) {
				const data = widgetConfig[params.data]()
				const id = util.randomid()
				mount(params.el.children[0],id,data,this.$store)
			}
		}		
	}
</script>
