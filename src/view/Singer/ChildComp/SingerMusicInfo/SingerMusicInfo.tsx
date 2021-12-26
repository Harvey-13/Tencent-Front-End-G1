import React from 'react';
import { msTomin } from '@/utils/timeFormater';
import './SingerMusicInfo.less';

interface ISingerMusicInfoProps {
  songList: any[];
}

export default function SingerMusicInfo(props: ISingerMusicInfoProps) {
  return (
    <div className='singer-music-info-container'>
      <div className='music-list-title'>热门单曲</div>
      <div className='music-list'>
        {props.songList.map((item, index) => {
          return (
            <div className='music-item' key={item.al.id}>
              <span className='music-index'>{index + 1 >= 10 ? index + 1 : '0' + (index + 1)}</span>
              <span className='music-name'>{item.name}</span>
              <span className='music-duration'>{msTomin(item.dt)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
