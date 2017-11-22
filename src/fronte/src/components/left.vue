<style lang="less" scoped>

</style>

<template>
  <div class="left-warpper">
      <Draggable data="button">
          <el-button type="primary">主要按钮</el-button>
      </Draggable>      
  </div>
</template>
<script>
import Draggable from "./util/draggable";
export default {
  data() {
    return {
      
    };
  },
  components: {
    Draggable: Draggable
  }
};
</script>
