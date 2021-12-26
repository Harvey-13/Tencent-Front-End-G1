import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingerDetailApi } from '@/api/Singer/singer';
import SingerBasicInfo from './ChildComp/SingerBasicInfo/SingerBasicInfo';
import SingerMusicInfo from './ChildComp/SingerMusicInfo/SingerMusicInfo';
export default function SingerDetail() {
  const [singerInfo, setSingerInfo]: [any, any] = useState({});
  const [songList, setSongList]: [any, any] = useState([]);
  const getSingerDetail = async (id: number) => {
    const res: any = await getSingerDetailApi(id);
    if (res.code === 200) {
      setSingerInfo(res.artist);
      setSongList([...res.hotSongs]);
    }
  };

  const params = useParams();
  useEffect(() => {
    getSingerDetail(parseInt(params.id!));
  }, []);

  useEffect(() => {
    console.log(songList);
  }, [songList]);

  return (
    <div className='content-container'>
      <SingerBasicInfo
        picUrl={singerInfo.picUrl}
        name={singerInfo.name}
        alias={singerInfo.alias || undefined}
        musicNum={singerInfo.musicSize}
        mvNum={singerInfo.mvSize}
        albumNum={singerInfo.albumSize}
      ></SingerBasicInfo>

      <SingerMusicInfo songList={songList}></SingerMusicInfo>
    </div>
  );
}
