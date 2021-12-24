import React from 'react';
import './SideBar.less';
import SideBarItem from './ChildComp/SideBarItem/SideBarItem';
import IconFont from '@/components/common/IconFont/IconFont';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface ISideBarItem {
  url: string;
  text: string;
  iconName?: string;
}

export default function SideBar() {
  const textStyle = {
    marginLeft: 10,
    fontSize: 16,
  };

  const sideBarSubTitle = {
    fontSize: 14,
    color: '#cccccc',
    padding: 8,
  };

  const linkStyle = {
    color: '#000000',
    textDecoration: 'none',
  };

  const netMusicItems: ISideBarItem[] = [
    {
      url: '/findmusic',
      text: '发现音乐',
    },
    {
      url: '/podcast',
      text: '播客',
    },
    {
      url: '/video',
      text: '视频',
    },
    {
      url: '/subscribe',
      text: '关注',
    },
    {
      url: '/livestream',
      text: '直播',
    },
    {
      url: '/personalFM',
      text: '私人FM',
    },
  ];

  const myMusicItems: ISideBarItem[] = [
    {
      url: '/download',
      text: '本地与下载',
      iconName: 'download',
    },
    {
      url: '/recentplayed',
      text: '最近播放',
      iconName: 'recently-played',
    },
  ];

  const playListItem: ISideBarItem = {
    url: '/myfavorite',
    text: '我喜欢的音乐',
    iconName: 'like',
  };

  let location = useLocation();

  return (
    <div className='side-bar-container'>
      <div className='about-net-music'>
        {netMusicItems.map(item => {
          return (
            <Link to={item.url} style={linkStyle} key={item.url}>
              <SideBarItem isActive={item.url === location.pathname}>
                <span>{item.text}</span>
              </SideBarItem>
            </Link>
          );
        })}
      </div>

      <div className='about-my-music'>
        <div style={sideBarSubTitle}>我的音乐</div>

        {myMusicItems.map(item => {
          return (
            <Link to={item.url} style={linkStyle} key={item.url}>
              <SideBarItem isActive={item.url === location.pathname}>
                <IconFont iconName={item.iconName!}></IconFont>
                <span style={textStyle}>{item.text}</span>
              </SideBarItem>
            </Link>
          );
        })}
      </div>

      <div className='about-my-music'>
        <div style={sideBarSubTitle}>创建的歌单</div>
        <Link to={playListItem.url} style={linkStyle}>
          <SideBarItem isActive={playListItem.url === location.pathname}>
            <IconFont iconName={playListItem.iconName!}></IconFont>
            <span style={textStyle}>{playListItem.text}</span>
          </SideBarItem>
        </Link>
      </div>
    </div>
  );
}
