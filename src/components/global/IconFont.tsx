import React from 'react';

interface IIconFontProps {
  iconName: string;
}

export default function IconFont({ iconName }: IIconFontProps) {
  return (
    <div>
      <svg className='icon' aria-hidden='true'>
        <use xlinkHref={`#icon-${iconName}`} />
      </svg>
    </div>
  );
}
