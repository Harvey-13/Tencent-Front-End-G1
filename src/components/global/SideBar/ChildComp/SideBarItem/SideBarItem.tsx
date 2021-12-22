import React from 'react';
import './SideBarItem.less';
export default function SideBarItem(props: any) {
  return <div className='side-bar-item'>{props.children}</div>;
}
