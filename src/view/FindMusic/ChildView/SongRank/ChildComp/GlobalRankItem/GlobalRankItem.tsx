import IconFont from '@/components/common/IconFont/IconFont';
import React from 'react';
import './GlobalRankItem.less';

interface IGlobalRankItemProps {
  coverImgUrl: string;
  name: string;
}
export default function GlobalRankItem(props: IGlobalRankItemProps) {
  return (
    <div className='global-rank-item-container'>
      <div className='global-rank-item-img'>
        <div className='cover-img'>
          <div className='play-icon'>
            <IconFont iconName='play'></IconFont>
          </div>
          <img src={props.coverImgUrl + '?param=150y150'} />
        </div>
      </div>
      <div className='global-rank-item-name'>{props.name}</div>
    </div>
  );
}
