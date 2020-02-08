import { getBannerRequest, getRecommendListRequest } from '../../../api/request';
import {
  CHANGE_BANNER,
  CHANGE_RECOMMEND_LIST,
} from './constants';

export const changeBannerList = (data) => ({
  type: CHANGE_BANNER,
  data,
});

export const changeRecommendList = (data) => ({
  type: CHANGE_RECOMMEND_LIST,
  data,
});
export default {
  getBannerList({ commit }) {
    getBannerRequest().then((data) => {
      commit(changeBannerList(data.banners));
    }).catch(() => {
      console.log('轮播图数据传输错误');
    });
  },
  getRecommendList({ commit }) {
    getRecommendListRequest().then((data) => {
      commit(changeRecommendList(data.result));
    }).catch(() => {
      console.log('推荐歌单数据传输错误');
    });
  },
};
