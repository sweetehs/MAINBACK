import Vue from 'vue'
export function mount($dom, option) {
	// 生产item
	new Vue({
		template: `<div @click="view">${option.tmp()}</div>`,
		el: $dom,
		methods: {
			view() {
				// 生产设置
				new Vue({
					template: option.view(),
					el: document.getElementsByClassName("right-inner")[0]
				});
			}
		}
	});
}