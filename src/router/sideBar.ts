import { RouteObject } from 'react-router-dom';
import FindMusic from '@view/FindMusic/FindMusic';
import PodCast from '@view/PodCast/PodCast';
import Video from '@view/Video/Video';
import Subscribe from '@view/Subscribe/Subscribe';
import Livestream from '@view/Livestream/Livestream';
import PersonalFM from '@view/PersonalFM/PersonalFM';
import LocalAndDownload from '@view/LocalAndDownload/LocalAndDownload';
import RecentPlayed from '@view/RecentPlayed/RecentPlayed';
import MyFavorite from '@view/MyFavorite/MyFavorite';

const sideBarRouter: RouteObject[] = [
  {
    path: 'findmusic',
    element: FindMusic(),
  },
  {
    path: 'podcast',
    element: PodCast(),
  },
  {
    path: 'video',
    element: Video(),
  },
  {
    path: 'subscribe',
    element: Subscribe(),
  },
  {
    path: 'livestream',
    element: Livestream(),
  },
  {
    path: 'personalFM',
    element: PersonalFM(),
  },
  {
    path: 'download',
    element: LocalAndDownload(),
  },
  {
    path: 'recentplayed',
    element: RecentPlayed(),
  },
  {
    path: 'myfavorite',
    element: MyFavorite(),
  },
];

export default sideBarRouter;
