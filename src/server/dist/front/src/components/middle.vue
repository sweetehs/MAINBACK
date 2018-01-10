<style lang="less">	
	.middle-wrapper{		
		height: 100%;
		display: flex;
		// flex-direction: column;
		position: relative;
	}
	.action-wrapper{
		height: 30px;
		line-height: 30px;
		// border-bottom: 1px solid #CFCFCF;
	}	
	.page-wrapper{
		background: #F5F7FA;		
		position: relative;		
		padding: 0 5px;			
		flex: 1;	
	}
	.set-wrapper{
		width: 380px;				
	}
	
</style>

<template>
	<div class="middle-wrapper">						
		<div class="page-wrapper">
			<Middledraw v-if="cview == 'editor'"></Middledraw>
			<Middleajax v-if="cview == 'ajax'"></Middleajax>
		</div>
		<div class="set-wrapper"><Middleright></Middleright></div>		
	</div>	
</template>

<script>		
	import Middleright from "./middle-right"
	import Middledraw from "./middle-draw"
	import Middleajax from "./middle-ajax"
	import event from "../util/event"
	export default {
		data() {
			return {
				cview:"editor"
			};
		},
		created(){
			event.eventMiddle.$on('changeview',(type)=>{
				this.cview = type
			})
		},
		components:{			
			Middleajax:Middleajax,
			Middledraw:Middledraw,
			Middleright:Middleright
		},
		methods:{

		}
	}
</script>
