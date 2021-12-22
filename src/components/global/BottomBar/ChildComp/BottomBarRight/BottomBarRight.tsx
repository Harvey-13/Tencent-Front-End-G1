import React from 'react';
import { Popover, Slider } from 'antd';

import './BottomBarRight.less';
import IconFont from '@/components/common/IconFont/IconFont';
export default function BottomBarRight() {
  const popOverStyle = { display: 'inline-block', height: 120, width: 30 };
  const volumnPopOver = (
    <div>
      <div style={popOverStyle}>
        <Slider vertical defaultValue={30} />
      </div>
    </div>
  );

  return (
    <div className='bottom-bar-right-item'>
      <div className='play-list'>
        <IconFont iconName='playlist2'></IconFont>
      </div>

      <div className='volumn-controller'>
        <Popover content={volumnPopOver} trigger='hover'>
          <span>
            <IconFont iconName='volumn'></IconFont>
          </span>
        </Popover>
      </div>
    </div>
  );
}
