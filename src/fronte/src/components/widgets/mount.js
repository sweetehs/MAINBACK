import Vue from 'vue'
import util from '../util/util'
import widgetConfig from "./config";
export function mount($wrapper, id, option, $store) {
	var $item = document.getElementsByClassName(id)
	if ($item.length == 0) {
		// 添加数据
		let $div = document.createElement("div")
		let $div1 = document.createElement("div")
		if (option.layout == "layout") {
			$div.className = "widget-layout " + id
		} else {
			$div.className = "widget-item " + id
		}

		$div.appendChild($div1);
		$item = $div1
		$wrapper.appendChild($div)
	} else {
		$item = $item[0].children[0]
	}
	// 生产item
	let _vue = new Vue({
		template: option.tmp(),
		el: $item,
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
				// 如果是layout样式变化。则需要将父元素也重置样式 尤其是flex
				// debugger;
				if (option.name.indexOf("layout") !== -1) {
					let $widgtParent = this.$el.parentElement
					let $dndParent = this.$el.children[0]
					for (var i in data.styles) {
						$widgtParent.style[i] = data.styles[i]
						$dndParent.style[i] = data.styles[i]
					}
				}
			},
			view(event) {
				const id = this.id
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
							defaultData: option.data
						}
					},
					methods: {
						changeStatus(data) {

						}
					}
				})
				event.cancelBubble = true;
			},
			drop(params) {
				const data = widgetConfig[params.data]()
				const id = util.randomid()
				mount(params.el, id, data)
			}
		}
	});
	// // 储存数据
	// const storeData = {
	// 	id: id,
	// 	name: option.name,
	// 	data: option.data,
	// 	children: [],
	// 	vue: _vue
	// }
	// $store.dispatch("add", storeData);
}