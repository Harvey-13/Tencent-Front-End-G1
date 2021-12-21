import React from 'react';
import IconFont from '../../../../common/IconFont/IconFont';

import './TopBarLeft.less';
export default function TopBarLeft() {
  return (
    <div className='left-container'>
      <div className='netease-logo'>
        <IconFont iconName={'netease-music'}></IconFont>
      </div>
      <div className='netease-text'>网易云音乐</div>
    </div>
  );
}
