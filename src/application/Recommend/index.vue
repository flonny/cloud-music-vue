<template>
  <div>
    <Slider :banner-list="bannerList" />
    <recommend-list :recommend-list="recommendList" />
  </div>
</template>
<script>
import Slider from '../../components/slider/index.vue';
import RecommendList from '../../components/recommendList/index.vue';

export default {
  components: {
    Slider,
    RecommendList,
  },
  data() {
    return {
      bannerList: [1, 2, 3, 4].map((item) => ({
        imageUrl: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg',
        index: item,
      })),
      recommendList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => ({
        id: 1,
        picUrl: 'https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg',
        playCount: 17171122,
        name: '朴树、许巍、李健、郑钧、老狼、赵雷',
        index: item,
      })),
    };
  },
};
</script>
