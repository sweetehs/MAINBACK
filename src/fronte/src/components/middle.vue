<style lang="less">
	.dnd-drop-content{
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}
	.middle-wrapper{
		height: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	.middle-content{
		flex:1;
		height: 100%;				
		&.fixed{
			z-index: 999;
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top:0;
		}		
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
		<Commonaction ref="action" @initAll="initAll"></Commonaction>	
		<div class="middle-content" @contextmenu="preventRight"></div>			
	</div>	
</template>

<script>
	import widgetConfig from "./widgets/config"
	import util from "./util/util"
	import Commonaction from "./widgets/set/commonAction"
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
			this.initAll()
		},
		methods:{
			initAll(){
				document.querySelector(".middle-content").innerHTML = ""				
				if(this.$store.state.widgets.length == 0){
				// 初始化
					let $wrapper = document.getElementsByClassName("middle-content")[0]
					mount($wrapper,"c0", widgetConfig["layout"](),this.$store,true)
				}else{
					util.loop(this.$store.state.widgets,(_data)=>{					
						if(!_data.pid){						
							let $wrapper = document.getElementsByClassName("middle-content")[0]
							mount($wrapper,"c0",Object.assign(widgetConfig[_data.option.name](),_data.option),this.$store,false)						
						}else{
							let $wrapper = document.querySelector("." + _data.pid)						
							mount($wrapper,_data.id, Object.assign(widgetConfig[_data.option.name](),_data.option),this.$store,false)						
						}
					})
				}	
			},			
			preventRight(event){					
				this.$refs.action.setData({
					x:(event.pageX - this.$el.getBoundingClientRect().x) + "px",
					y:(event.pageY - this.$el.getBoundingClientRect().y) + "px",
					target:event.target
				})
				event.preventDefault()
			}
		}
	}
</script>
