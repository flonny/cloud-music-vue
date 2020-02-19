<template>
  <div>
    <div class="nav-container">
      <Horizen
        :list="categoryTypes"
        title="分类(默认热门):"
        :old-val="category"
        @change="handleGetCategory"
      />
      <Horizen
        :list="alphaTypes"
        title="首字母:"
        :old-val="alpha"
        @change="handleGetAlpha"
      />
    </div>
    <div class="list-container">
      <Scroll :data="singerList">
        <div class="list">
          <div
            v-for="(item,index) in singerList"
            :key="index"
            class="list-item"
          >
            <div class="img-wrapper">
              <img
                :src="`${item.picUrl}?param=300x300`"
                width="100%"
                height="100%"
                alt="music"
              >
            </div>
            <div class="name">
              {{ item.name }}
            </div>
          </div>
        </div>
      </Scroll>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Horizen from '../../baseUI/horizen-item/index.vue';
import Scroll from '../../baseUI/scroll/index.vue';
import { categoryTypes, alphaTypes } from '../../api/config';

export default {
  components: { Horizen, Scroll },
  data() {
    return {
      categoryTypes,
      alphaTypes,
      category: '',
      alpha: '',
    };
  },
  computed: {
    ...mapGetters('singerStore', [
      'singerList',
      'enterLoading',
      'pullUpLoading',
      'pullDownLoading',
      'pageCount',
    ]),
  },
  created() {
    this.getHotSingerList();
  },
  methods: {
    ...mapActions('singerStore', ['getHotSingerList']),
    handleGetCategory(val) {
      this.category = val;
    },
    handleGetAlpha(val) {
      this.alpha = val;
    },
  },
};
</script>
<style lang="stylus" scoped>
@import './style';
.nav-container {
  box-sizing: border-box;
  position: fixed;
  top: 95px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
}

</style>
