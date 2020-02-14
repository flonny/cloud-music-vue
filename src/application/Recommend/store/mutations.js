/* eslint-disable no-param-reassign */
import {
  CHANGE_BANNER,
  CHANGE_RECOMMEND_LIST,
  CHANGE_ENTER_LOADING,
} from './constants';

export default {
  [CHANGE_BANNER](state, payload) {
    state.bannerList = payload.data;
  },
  [CHANGE_RECOMMEND_LIST](state, payload) {
    state.recommendList = payload.data;
  },
  [CHANGE_ENTER_LOADING](state, payload) {
    state.enterLoading = payload.data;
  },
};
