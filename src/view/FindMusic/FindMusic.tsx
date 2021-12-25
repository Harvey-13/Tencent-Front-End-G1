import React from 'react';
import FindMusicHeader from './ChildComp/FindMusicHeader/FindMusicHeader';
import FindMusicBanner from './ChildComp/FindMusicBanner/FindMusicBanner';
import { Outlet } from 'react-router-dom';
export default function FoundMusic() {
  return (
    <div className='content-container'>
      <FindMusicHeader></FindMusicHeader>
      <FindMusicBanner />
      <Outlet></Outlet>
    </div>
  );
}
