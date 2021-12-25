import React, { useState, useEffect } from 'react';
import TopBar from '@/components/global/TopBar/TopBar';
import BottomBar from '@/components/global/BottomBar/BottomBar';
import SideBar from '@/components/global/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const [isInit, setIsInit] = useState(true);

  const nav = useNavigate();
  useEffect(() => {
    if (isInit) {
      nav('/discovery');
      setIsInit(false);
    }
  });

  return (
    <>
      <TopBar />
      <SideBar />
      <BottomBar />
      <Outlet />
    </>
  );
}
