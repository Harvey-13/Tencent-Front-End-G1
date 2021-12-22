import React from 'react';
import './SideBar.less';
import SideBarItem from './ChildComp/SideBarItem/SideBarItem';
import IconFont from '@/components/common/IconFont/IconFont';
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

  return (
    <div className='side-bar-container'>
      <div className='about-net-music'>
        <SideBarItem>
          <span>发现音乐</span>
        </SideBarItem>
        <SideBarItem>
          <span>播放</span>
        </SideBarItem>
        <SideBarItem>
          <span>视频</span>
        </SideBarItem>
        <SideBarItem>
          <span>朋友</span>
        </SideBarItem>
        <SideBarItem>
          <span>直播</span>
        </SideBarItem>
        <SideBarItem>
          <span>私人FM</span>
        </SideBarItem>
      </div>

      <div className='about-my-music'>
        <div style={sideBarSubTitle}>我的音乐</div>
        <SideBarItem>
          <IconFont iconName='download'></IconFont>
          <span style={textStyle}>本地与下载</span>
        </SideBarItem>
        <SideBarItem>
          <IconFont iconName='recently-played'></IconFont>
          <span style={textStyle}>最近播放</span>
        </SideBarItem>{' '}
        <SideBarItem>
          <IconFont iconName='cloud'></IconFont>
          <span style={textStyle}>我的音乐云盘</span>
        </SideBarItem>{' '}
        <SideBarItem>
          <IconFont iconName='boke'></IconFont>
          <span style={textStyle}>我的播客</span>
        </SideBarItem>{' '}
        <SideBarItem>
          <IconFont iconName='collection'></IconFont>
          <span style={textStyle}>我的收藏</span>
        </SideBarItem>
      </div>

      <div className='about-my-music'>
        <div style={sideBarSubTitle}>创建的歌单</div>

        <SideBarItem>
          <IconFont iconName='like'></IconFont>
          <span style={textStyle}>我喜欢的音乐</span>
        </SideBarItem>
      </div>
    </div>
  );
}
