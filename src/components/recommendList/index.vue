<template>
  <div class="list-wrapper">
    <h1 class="title">
      推荐歌单
    </h1>
    <div
      v-lazy-container="{ selector: 'img' }"
      class="list"
    >
      <div
        v-for="(item,index) in recommendList"
        :key="item.id+index"
        class="list-item"
      >
        <div class="img_wrapper">
          <div class="decorate" />
          <!-- 加此参数可以减小请求的图片资源大小 -->

          <img
            :data-src="`${item.picUrl}?param=300x300`"
            width="100%"
            height="100%"
            alt="music"
          >

          <div class="play_count">
            <i class="iconfont play">&#xe885;</i>
            <span class="count">{{ item.playCount | getCount }}</span>
          </div>
        </div>
        <div class="desc">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCount } from '../../api/utils';

export default {
  filters: {
    getCount,
  },
  props: {
    recommendList: { type: Array, default: () => [] },
  },
};
</script>
<style lang="stylus" scoped>
@import './style'
</style>
