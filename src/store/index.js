import Vue from 'vue';
import Vuex from 'vuex';
import recommendStore from '../application/Recommend/store';
import singerStore from '../application/Singers/store';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    recommendStore,
    singerStore,
  },
});
