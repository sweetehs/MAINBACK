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
			<Middledraw></Middledraw>
			<!-- <Middleajax></Middleajax> -->
		</div>
		<div class="set-wrapper"><Right></Right></div>		
	</div>	
</template>

<script>		
	// import Right from "./Right"
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
			Middleajax:Middleajax,
			Middledraw:Middledraw,
			// Right:Right
		}
	}
</script>
