import React, { useEffect } from 'react';
import { getBannerApi } from '@/api/FindMusic/recommend';

export default function FoundMusic() {
  const getBanner = async () => {
    const res = await getBannerApi(0);
    console.log(res);
  };

  useEffect(() => {
    getBanner();
  });

  return <div className='content-container'>Found Music</div>;
}
