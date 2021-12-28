export interface IBannerImg {
  imageUrl: string;
  encodeId: string;
  targetId: number;
  targetType: number;
  titleColor: string;
  typeTitle: string;
}

export interface IBannerResponse {
  banners: Array<never>;
  code: number;
}
