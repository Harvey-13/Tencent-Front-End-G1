import React from 'react';
import './TopBarRight.less';
import IconFont from '../../../../../components/common/IconFont/IconFont';
import TopBarRightLogin from './TopBarRightLogin/TopBarRightLogin';

export default function TopBarRight() {
  return (
    <div className='top-bar-right-container'>
      <TopBarRightLogin></TopBarRightLogin>
      <div className='top-bar-right-item'>
        <IconFont iconName=''></IconFont>
      </div>
      <div className='top-bar-right-item'>
        <IconFont iconName='clothes'></IconFont>
      </div>
      <div className='top-bar-right-item'>
        <IconFont iconName='setting'></IconFont>
      </div>
      <div className='top-bar-right-item'>
        <IconFont iconName='envelope'></IconFont>
      </div>
    </div>
  );
}
