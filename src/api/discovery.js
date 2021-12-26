import request from '../utils/request';

export const getBannerList = () => {
  return request({
    url: '/banner',
  });
};

// 获取最新音乐
export const getNewsong = () => {
  return request({
    url: '/personalized/newsong',
    method: 'get',
  });
};

// 获取推荐MV
export const getMv = () => {
  return request({
    url: '/personalized/mv',
    method: 'get',
  });
};

// 获取音乐的url
export const getSongUrl = ({ id }) => {
  return request({
    url: '/song/url',
    method: 'get',
    params: {
      id,
    },
  });
};
