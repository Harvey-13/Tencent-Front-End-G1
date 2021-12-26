import React from 'react';
import IconFont from '@/components/common/IconFont/IconFont';
import MvListItem from '../MvListItem/MvListItem';
import './MvList.less';
interface IMvListProps {
  listName: string;
  mv: Array<any>;
}

export default function MvList(props: IMvListProps) {
  return (
    <div className='mv-list-container'>
      <div className='list-title'>
        <span>{props.listName}</span>
        <span>
          <IconFont iconName='arrow-right'></IconFont>
        </span>
      </div>

      <div className='mv-items-container'>
        {props.mv.map((mv: any) => {
          return (
            <div className='mv-item' key={mv.id}>
              <MvListItem mvImgUrl={mv.cover} mvName={mv.name} mvSinger={mv.artistName} mvPlayCount={mv.playCount} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
