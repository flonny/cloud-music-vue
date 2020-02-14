import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  bannerList: [],
  recommendList: [],
  enterLoading: true,
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
