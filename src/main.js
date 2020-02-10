import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import App from './App.vue';
import store from './store';
import router from './router';
import '@/assets/global-style.styl';


Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  // observer: true,
  preLoad: 1.3,
  attempt: 1,
  dispatchEvent: true,
  listenEvents: ['scroll'],
});
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
