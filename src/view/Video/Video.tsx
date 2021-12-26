import React, { useState, useEffect } from 'react';
import { getNewMvApi, getNetEaseMvApi, getRankMvApi } from '@/api/Video/video';
import MvList from './ChildComp/MvList/MvList';
import MvRank from './ChildComp/MvRank/MvRank';
export default function Video() {
  const [newMv, setnNewMv] = useState([]);
  const [netEaseMv, setNetEaseMv] = useState([]);
  const [rankMv, setRankMv] = useState([]);

  const getMvInfo = async () => {
    const [newMvData, netEaseMvData, RankMvData] = await Promise.all([
      getNewMvApi(),
      getNetEaseMvApi(),
      getRankMvApi(10),
    ]);
    setnNewMv([...(newMvData.data as never)]);
    setNetEaseMv([...(netEaseMvData.data as never)]);
    setRankMv([...(RankMvData.data as never)]);
  };

  useEffect(() => {
    getMvInfo();
  }, []);

  return (
    <div className='content-container'>
      <MvList listName='最新MV' mv={newMv}></MvList>
      <MvList listName='网易出品' mv={netEaseMv}></MvList>
      <MvRank listName='MV排行榜' mv={rankMv}></MvRank>
    </div>
  );
}
