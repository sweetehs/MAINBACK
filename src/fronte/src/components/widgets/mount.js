import Vue from 'vue'
import { Drop } from "dnd.js";
import util from '../util/util'
import widgetConfig from "./config"

export function mount($wrapper, id, option, $store, notSave) {	
	var $pWrapper = util.getParentByClassName($wrapper, "widget-wrapper")
	var pid = $pWrapper ? $pWrapper.className.match(/c\d{0,8}/)[0] : ""	
	let pvue = $store.getters.getById(pid)	
	let $div = document.createElement("div")
	$wrapper.appendChild($div)
	// create item
	const _vue = new Vue({
		template: option.tmp(),
		el: $div,
		data() {
			return {
				defaultData: option.data,
				wrappernode: $div
			}
		},
		mounted() {
			this.$el.addEventListener("click", (event) => {
				this.view(event)
			})			
			// 拖拽绑定
			if (option.name == "layout") {
				this.$el.className = this.$el.className + " widget-wrapper widget-layout " + id
				new Drop(this.$el, {
					onDrop(params) {
						const data = widgetConfig[params.data]()
						const id = util.randomid()
						mount(params.el, id, data, $store)
					}
				})
			} else {
				this.$el.className = this.$el.className + " widget-wrapper widget-item " + id
			}
		},
		destroyed() {
			this.wrappernode.remove()

		},		
		methods: {			
			view(event) {
				var $active = document.querySelectorAll(".widget-active")[0]
				if ($active) {
					$active.className = $active.className.replace(" widget-active", "")
				}				
				this.$el.className = this.$el.className + " widget-active"
				// 生产设置				
				let $rightinner = document.getElementsByClassName("right-inner")[0]
				let $div = document.createElement("div")
				$rightinner.innerHTML = ""
				$rightinner.appendChild($div)
				new Vue({
					template: option.view(),
					el: $div,
					data() {						
						return {
							staticConfig: option.staticConfig,
							defaultData: option.data,
							pvue: pvue
						}
					},
					methods: {
						changeStatus(data) {
							// 保存数据
							$store.dispatch("update", {
								id: id,
								data: data
							})
						}
					}
				})
				event.cancelBubble = true
			}
		}
	})		
	//  储存数据
	if (!notSave) {
		const storeData = {
			id: id,
			pid: pid,
			option: option,
			children: []
		}
		$store.dispatch("add", storeData)
	}
}