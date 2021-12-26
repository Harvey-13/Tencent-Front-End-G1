import React, { useEffect, useState } from 'react';
import './SingerRank.less';
import { getSingerApi } from '@/api/FindMusic/singerRank';
import IconFont from '@/components/common/IconFont/IconFont';
export default function SingerRank() {
  // 歌手列表
  const [singers, setSingers] = useState([]);
  // 现在选择的语种
  const [currentLang, setCurrentLang] = useState('华语');

  // 语种列表
  const langs = ['华语', '欧美', '韩国', '日本'];

  // 切换语种
  const changeLangHandler = async (lang: string) => {
    if (currentLang === lang) return;
    setCurrentLang(lang);
    getSingers(lang);
  };

  // 获取歌手列表
  const getSingers = async (currentLang: string) => {
    const res: any = await getSingerApi(langs.indexOf(currentLang) + 1);
    if (res.code === 200) {
      const lists: never[] = res.list.artists.map((item: any) => {
        return { name: item.name, picUrl: item.picUrl, id: item.id };
      });
      setSingers([...lists]);
    }
  };
  useEffect(() => {
    getSingers('华语');
  }, []);

  // 控制图片占位符
  const [isLoading, setIsLoading] = useState(true);
  const allLoaded = () => {
    const imgList = document.getElementsByClassName('singer-pic');
    const imgLength = imgList.length;
    let loaded = 0;
    for (let i = 0; i < imgLength; i++) {
      (imgList[i] as HTMLImageElement).onload = () => {
        loaded++;
        if (loaded === imgLength) {
          setIsLoading(false);
          console.log('图片加载完成 展示组件');
        }
      };
    }
    // 超时强制展示图片
    setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 5000);
  };

  useEffect(() => {
    allLoaded();
  }, [singers]);

  return (
    <div className='singer-rank-container'>
      <div className='lang-filter'>
        <span>语种:</span>
        {langs.map(item => (
          <span
            onClick={() => changeLangHandler(item)}
            key={item}
            className={`lang-item ${item === currentLang ? 'lang-item-active' : ''} `}
          >
            {item}
          </span>
        ))}
      </div>

      <div className='singer-list'>
        {singers.map((singer: any) => {
          return (
            <div key={singer.id} className='singer-item'>
              <div className='singer-img'>
                <div className='loading-icon' style={{ opacity: isLoading ? '1' : '0' }}>
                  <IconFont iconName='more'></IconFont>
                </div>
                <img
                  className='singer-pic'
                  style={{ opacity: isLoading ? '0' : '1' }}
                  src={singer.picUrl + '?param=150y150'}
                  alt={singer.name}
                />
              </div>
              <div className='singer-name'>{singer.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
