import React, { ReactNode, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import findMusicRouter from './findMusic';

const Video = lazy(() => import('@view/Video/Video'));
const PersonalFM = lazy(() => import('@view/PersonalFM/PersonalFM'));
const RecentPlayed = lazy(() => import('@view/RecentPlayed/RecentPlayed'));
const FindMusic = lazy(() => import('@/view/FindMusic/FindMusic'));
const MyFavorite = lazy(() => import('@/view/Video/Video'));
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<>loading</>}>{children}</Suspense>;
};
const sideBarRouter: RouteObject[] = [
  {
    path: 'discovery',
    element: lazyLoad(<FindMusic />),
    children: findMusicRouter,
  },

  {
    path: 'video',
    element: lazyLoad(<Video />),
  },

  {
    path: 'personalFM',
    element: lazyLoad(<PersonalFM />),
  },
  {
    path: 'recentplayed',
    element: lazyLoad(<RecentPlayed />),
  },
  {
    path: 'myfavorite',
    element: lazyLoad(<MyFavorite />),
  },
];

export default sideBarRouter;
