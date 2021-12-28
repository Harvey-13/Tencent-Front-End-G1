import React, { ReactNode, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Recommendation = lazy(() => import('@/view/FindMusic/ChildView/Recommendation/Recommendation'));
const SongRank = lazy(() => import('@/view/FindMusic/ChildView/SongRank/SongRank'));
const SingerRank = lazy(() => import('@/view/FindMusic/ChildView/SingerRank/SingerRank'));
const SongDetail = lazy(() => import('@view/FindMusic/ChildView/SongDetail'));
const SearchSongList = lazy(() => import('@/view/SearchSongList'));
const SongSheet = lazy(()=> import ('@/view/FindMusic/ChildView/SongSheet'))
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<>loading</>}>{children}</Suspense>;
};
const findMusicRouter: RouteObject[] = [
  {
    path: '',
    index: true,
    element: lazyLoad(<Recommendation />),
  },
  {
    path: 'songrank',
    element: lazyLoad(<SongRank />),
  },
  {
    path: 'singerrank',
    element: lazyLoad(<SingerRank />),
  },
  {
    path: 'music-detail',
    element: lazyLoad(<SongDetail />),
  },
  {
    path: 'song-sheet',
    element: lazyLoad(<SongSheet />),
  },
  {
    path:'search',
    element: lazyLoad(<SearchSongList />)
  },
];

export default findMusicRouter;
