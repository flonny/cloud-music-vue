<template>
  <div class="nav-container">
    <Horizen
      :list="categoryTypes"
      title="分类(默认热门):"
    />
    <Horizen
      :list="alphaTypes"
      title="首字母:"
    />
  </div>
</template>
<script>
import Horizen from '../../baseUI/horizen-item/index.vue';
import { categoryTypes, alphaTypes } from '../../api/config';

export default {
  components: { Horizen },
  data() {
    return {
      categoryTypes,
      alphaTypes,
    };
  },
};
</script>
<style lang="stylus" scoped>
.nav-container {
  box-sizing: border-box;
  position: fixed;
  top: 95px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
}
</style>
