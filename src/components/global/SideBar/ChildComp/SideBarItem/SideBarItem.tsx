import React from 'react';
import './SideBarItem.less';

interface ISideBarItem {
  isActive: Boolean;
  children?: any;
}

export default function SideBarItem(props: ISideBarItem) {
  return <div className={`side-bar-item ${props.isActive ? 'side-bar-item-active' : ''}`}>{props.children}</div>;
}
