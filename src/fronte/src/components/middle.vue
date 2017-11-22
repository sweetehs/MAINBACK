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
import { mount } from "./util/mount";
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
