import React, { useState } from 'react';
import './FindMusicHeader.less';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function FindMusicHeader() {
  const [current, setCurrent] = useState('recommendation');
  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  const headerItem = [
    {
      key: 'recommendation',
      url: '',
      text: '个性推荐',
    },
    {
      key: 'songrank',
      url: './songrank',
      text: '排行榜',
    },
    {
      key: 'singerrank',
      url: './singerrank',
      text: '歌手',
    },
  ];

  const headerItemActiveStyle = {
    fontSize: '20px',
    fontWeight: '800',
    color: '#000000',
    textDecoration: 'none',
  };

  return (
    <div className='find-music-header-container'>
      <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
        {headerItem.map(item => (
          <Menu.Item key={item.key}>
            <Link style={current === item.key ? headerItemActiveStyle : undefined} to={item.url}>
              {item.text}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
