import React, { ReactNode, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// const Recommendation = lazy(() => import('@/view/FindMusic/ChildView/Recommendation/Recommendation'));
// const SongList = lazy(() => import('@/view/FindMusic/ChildView/SongList/SongList'));
// const SongRank = lazy(() => import('@/view/FindMusic/ChildView/SongRank/SongRank'));
// const SingerRank = lazy(() => import('@/view/FindMusic/ChildView/SingerRank/SingerRank'));
const SongDetail = lazy(() => import('@view/SongDetail'));
const SearchSongList = lazy(() => import('@/view/SearchSongList'));
const SongSheet = lazy(() => import('@/view/SongSheet'));
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<>loading</>}>{children}</Suspense>;
};
const findMusicRouter: RouteObject[] = [
  // {
  //   path: '',
  //   index: true,
  //   element: lazyLoad(<Recommendation />),
  // },

  // {
  //   path: 'songlist',
  //   element: lazyLoad(<SongList />),
  // },
  // {
  //   path: 'songrank',
  //   element: lazyLoad(<SongRank />),
  // },
  {
    path: 'music-detail',
    element: lazyLoad(<SongDetail />),
  },
  {
    path:'search',
    element: lazyLoad(<SearchSongList />)
  },
  {
    path:'song-sheet',
    element: lazyLoad(<SongSheet />)
  }
];

export default findMusicRouter;
