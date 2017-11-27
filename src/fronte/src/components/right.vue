<style lang="less">
.right-wrapper,
.right-inner {
  height: 100%;
}
.right-form-item{
  margin: 10px 0;
  display: flex;
  align-items: center;
  &.fs{
    align-items: flex-start;
  }
  header{
    margin-bottom: 10px;
  }  
  input{
    margin-bottom: 5px;
  }
  span.text{
    width: 120px;
    text-align: right;
    margin-right: 10px;
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
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>
