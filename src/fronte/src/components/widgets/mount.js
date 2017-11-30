import Vue from 'vue'
import { Drop } from "dnd.js";
import util from '../util/util'
import widgetConfig from "./config"
var setVue = ""
export function mount($wrapper, id, option, $store, saveFlag) {
	var $pWrapper = util.getParentByClassName($wrapper, "widget-wrapper")
	var pid = $pWrapper ? $pWrapper.className.match(/c\d{0,8}/)[0] : ""
	let pvue = $store.getters.getById(pid)
	let $div = document.createElement("div")
	$wrapper.appendChild($div)
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
						mount(params.el, id, data, $store, true)
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
				util.removeClass(document.querySelectorAll(".widget-active")[0], "widget-active")
				util.addClass(this.$el, "widget-active")				
				let $div = document.createElement("div")
				document.getElementsByClassName("right-inner")[0].appendChild($div)
				setVue.$destroy && setVue.$destroy()
				setVue = new Vue({
					template: option.view(),
					el: $div,
					destroyed() {
						this.$el.remove()
					},
					data() {
						return {
							staticConfig: option.staticConfig,
							defaultData: option.data,
							pvue: pvue
						}
					},
					methods: {
						changeStatus(data) {
							$store.dispatch("update", {
								id: id,
								data: data
							})
						}
					}
				})
				// 组织事件向上传播，所以在这隐藏子菜单
				event.cancelBubble = true
			}
		}
	})
	//  储存数据
	if (saveFlag) {
		const storeData = {
			id: id,
			pid: pid,
			option: option,
			children: []
		}
		$store.dispatch("add", storeData)
	}
}