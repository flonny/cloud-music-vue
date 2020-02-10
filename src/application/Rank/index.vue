<template>
  <div class="content">
    <div>
      <recommend-list :recommend-list="recommendList" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import RecommendList from '../../components/recommendList/index.vue';


export default {
  components: {
    RecommendList,
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters('recommendStore', ['bannerList',
      'recommendList']),
  },
  created() {
    this.getBannerList();
    this.getRecommendList();
  },
  methods: {
    ...mapActions('recommendStore',
      ['getBannerList',
        'getRecommendList']),
  },
};
</script>
<style lang="stylus" scoped>
.content{
  overflow auto;
  position: fixed;
  top: 94px;
  bottom: 0;
  width: 100%;
}
</style>
