import React from 'react';
import './TopBar.less';
import TopBarLeft from './ChildComp/TopBarLeft/TopBarLeft';
import TopBarMid from './ChildComp/TopBarMid/TopBarMid';
import TopBarRight from './ChildComp/TopBarRight/TopBarRight';
export default function TopBar() {
  return (
    <div className='top-bar-container'>
      <div className='top-bar-left'>
        <TopBarLeft />
        <TopBarMid />
      </div>

      <TopBarRight />
    </div>
  );
}
