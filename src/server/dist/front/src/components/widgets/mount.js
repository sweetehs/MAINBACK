import Vue from 'vue'
import { Drop, Drag } from "dnd.js";
import util from '../../util/util'
import widgetConfig from "./config"
var setVue = ""
/*
	里面有两个组件
	公用option参数
	所以当view数据变化的时候，item组件能够变化
*/
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
			let classArr = []
			if (option.name == "layout") {
				classArr = ["widget-wrapper", "widget-layout", id]
			} else {
				classArr = ["widget-wrapper", "widget-item", id]
			}
			return {
				defaultData: option.data,
				wrappernode: $div,
				classArr: classArr
			}
		},
		watch: {
			defaultData: {
				deep: true,
				handler() {
					// 有的组件刷新会冲掉id，重新
					setTimeout(() => {
						util.addClass(this.$el, this.classArr.join(" "))
					}, 100)					
				}
			}
		},
		mounted() {
			util.addClass(this.$el, this.classArr.join(" "))
			this.$el.addEventListener("click", (event) => {
				this.view(event)
			})
			if (option.name == "layout") {
				// 布局
				new Drop(this.$el, {
					onDrop(params) {
						if (params.data == "in") {
							// 如果从内部拖拽元素不处理
							return
						}
						const data = widgetConfig[params.data]()
						const id = util.randomid()
						mount(params.el, id, data, $store, true)
						util.removeClass(document.querySelector(".drag-enter"), "drag-enter")
					},
					onDragOver(params) {
						if (params.data == "in") {
							// 如果从内部拖拽元素不处理
							return
						}
						util.removeClass(document.querySelector(".drag-enter"), "drag-enter")
						util.addClass(params.el, "drag-enter")
					},
					onDragLeave(params) {
						if (params.data == "in") {
							// 如果从内部拖拽元素不处理
							return
						}
						util.removeClass(document.querySelector(".drag-enter"), "drag-enter")
					}
				})
			} else {
				// 元素
				new Drop(this.$el, {
					onDrop(params) {
						if (params.data !== "in") {
							// 元素列表拖拽
							const data = widgetConfig[params.data]()
							const id = util.randomid()
							const el = util.getParentByClassName(params.el, "widget-layout")
							mount(el, id, data, $store, true)
						} else {
							// 从内部拖拽
							// 只能交换同父元素的两个元素
							// 交换数据,刷新父级
							if (params.el.parentElement == params.sourceNode.parentElement) {
								let id1 = util.getId(params.el.className)
								let id2 = util.getId(params.sourceNode.className)
								$store.dispatch("change", {
									id1: id1,
									id2: id2
								})
								let pdata = $store.getters.getById(pid)
								document.querySelector("." + pid).innerHTML = ""
								util.loop(pdata.children, (_data) => {
									let $wrapper = document.querySelector("." + _data.pid)
									mount($wrapper, _data.id, Object.assign(widgetConfig[_data.option.name](), _data.option), $store, false)
								})
							}
						}
					}
				})
				new Drag(this.$el, {
					data: "in"
				})
			}
		},
		destroyed() {
			this.wrappernode.remove()
		},
		methods: {
			view(event) {
				util.removeClass(document.querySelectorAll(".widget-active")[0], "widget-active")
				util.addClass(this.$el, "widget-active")
				view(option, {
					pvue: pvue
				}, (data) => {					
					$store.dispatch("update", {
						id: id,
						data: data
					})
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
export function view(option, odata, changeCallback) {	
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
			return Object.assign({
				staticConfig: option.staticConfig,
				defaultData: option.data
			}, odata)
		},
		methods: {
			changeStatus(data) {
				changeCallback && changeCallback(data)
			}
		}
	})
}