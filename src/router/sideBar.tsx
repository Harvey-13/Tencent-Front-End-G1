import React, { ReactNode, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const PodCast = lazy(() => import('@view/PodCast/PodCast'));
const Video = lazy(() => import('@view/Video/Video'));
const Subscribe = lazy(() => import('@view/Subscribe/Subscribe'));
const Livestream = lazy(() => import('@view/Livestream/Livestream'));
const PersonalFM = lazy(() => import('@view/PersonalFM/PersonalFM'));
const LocalAndDownload = lazy(() => import('@view/LocalAndDownload/LocalAndDownload'));
const RecentPlayed = lazy(() => import('@view/RecentPlayed/RecentPlayed'));
const MyFavorite = lazy(() => import('@view/MyFavorite/MyFavorite'));
const FindMusic = lazy(() => import('@/view/FindMusic/FindMusic'));

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<>loading</>}>{children}</Suspense>;
};
const sideBarRouter: RouteObject[] = [
  {
    path: 'findmusic',
    element: lazyLoad(<FindMusic />),
  },
  {
    path: 'podcast',
    element: lazyLoad(<PodCast />),
  },
  {
    path: 'video',
    element: lazyLoad(<Video />),
  },
  {
    path: 'subscribe',
    element: lazyLoad(<Subscribe />),
  },
  {
    path: 'livestream',
    element: lazyLoad(<Livestream />),
  },
  {
    path: 'personalFM',
    element: lazyLoad(<PersonalFM />),
  },
  {
    path: 'download',
    element: lazyLoad(<LocalAndDownload />),
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
