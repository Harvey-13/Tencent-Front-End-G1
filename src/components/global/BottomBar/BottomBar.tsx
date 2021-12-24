import React from 'react';
import './BottomBar.less';
import BottomBarLeft from './ChildComp/BottomBarLeft/BottomBarLeft';
import BottomBarMid from './ChildComp/BottomBarMid/BottomBarMid';
import BottomBarRight from './ChildComp/BottomBarRight/BottomBarRight';
export default function BottomBar() {
  return (
    <div className='bottom-bar-container'>
      <BottomBarLeft />
      <BottomBarMid />
      <BottomBarRight />
    </div>
  );
}
