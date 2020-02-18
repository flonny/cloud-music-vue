import {
  getHotSingerListRequest,
  getSingerListRequest,
} from '../../../api/request';
import {
  CHANGE_SINGER_LIST,
  CHANGE_PAGE_COUNT,
  CHANGE_ENTER_LOADING,
  CHANGE_PULLUP_LOADING,
  CHANGE_PULLDOWN_LOADING,
} from './constants';

const changeSingerList = (data) => ({
  type: CHANGE_SINGER_LIST,
  data,
});

export const changePageCount = (data) => ({
  type: CHANGE_PAGE_COUNT,
  data,
});

// 进场loading
export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data,
});

// 滑动最底部loading
export const changePullUpLoading = (data) => ({
  type: CHANGE_PULLUP_LOADING,
  data,
});

// 顶部下拉刷新loading
export const changePullDownLoading = (data) => ({
  type: CHANGE_PULLDOWN_LOADING,
  data,
});
// 第一次加载热门歌手
export default {
  getHotSingerList({ commit }) {
    getHotSingerListRequest(0).then((res) => {
      const data = res.artists;
      commit(changeSingerList(data));
      commit(changeEnterLoading(false));
      commit(changePullDownLoading(false));
    }).catch(() => {
      console.log('热门歌手数据获取失败');
    });
  },
  refreshMoreHotSingerList({ commit, state }) {
    const { pageCount, singerList } = state.singer;
    getHotSingerListRequest(pageCount).then((res) => {
      const data = [...singerList, ...res.artists];
      commit(changeSingerList(data));
      commit(changePullUpLoading(false));
    }).catch(() => {
      console.log('热门歌手数据获取失败');
    });
  },
  getSingerList({ commit }, category, alpha) {
    getSingerListRequest(category, alpha, 0).then((res) => {
      const data = res.artists;
      commit(changeSingerList(data));
      commit(changeEnterLoading(false));
      commit(changePullDownLoading(false));
    }).catch(() => {
      console.log('歌手数据获取失败');
    });
  },
  refreshMoreSingerList({ commit, state }, category, alpha) {
    const { pageCount, singerList } = state.singer;
    getSingerListRequest(category, alpha, pageCount).then((res) => {
      const data = [...singerList, ...res.artists];
      commit(changeSingerList(data));
      commit(changePullUpLoading(false));
    }).catch(() => {
      console.log('歌手数据获取失败');
    });
  },
};
