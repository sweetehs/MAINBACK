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
	.widget-wrapper{
		position: relative;
		&.widget-item {
			display: inline-block;
		}	
		&.widget-layout{
			box-sizing: border-box;		
			background: #FFFAFA;
			border-radius: 10px;
			box-shadow: 0 0 4px #333;
			display: flex;
			&.widget-active{
				background: #FFEBCD;
			}
		}
		.widget-item-inner{
			display: inline-block;
			position: relative;
		}
	}
	
</style>

<template>
	<div class="middle-wrapper">		
		<!-- <Droppable @drop="drop"></Droppable> -->
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
			if(this.$store.state.widgets.length == 0){
				let $wrapper = document.getElementsByClassName("middle-wrapper")[0]
				mount($wrapper,util.randomid(), widgetConfig["layout"](),this.$store)
			}else{
				util.loop(this.$store.state.widgets,(_data)=>{					
					if(!_data.pid){						
						let $wrapper = document.getElementsByClassName("middle-wrapper")[0]
						mount($wrapper,_data.id, widgetConfig[_data.option.name](),this.$store,true)						
					}else{
						let $wrapper = document.querySelector("." + _data.pid + " .dnd-drop-content")						
						mount($wrapper,_data.id, widgetConfig[_data.option.name](),this.$store,true)						
					}
				})
			}			
		}
	}
</script>
