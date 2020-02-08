# 笔记

```javascript
./node_modules/.bin/eslint --init
```

> Created and Edit file .eslintrc.js

```javascript
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ['plugin:vue/recommended', 'airbnb-base'],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "import/no-unresolved": "disable"
    }
};
```

> add stylus

```javascript
npm install -D stylus-loader stylus
```

| use [style-resources-loader](https://github.com/yenshih/style-resources-loader) import global variables

```javascript
npm i style-resources-loader -D
```



```javascript
// vue.config.js
const path = require('path');

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/variables.styl'),
      ],
    });
}

module.exports = {
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => addStyleResource(config.module.rule('stylus').oneOf(type)));
  },
};

```

> Created slider component
>
> Notify: swiper init need vue Doms mounted in true Dom

```javascript
npm install swiper --save
```

```vue
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
```

> Created better scroll component

```javascript
npm install better-scroll@next --save
```

> use axios get data

```javascript
npm install axios --save
```

Created a config file save axios base config

```javascript
// src/api/config.js
import axios from 'axios';

export const baseUrl = 'http://127.0.0.1:3000';

// axios 的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err, '网络错误');
  },
);

export {
  axiosInstance,
};

```

create a request.js file to get app's data

```javascript
// src/api/request.js
import { axiosInstance } from './config';

export const getBannerRequest = () => axiosInstance.get('/banner');

export const getRecommendListRequest = () => axiosInstance.get('/personalized');

```



> use vuex manage app's data
>
> Notify: Vuex uses a **single state tree** , all modules **state** will merge to global **state** 

Create global store

use **strict** to sure all data change through **commit** **mutation**

```javascript
// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import recommendStore from '../application/Recommend/store';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    recommendStore,
  },
});

```

Create Recomment state

use namespace to sure modules  be more self-contained or reusable  and clean

```javascript
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  bannerList: [],
  recommendList: [],
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

```



