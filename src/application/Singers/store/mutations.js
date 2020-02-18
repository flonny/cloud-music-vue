/* eslint-disable no-param-reassign */
import {
  CHANGE_SINGER_LIST,
  CHANGE_PAGE_COUNT,
  CHANGE_ENTER_LOADING,
  CHANGE_PULLUP_LOADING,
  CHANGE_PULLDOWN_LOADING,
} from './constants';

export default {
  [CHANGE_SINGER_LIST](state, payload) {
    state.singerList = payload.data;
  },
  [CHANGE_ENTER_LOADING](state, payload) {
    state.enterLoading = payload.data;
  },
  [CHANGE_PULLUP_LOADING](state, payload) {
    state.pullUpLoading = payload.data;
  },
  [CHANGE_PULLDOWN_LOADING](state, payload) {
    state.pullDownLoading = payload.data;
  },
  [CHANGE_PAGE_COUNT](state, payload) {
    state.pageCount = payload.data;
  },
};
