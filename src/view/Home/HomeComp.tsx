import React from 'react';
import TopBar from '@/components/global/TopBar/TopBar';
import BottomBar from '@/components/global/BottomBar/BottomBar';
import SideBar from '@/components/global/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <TopBar />
      <SideBar />
      <BottomBar />
      <Outlet />
    </>
  );
}
