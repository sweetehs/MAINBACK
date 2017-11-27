<style lang="less">
	.dnd-drop-content{
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}
	.middle-wrapper,.middle-inner{
		height: 100%;
	}	
	.widget-item {
		display: inline-block;
	}	
	.widget-layout{
		box-sizing: border-box;		
		background: #FFFAFA;
		border-radius: 10px;
		border: 1px solid #333;
		display: flex;
		&.active{
			background: #FFEBCD;
		}
	}
</style>

<template>
	<div class="middle-wrapper">		
		<Droppable @drop="drop"></Droppable>			
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
			return {
				styles:{
					height:"100%",
					width:"100%"
				}
			};
		},		
		mounted(){
			
		},
		methods: {
			drop(params) {
				const data = widgetConfig[params.data]()
				const id = util.randomid()
				mount(params.el,id,data,this.$store)
			}
		}		
	}
</script>
