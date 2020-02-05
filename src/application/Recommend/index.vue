<template>
  <div>
    <Slider :banner-list="bannerList" />
  </div>
</template>
<script>
import Slider from '../../components/slider/index.vue';

export default {
  components: {
    Slider,
  },
  data() {
    return {
      bannerList: [1, 2, 3, 4].map((item) => ({
        imageUrl: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg',
        index: item,
      })),
    };
  },
};
</script>
