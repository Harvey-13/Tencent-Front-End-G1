import React from 'react';
import IconFont from '@/components/common/IconFont/IconFont';
export default function PersonalFM() {
  const iconStyle = {
    height: `100%`,
    width: `100%`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '200px',
  };

  return (
    <div className='content-container'>
      <div className='icon' style={iconStyle}>
        <IconFont iconName='-to-be-continued'></IconFont>
      </div>
    </div>
  );
}
