<template>
  <div class="SliderContainer">
    <div class="before" />
    <div
      ref="slider-container"
      class="slider-container"
    >
      <div
        class="swiper-wrapper"
      >
        <div
          v-for="slider in bannerList"
          :key="slider.index"
          class="swiper-slide"
        >
          <div class="slider-nav">
            <img
              :src="slider.imageUrl"
              width="100%"
              height="100%"
              alt="推荐"
            >
          </div>
        </div>
      </div>
      <div
        ref="swiper-pagination"
        class="swiper-pagination"
      />
    </div>
  </div>
</template>
<script>
import 'swiper/css/swiper.css';
import Swiper from 'swiper';

export default {
  props: {
    bannerList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      sliderSwiper: null,
    };
  },
  mounted() {
    if (this.bannerList.length && !this.sliderSwiper) {
      this.sliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      });
    }
  },
};
</script>
<style lang="stylus" >
@import './style'
</style>
