<style lang="less">
.right-wrapper {
	// background: #32323A;
	height: 100%;
	box-sizing: border-box;
	padding: 10px;
	// color: #fff!important;
	.el-input {
		width: 80px;
		&.large {
			width: 240px;
		}
	}
	.el-textarea {
		&.large {
			width: 240px;
		}
	}	
	.event-tab {
		height: 100%;
		display: flex;
		flex-direction: column;
		.el-tabs__header{			
			height: 40px;
		}
		.el-tabs__content{
			flex: 1;
			overflow: auto;
			.el-tab-pane{
				height: 100%;
				overflow: auto;
			}
		}
	}
}
.right-form-item {
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	&.fs {
		align-items: flex-start;
	}
	header {
		margin-bottom: 10px;
	}
	input {
		padding: 0 5px;
		height: 32px;
		line-height: 32px;
	}
	span.text {
		width: 90px;
		text-align: right;
	// margin-right: 10px;
	}
	div.content {
		flex: 1;
		> label {
			margin-right: 10px;
			width: 70px;
		}
	}
}
</style>

<template>
  <div class="right-wrapper">	  
	  	<el-tabs class="event-tab" type="card" v-model="tabIndex">
			<el-tab-pane label="Style" name="1">
				<div class="right-style"></div>
			</el-tab-pane>
			<el-tab-pane label="Event" name="2" v-show="isShowTab">
				<div class="right-event"></div>
			</el-tab-pane>
		</el-tabs> 
  </div>
</template>
<script>	
	import Event from "../util/event"
	export default {
		data() {
			return {
				tabIndex:"1",
				isShowTab:false
			}
		},
		created(){			
			var that = this
			Event.eventRight.$on("showTab",()=>{
				that.$el.querySelector(".el-tabs__header").style.display="block"
				that.tabIndex = "1"
			})
			Event.eventRight.$on("hideTab",()=>{				
				that.$el.querySelector(".el-tabs__header").style.display="none"
				that.tabIndex = "1"
			})			
		},
		mounted(){
			this.$el.querySelector(".el-tabs__header").style.display="none"
		}
	}
</script>
