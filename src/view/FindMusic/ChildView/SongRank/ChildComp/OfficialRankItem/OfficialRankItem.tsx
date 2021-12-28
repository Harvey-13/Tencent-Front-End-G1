import React from 'react';
import './OfficialRankItem.less';
import IconFont from '@/components/common/IconFont/IconFont';

interface IOfficialRankItemProps {
  coverImgUrl: string;
  id: number;
  name: string;
  tracks: Array<any>;
}

export default function OfficialRankItem(props: IOfficialRankItemProps) {
  return (
    <div className='official-rank-item'>
      <div className='rank-img'>
        <div className='play-icon'>
          <IconFont iconName='play'></IconFont>
        </div>
        <img src={props.coverImgUrl + '?param=120y120'} />
      </div>

      <div className='rank-song-container'>
        {props.tracks.map((item, index) => {
          return (
            <div className='rank-song-detail' key={index}>
              <span className='rank-num'>{index + 1}</span>
              <span className='song-name'>{item.first}</span>
              <span className='singer'>{item.second}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
