export interface IBannerImg {
  imageUrl: string;
  encodeId: string;
  targetId: number;
  targetType: number;
  titleColor: string;
  typeTitle: string;
}
export interface IBannerResponse {
  banners: IBannerImg[];
  code: number;
}

export interface SongItemType{
  adType: number,
  alg: string,
  anonimous: boolean,
  cloudTrackCount: number,
  commentCount: number,
  commentThreadId: string,
  coverImgId: number,
  coverImgId_str: string,
  coverImgUrl: string,
  coverStatus: number,
  createTime: number,
  creator: {
    defaultAvatar: boolean,
    province: number,
    authStatus: 1, 
    followed: boolean,
  }
  description: string,
  highQuality: boolean,
  id: number,
  name: string,
  newImported: boolean,
  ordered: boolean,
  playCount:number,
  privacy: number,
  recommendInfo: any
  shareCount: number,
  specialType: number,
  status: number,
  subscribed: any
  subscribedCount:  number,
  subscribers: any[],
  tags: string[],
  totalDuration: number,
  trackCount: number,
  trackNumberUpdateTime: number,
  trackUpdateTime: number,
  tracks: any
  updateTime: number,
  userId: number,
}