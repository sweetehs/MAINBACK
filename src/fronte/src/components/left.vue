<style lang="less" scoped>
	.left-wrapper{
		background: #32323A;
		height: 100%;
		color: #fff;	
		position: relative;		
		display: flex;
		flex-direction: column;
		border-right: #278be6 3px solid ;
		// .br{
		// 	position: absolute;
		// 	background: #278be6;
		// 	right: -3px;
		// 	top: 0;
		// 	width: 3px;
		// 	height: 100%;
		// }
	}
	.web-info{
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 20px 0;
		.logo{			
			background: #fff;
			border-radius: 100px;
			overflow: hidden;
			width: 160px;
			height: 160px;
			box-shadow: 0 0 10px #fff;
			img{
				margin-top: 18px;
				transform: scale(0.6);
				margin-left: -18px;
    			margin-top: -3px;
			}			
		}
		.text{
			margin-top: 10px;
			font-size: 20px;
		}
	}
	.drag-nav-wrapper{
		flex: 1;
		position: relative;
		.list{
			height: 100%;
			color: #82898F;
			position: absolute;
			width: 100%;
			left: 0;	
			top: 0;
			transition: left 0.2s ease-in;
			&.active{
				left: -100%;
			}		
			li{
				border-bottom: #383840 1px solid;
				height: 50px;
				line-height: 50px;
				padding-left: 30px;			
				padding-right: 10px;	
				font-size: 18px;	
				display: flex;
				justify-content: space-between;
				align-items: center;
				&:hover{
					cursor: pointer;
				}
				i{
					font-weight: bold
				}
			}			
		}
		.detail{
			height: 100%;
			background: #888;
			position: absolute;
			width: 100%;
			left: -100%;	
			top: 0;
			transition: left 0.2s ease-out;
			box-sizing: border-box;
			padding: 10px;
			.dnd-drag-content{
				display: inline-block;
			}
			li{
				padding: 6px 10px;
				background: #41B883;
				box-shadow: 0 0 5px #41B883;
				display: inline-block;
				margin: 4px;
				border-radius: 4px;
			}
			&.active{
				left: 0;
			}
		}
	}
</style>

<template>
	<div class="left-wrapper">
		<div class="br"></div>
		<div class="web-info">
			<div class="logo">
				<img src="/static/images/logo.png">
			</div>
			<div class="text">MLGB</div>
		</div>
		<div class="drag-nav-wrapper">
			<ul class="list" :class="isShow">
				<li v-for="(item,index) in list" @click="showDetail(item)" :key="index"><span>Base</span><i class="el-icon-arrow-right"></i></li>				
			</ul>
			<ul class="detail" :class="isShow">
				<Draggable v-for="(item,index) in detailList" :key="index" :data="item">
					<li>{{item}}</li>
				</Draggable>
			</ul>
		</div>		
		<!-- <Draggable data="button">
			<el-button>按钮</el-button>
		</Draggable>
		<Draggable data="radio">
			<el-radio>单选</el-radio>
		</Draggable>
		<Draggable data="input">
			<el-input :readonly="true"></el-input>
		</Draggable>
		<Draggable data="layout">
			<div>一列布局</div>
		</Draggable>		 -->
	</div>
</template>

<script>
	import Draggable from "./util/draggable"
	import util from "./util/util"
	export default {
		data() {
			return {
				isShow:"",
				list:[{
					name:"Base",
					children:["layout","button"]
				}],
				detailList:""				
			};
		},
		components: {
			Draggable: Draggable
		},
		methods: {
			showDetail(item){
				this.isShow = "active"
				this.detailList = item.children
			}
		}
	};
</script>
