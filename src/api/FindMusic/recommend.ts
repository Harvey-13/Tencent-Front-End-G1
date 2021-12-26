import { getRequest } from '@/api/request';

// 获取轮播图列表
export const getBannerApi = async (type: number = 0) => {
  return await getRequest('/banner', { type });
};

// 获取推荐歌单
export const getRecommendlistApi = async (limit: number = 10) => {
  return await getRequest('/personalized', { limit });
};
