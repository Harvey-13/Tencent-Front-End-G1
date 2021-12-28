import React from 'react';
import FindMusicHeader from './ChildComp/FindMusicHeader/FindMusicHeader';
import { Outlet } from 'react-router-dom';
export default function FoundMusic() {
  return (
    <div className='content-container'>
      <FindMusicHeader />
      <Outlet />
    </div>
  );
}
