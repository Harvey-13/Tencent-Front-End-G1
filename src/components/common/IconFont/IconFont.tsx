import React from 'react';

interface IIconFontProps {
  iconName: string;
}

export default function IconFont({ iconName }: IIconFontProps) {
  return (
    <svg className='icon' aria-hidden='true'>
      <use xlinkHref={`#icon-${iconName}`} />
    </svg>
  );
}
