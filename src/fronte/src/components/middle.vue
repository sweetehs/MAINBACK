<style lang="less" scoped>
	.middle-wrapper,
	.middle-inner {
		height: 100%;
	}
</style>

<template>
	<div class="middle-wrapper">
		<Droppable @drop="drop">
			<div class="middle-inner"></div>
		</Droppable>
	</div>
</template>

<script>
	import Droppable from "./util/droppable";
	import widgetConfig from "./widgets/Config";
	import {
		mount
	} from "./util/mount";
	const $div = () => {
		let id = 'div' + parseInt(Math.random() * 100000000)
		let div = document.createElement('div')
		div.id = id
		return {
			id: id,
			div: div
		}
	}
	export default {
		data() {
			return {};
		},
		methods: {
			drop(params) {
				mount(
					document.getElementsByClassName("middle-inner")[0],
					widgetConfig[params.data]
				);
			}
		},
		components: {
			Droppable: Droppable
		}
	};
</script>
