<template>
  <div class="content">
    <Scroll
      class="list"
      :data="recommendList"
    >
      <div>
        <Slider :banner-list="bannerList" />
        <recommend-list :recommend-list="recommendList" />
      </div>
    </Scroll>
    <Loading v-if="enterLoading" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

import Slider from '../../components/slider/index.vue';
import RecommendList from '../../components/recommendList/index.vue';
import Scroll from '../../baseUI/scroll/index.vue';
import Loading from '../../baseUI/loading/index.vue';

export default {
  components: {
    Slider,
    RecommendList,
    Scroll,
    Loading,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters('recommendStore', [
      'bannerList',
      'recommendList',
      'enterLoading',
    ]),
  },
  created() {
    this.getBannerList();
    this.getRecommendList();
  },
  methods: {
    ...mapActions('recommendStore', ['getBannerList', 'getRecommendList']),
  },
};
</script>
<style lang="stylus" scoped>
.content {
  position: fixed;
  top: 94px;
  bottom: 0;
  width: 100%;
}
</style>
