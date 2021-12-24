import React from 'react';
import './BottomBarMid.less';
import IconFont from '@/components/common/IconFont/IconFont';
import { Slider } from 'antd';
export default function BottomBarMid() {
  return (
    <div className='bottom-bar-mid-item'>
      <div className='play-icon-container'>
        <div className='play-mode play-icon-item'>
          <IconFont iconName='loop'></IconFont>
        </div>
        <div className='last-song play-icon-item'>
          <IconFont iconName='last-song'></IconFont>
        </div>
        <div className='play-or-pause play-icon-item'>
          <IconFont iconName='playing'></IconFont>
        </div>
        <div className='next-song play-icon-item'>
          <IconFont iconName='next-song'></IconFont>
        </div>
        <div className='lyrics play-icon-item'>词</div>
      </div>
      <div className='progress-bar-container'>
        <div className='now-playing-time'>00:00</div>
        <div className='progress-bar-item'>
          <Slider />
        </div>
        <div className='song-total-item'>3:33</div>
      </div>
    </div>
  );
}
