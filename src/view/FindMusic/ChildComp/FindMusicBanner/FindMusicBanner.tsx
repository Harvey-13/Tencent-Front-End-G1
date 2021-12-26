import React, { useEffect, useState } from 'react';
import './FindMusicBanner.less';
import { Carousel, message } from 'antd';
import { getBannerApi } from '@/api/FindMusic/recommend';
import {IBannerImg } from '@view/FindMusic/types';


export default function FindMusicBanner() {
  const [bannerImgs, setBannerImgs] = useState<IBannerImg[]>([]);
  const getBanner = async () => {
    const res:any = await getBannerApi(0);
    if(res.code===200){
      setBannerImgs(res.banners);
    }else{
      message.error('稍后刷新重试！');
    }
  };

  useEffect(() => {
    getBanner();
  },[]);

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
