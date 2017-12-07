<style lang="less">
    .widget-wrapper{
        position: relative;
        &.widget-item {
            display: inline-block;
        }	
        &.widget-layout{
            background: #eee;	
            box-sizing: border-box;					
            border-radius: 4px;
            box-shadow: 0 0 2px #333;
            display: flex;
            position: relative;
            &.widget-active{
                background: #FFEBCD;
            }
            &.drag-enter{
                background: #ced
            }
            .resize{
                position: absolute;
                height: 5px;
                width: 5px;
                background: #000;
                bottom: 0;
                right: 0;
            }
        }
        .widget-item-inner{
            display: inline-block;
            position: relative;
        }
    }
    .draw-wrapper{
        display: flex;
        flex-direction: column;
        height: 100%;
        .draw-inner{
            flex: 1;
        }
    }	
</style>
<template>
  <div class="draw-wrapper" @contextmenu="preventRight">
        <div class="action-wrapper">
            <Action ref="action" @initAll="initAll"></Action>
        </div>
        <div class="draw-inner"></div>
    </div>
</template>
<script>
    import widgetConfig from "./widgets/config"
    import util from "../util/util"	
    import {
		mount
	} from "./widgets/mount";	
    import Action from "./action"
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
				document.querySelector(".draw-inner").innerHTML = ""	
				if(this.$store.state.widgets.length == 0){
				// 初始化
					let $wrapper = document.getElementsByClassName("draw-inner")[0]
					mount($wrapper,"c0", widgetConfig["layout"](),this.$store,true)
				}else{
					util.loop(this.$store.state.widgets,(_data)=>{					
						if(!_data.pid){						
							let $wrapper = document.getElementsByClassName("draw-inner")[0]
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
			Action: Action
		}
	}
</script>

