import React from 'react';
import IconFont from '@/components/common/IconFont/IconFont';
import MvRankItem from '../MvRankItem/MvRankItem';
import './MvRank.less';
interface IMvRank {
  listName: string;
  mv: Array<any>;
}

export default function MvRank(props: IMvRank) {
  return (
    <div className='mv-rank-container'>
      <div className='list-title'>
        <span>{props.listName}</span>
        <span>
          <IconFont iconName='arrow-right'></IconFont>
        </span>
      </div>

      <div className='mv-items-container'>
        {props.mv.map((mv: any, index: number) => {
          return (
            <div className='mv-rank-item' key={mv.id}>
              <MvRankItem
                rankNum={index + 1}
                coverImgUrl={mv.cover}
                mvName={mv.name}
                mvArtist={mv.artistName}
                playCount={mv.playCount}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
