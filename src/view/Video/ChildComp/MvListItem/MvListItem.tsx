import React from 'react';
import './MvListItem.less';

interface IMvListItemProps {
  mvImgUrl: string;
  mvName: string;
  mvSinger: string;
  mvPlayCount: number;
}

export default function MvListItem(props: IMvListItemProps) {
  return (
    <div className='mv-list-item'>
      <div className='mv-img'>
        <img src={props.mvImgUrl + '?param=310y175'} alt='mv pic' />
        <div className='mv-play-count'>{props.mvPlayCount}</div>
      </div>

      <div className='mv-info'>
        <div className='mv-name'>{props.mvName}</div>
        <div className='mv-singer'>{props.mvSinger}</div>
      </div>
    </div>
  );
}
