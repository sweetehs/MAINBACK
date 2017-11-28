import Vue from 'vue'
import util from '../util/util'
import widgetConfig from "./config";
export function mount($wrapper, id, option, $store, notSave) {
	var $pWrapper = util.getParentByClassName($wrapper, "widget-wrapper")
	var pid = $pWrapper ? $pWrapper.className.match(/c\d{0,8}/)[0] : ""
	// 得到父级的vm
	let pvue = $store.getters.getById(pid)[0]

	// 添加数据
	let $div = document.createElement("div")
	let $widget = document.createElement("div")
	let $action = document.createElement("div")
	$div.appendChild($widget)
	if (option.layout == "layout") {
		$div.className = "widget-wrapper widget-layout " + id
	} else {
		$div.className = "widget-wrapper widget-item " + id
	}
	let $ndiv = document.createElement("div")
	$widget.className = "widget-item-inner"
	$widget.appendChild($ndiv)
	$widget.appendChild($action)
	$widget = $ndiv
	$wrapper.appendChild($div)

	// create item
	const _vue = new Vue({
		template: option.tmp(),
		el: $widget,
		data() {
			return {
				defaultData: option.data
			}
		},
		mounted() {
			this.$el.addEventListener("click", (event) => {
				this.view(event)
			})
			this.changeStatus(this.defaultData)
		},
		watch: {
			defaultData: {
				handler() {
					this.changeStatus(this.defaultData)
				},
				deep: true
			}
		},
		methods: {
			changeStatus(data) {
				// 如果是layout样式变化。则需要将父元素子元素也重置样式 尤其是flex				
				if (option.name.indexOf("layout") !== -1) {
					let $widgtParent = this.$el.parentElement
					let $widgtParent1 = $widgtParent.parentElement
					let $dndParent = this.$el.children[0]
					for (var i in data.styles) {
						$widgtParent.style[i] = data.styles[i]
						$widgtParent1.style[i] = data.styles[i]
						$dndParent.style[i] = data.styles[i]
						// dnd不能设置width或者height
						$dndParent.style.width = "100%";
						$dndParent.style.height = "100%";
					}
				}
			},
			view(event) {
				var $active = document.querySelectorAll(".widget-active")[0]
				if ($active) {
					$active.className = $active.className.replace(" widget-active", "")
				}
				var $parent = this.$el.parentElement.parentElement
				$parent.className = $parent.className + " widget-active"
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
			},
			drop(params) {
				const data = widgetConfig[params.data]()
				const id = util.randomid()
				mount(params.el, id, data, $store)
			}
		}
	})
	// create action
	new Vue({
		template: "<Commonaction></Commonaction>",
		el: $action,
		data() {
			return {

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