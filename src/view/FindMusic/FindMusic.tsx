import React from 'react';
import FindMusicHeader from './ChildComp/FindMusicHeader/FindMusicHeader';
import FindMusicBanner from './ChildComp/FindMusicBanner/FindMusicBanner';
export default function FoundMusic() {
  return (
    <div className='content-container'>
      <FindMusicHeader></FindMusicHeader>
      <FindMusicBanner />
    </div>
  );
}
