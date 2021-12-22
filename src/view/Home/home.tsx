import React from 'react';
import TopBar from '@/components/global/TopBar/TopBar';
import BottomBar from '@/components/global/BottomBar/BottomBar';
import SideBar from '@/components/global/SideBar/SideBar';
export default function Home() {
  return (
    <div>
      <TopBar />
      <SideBar />
      <BottomBar />
    </div>
  );
}
