import React, { useEffect, useState } from 'react';
import './RecommendationBanner.less';
import { Carousel } from 'antd';
import { getBannerApi } from '@/api/FindMusic/recommend';
import { IBannerResponse, IBannerImg } from '@view/FindMusic/types';

export default function RecommendationBanner() {
  const [bannerImgs, setBannerImgs] = useState([]);
  const getBanner = async () => {
    const res = await getBannerApi(0);
    const banners: Array<never> = (res as unknown as IBannerResponse).banners;
    setBannerImgs([...banners]);
  };

  useEffect(() => {
    getBanner();
  });

  return (
    <div className='find-music-banner-container'>
      <Carousel autoplay>
        {bannerImgs.map((item: IBannerImg) => {
          return (
            <div className='banner-img-container' key={item.targetId}>
              <img src={item.imageUrl} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
