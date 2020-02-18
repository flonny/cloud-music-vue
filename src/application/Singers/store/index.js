import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  singerList: [],
  enterLoading: true, // 控制进场Loading
  pullUpLoading: false, // 控制上拉加载动画
  pullDownLoading: false, // 控制下拉加载动画
  pageCount: 0,
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
