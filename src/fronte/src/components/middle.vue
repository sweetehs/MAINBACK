<style lang="less">
	.middle-wrapper{
		height: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	.middle-action{
		height: 60px;
		line-height: 60px;
		border-bottom: 1px solid #CFCFCF;
	}
	.middle-content{
		flex:1;			
		display: flex;				
	}	
	.middle-draw{
		height: 100%;
		flex: 1;		
		&.fixed{
			z-index: 999;
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top:0;
		}		
	}
	.middle-set{
		width: 330px;
	}
	.widget-wrapper{
		position: relative;
		&.widget-item {
			display: inline-block;
		}	
		&.widget-layout{
			box-sizing: border-box;		
			background: #eee;
			border-radius: 4px;
			box-shadow: 0 0 2px #333;
			display: flex;
			&.widget-active{
				background: #FFEBCD;
			}
			&.drag-enter{
				background: #ced
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
		<div class="middle-action">
			<Action ref="action" @initAll="initAll"></Action>	
		</div>		
		<div class="middle-content">
			<div class="middle-draw" @contextmenu="preventRight"></div>
			<div class="middle-set"><Right></Right></div>
		</div>			
	</div>	
</template>

<script>
	import widgetConfig from "./widgets/config"
	import Right from "./right"
	import Action from "./action"
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
			this.initAll()
		},
		methods:{
			initAll(){
				document.querySelector(".middle-draw").innerHTML = ""				
				if(this.$store.state.widgets.length == 0){
				// 初始化
					let $wrapper = document.getElementsByClassName("middle-draw")[0]
					mount($wrapper,"c0", widgetConfig["layout"](),this.$store,true)
				}else{
					util.loop(this.$store.state.widgets,(_data)=>{					
						if(!_data.pid){						
							let $wrapper = document.getElementsByClassName("middle-draw")[0]
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
		},
		components:{
			Right: Right,
			Action: Action
		}
	}
</script>
