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
		background: #eee;		
		position: relative;		
		padding: 0 5px;			
		flex: 1;	
	}
	.set-wrapper{
		width: 380px;
		flex-shrink: 0;
	}
	
</style>

<template>
	<div class="middle-wrapper">						
		<div class="page-wrapper">
			<Middledraw></Middledraw>
			<Middleajax></Middleajax>
		</div>
		<div class="set-wrapper"><Right></Right></div>		
	</div>	
</template>

<script>	
	import Right from "./right"	
	import Middledraw from "./middle-draw"
	import Middleajax from "./middle-ajax"	
		
	export default {
		data() {
			return {
				styles:{
					height:"100%",
					width:"100%"
				}
			};
		},
		components:{
			Right: Right,			
			Middleajax:Middleajax,
			Middledraw:Middledraw
		}
	}
</script>
