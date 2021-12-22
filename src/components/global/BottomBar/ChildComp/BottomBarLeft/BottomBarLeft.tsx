import React from 'react';
import './BottomBarLeft.less';
import IconFont from '@/components/common/IconFont/IconFont';
export default function BottomBarLeft() {
  return (
    <div className='bottom-bar-left-item'>
      <div className='song-img'>
        <img src='https://p2.music.126.net/FCKp2mI10gDcVKosKqZ_Rw==/109951166738436559.jpg?param=130y130' />
      </div>
      <div className='song-info'>
        <div className='song-info-top'>
          <div className='song-name'>倒流时间</div>
          <div className='like-icon'>
            <IconFont iconName='like'></IconFont>
          </div>
        </div>

        <div className='song-singer'>G.E.M邓紫棋</div>
      </div>
    </div>
  );
}
