import React from 'react';
import { Button, Input } from 'antd';
import IconFont from '../../../../../components/common/IconFont/IconFont';
import './TopBarMid.less';
export default function TopBarMid() {
  return (
    <div className='top-bar-mid-container'>
      <div className='left-arrow mid-bar-item'>
        <Button size='small' className='top-bar-btn' shape='circle' icon={<IconFont iconName='arrow-left' />} />
      </div>
      <div className='right-arrow mid-bar-item'>
        <Button size='small' className='top-bar-btn' shape='circle' icon={<IconFont iconName='arrow-right' />} />
      </div>

      <div className='input-search mid-bar-item'>
        <Input size='middle' className='top-bar-btn' prefix={<IconFont iconName='search' />} />
      </div>

      <div className='voice mid-bar-item'>
        <Button size='small' className='top-bar-btn' shape='circle' icon={<IconFont iconName='voice' />} />
      </div>
    </div>
  );
}
