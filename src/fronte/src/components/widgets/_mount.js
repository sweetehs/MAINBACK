import Vue from 'vue'
export function mount($wrapper, id, option, store) {
	var $item = document.getElementsByClassName(id)
	if ($item.length == 0) {
		// 添加数据
		let $div = document.createElement("div")
		let $div1 = document.createElement("div")
		if(option.layout == "layout"){
			$div.className = id
		}else{
			$div.className = "widget-item " + id
		}
		
		$div.appendChild($div1);
		$item = $div1
		$wrapper.appendChild($div)
	} else {
		$item = $item[0].children[0]
	}
	// 生产item	
	new Vue({
		template: `<div @click="view">${option.tmp(option.data)}</div>`,
		el: $item,
		data() {
			return {
				id: id
			}
		},
		methods: {
			view() {
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
							// 刷新子元素
							option.data = data
							mount($wrapper, id, option)
						}
					}
				})

			}
		}
	});
}