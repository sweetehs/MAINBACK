<style lang="less">
.right-wrapper{
	// background: #32323A;
	height: 100%;
	box-sizing: border-box;
  padding: 10px;
  // color: #fff!important;  
  .el-input{
    width: 80px;
  }
}
.right-form-item{  
	margin-bottom: 10px;
  display: flex;
  align-items: center;  
  &.fs{
    align-items: flex-start;
  }
  header{
    margin-bottom: 10px;
  }  
  input{    
    padding: 0 5px;
    height: 30px;
    line-height: 30px;
  }
  span.text{
    width: 90px;
    text-align: right;
    // margin-right: 10px;
  }
  div.content{
   flex: 1;
    >label {
      margin-right: 10px;
      width: 70px;
    }
  }
}

</style>

<template>
  <div class="right-wrapper">
      <div class="right-inner"></div>   
  </div>
</template>
<script>

</script>
