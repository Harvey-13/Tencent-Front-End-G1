import request, { getRequest } from '@/api/request';

// 获取轮播图列表
export const getBannerApi = async (type: number = 0) => {
  return await getRequest('/banner', { type });
};

// 获取推荐歌单
export const getRecommendlistApi = async (limit: number = 10) => {
  return await getRequest('/personalized', { limit });
};

// 精选歌单
export const topList = (params:any) => {
  return request({
    url: '/top/playlist',
    method: 'get',
    params
  });
};
//获取歌词
export  const getSongText = (params:{id:number})=>{
  return request({
    url:'/lyric',
    method:'get',
    params
  })
}
//获取歌的评论
export const getComment = (params:{id:number,limit:number})=>{
  return request({
    url:'/comment/music',
    method:'get',
    params
  })
}

//获取歌曲

export const getOneSong = (params:{ids:number})=>{
  return request({
    url:'/song/detail',
    method:'get',
    params
  })
}
 
//获取相似歌曲

export const getSimilar = (params:{id:number})=>{
  return request({
    url:'/simi/song',
    method:'get',
    params
  })
}
//获取热门歌曲

export const getHotSongs = ()=>{
  return request({
    url:'/search/hot',
    method:'get'
  })
}

//关键字搜歌
export const searchSong = (params:{keywords:string})=>{
  return request({
    url:'/search/suggest',
    method:'get',
    params
  })
}
export const getSearchSongsList = (params:{keywords:string,type: number,limit: number,offset: number})=>{
  return request({
    url:'/search',
    params
  })
}
//歌单
export const playlistDetail = ( id:number) => {
  return request({
    url: '/playlist/detail',
    method: 'get',
    params: {
      id,
    },
  });
};