import React from 'react';
import FindMusicList from './ChildComp/FindMusicList';
import FindMusicBanner from './ChildComp/FindMusicBanner/FindMusicBanner';
import { Outlet } from 'react-router-dom';
import './index.less'
export default function FoundMusic() {
  return (
    <div className='content-container'>
      <FindMusicBanner />
      <FindMusicList />
      <Outlet />
    </div>
  );
}
