import React from 'react';
import './MvRankItem.less';

interface IMvRankItemProps {
  rankNum: number;
  playCount: number;
  coverImgUrl: string;
  mvName: string;
  mvArtist: string;
}

export default function MvRankItem(props: IMvRankItemProps) {
  return (
    <div className='mv-rank-item-self'>
      <div className='rank-num'>{props.rankNum < 10 ? '0' + props.rankNum : props.rankNum}</div>
      <div className='mv-img'>
        <span className='mv-play-count'>{props.playCount}</span>
        <img src={props.coverImgUrl + '?param=215y120'} />
      </div>
      <div className='mv-info'>
        <div className='mv-name'>{props.mvName}</div>
        <div className='mv-artist'>{props.mvArtist}</div>
      </div>
    </div>
  );
}
