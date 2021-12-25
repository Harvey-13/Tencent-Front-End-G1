import React, { useEffect, useState } from 'react';
import OfficialRankItem from './ChildComp/OfficialRankItem/OfficialRankItem';
import './SongRank.less';
import { getRankInfoApi } from '@/api/FindMusic/songRank';
import GlobalRankItem from './ChildComp/GlobalRankItem/GlobalRankItem';
export default function SongRank() {
  interface IOfficialRankItemProps {
    coverImgUrl: string;
    id: number;
    name: string;
    tracks: Array<any>;
  }

  const [officialRanks, setOfficialRanks]: [any, any] = useState([]);
  const [globalRanks, setGlobalRanks]: [any, any] = useState([]);
  const getRankDetail = async () => {
    const res: any = await getRankInfoApi();
    if (res.code === 200) {
      const lists: Array<any> = res.list.map((item: any) => {
        return {
          name: item.name,
          id: item.id,
          tracks: item.tracks,
          coverImgUrl: item.coverImgUrl,
        };
      });
      setOfficialRanks([...lists.slice(0, 4)]);
      setGlobalRanks([...lists.slice(4)]);
    }
  };
  useEffect(() => {
    getRankDetail();
  }, []);

  return (
    <div className='song-rank-container'>
      <div className='official-ranks'>
        <div className='rank-title'>官方榜</div>
        {officialRanks.map((item: IOfficialRankItemProps) => {
          return (
            <OfficialRankItem
              coverImgUrl={item.coverImgUrl}
              id={item.id}
              name={item.name}
              tracks={item.tracks}
              key={item.id}
            ></OfficialRankItem>
          );
        })}
      </div>

      <div className='global-ranks'>
        <div className='rank-title'>全球榜</div>
        <div className='global-rank-items-container'>
          {globalRanks.map((item: any) => {
            return <GlobalRankItem key={item.id} coverImgUrl={item.coverImgUrl} name={item.name}></GlobalRankItem>;
          })}
        </div>
      </div>
    </div>
  );
}
