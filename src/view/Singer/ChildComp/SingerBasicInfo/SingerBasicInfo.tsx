import React from 'react';
import './SingerBasicInfo.less';

interface ISingerBasicInfoProps {
  picUrl: string;
  name: string;
  alias?: string[] | undefined;
  musicNum: number;
  albumNum: number;
  mvNum: number;
}

export default function SingerBasicInfo(props: ISingerBasicInfoProps) {
  return (
    <div className='singer-basic-info'>
      <div className='singer-pic'>
        <img src={props.picUrl + '?param=200y200'} alt='pic' />
      </div>
      <div className='singer-info'>
        <div className='singer-name'>{props.name}</div>
        {props.alias == undefined ? null : <div className='singer-alias'>{[...props.alias]}</div>}
        <div className='singer-music-nums'>
          <span>单曲数: {props.musicNum}</span>
          <span>专辑数: {props.albumNum}</span>
          <span>MV数: {props.mvNum}</span>
        </div>
      </div>
    </div>
  );
}
