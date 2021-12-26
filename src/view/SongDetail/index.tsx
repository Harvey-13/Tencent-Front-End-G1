import React, { useEffect, useState } from 'react';
import {Row,Col,Typography,Comment, Avatar, message} from 'antd';
import { LikeFilled} from '@ant-design/icons';
// import {useNavigate } from 'react-router';
import moment from 'moment';
import {getSongText,getComment,getOneSong,getSimilar,} from '../../api/playlists';//getHotSongs,searchSong
import './index.less';
export const getQueryVariable = (str:string) =>{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == str){return pair[1];}
       }
       return('');
}
const {Text,Title} = Typography;
export default function PodCast() {
  const id = getQueryVariable('id');
  // const navigate = useNavigate();
  const [songText,setSongText] = useState<string>('');
  const [songComment,setSongComment] = useState<any[]>([]);
  const [similarSongs,setSimilarSong] = useState<any[]>([]);
  const [song,setSong] =useState<any>({})
  // const [visible,setVisible] = useState<boolean>(false);
  // const [hotSongs,setHotSongs] = useState<any[]>([]);
  // const [searchValue,setSearchValue] = useState<string>('');
  // const [searchData,setSearchData] = useState<any>()
  const getSongTextFun = async ()=>{
    const res:any = await getSongText({id:+id});
    if(res.code === 200){
      let text = '';
      let reg = new RegExp('\\[(.+?)\\]',"g");
        if(res.lrc.lyric){
          text = res.lrc.lyric.replace(reg,'<br />')
        }
      setSongText(text);
    }else{
      message.error('数据异常！');
    }
    
  }
  const getCommentFun = async ()=>{
    const res:any = await getComment({id:+id,limit:20});
    if(res.code === 200){
      setSongComment(res.hotComments);
    }else{
      message.error('数据异常！');
    }
  }
  const getOneSongFun = async ()=>{
    const res:any = await getOneSong({ids:+id});
    if(res.code===200){
      // setImg(res.playlist.coverImgUrl)
      setSong(res.songs[0])
      getCommentFun();
      getSongTextFun()
    }else{
      message.error('数据异常！');
    }
  }
   const getSimilarFun = async ()=>{
     const res:any = await getSimilar({id:+id});
     if(res.code===200){
      setSimilarSong(res.songs)
     }else{
       message.error('数据异常！');
     }
   }
  //  const getHotSongList = async ()=>{
  //    const res:any = await getHotSongs();
  //    if(res.code === 200){
  //     setHotSongs(res.result.hots)
  //    }else{
  //     message.error('数据异常！');
  //   }
  //  }
  //  const getHistorySongList = ()=>{
  //    let historyList:string[] = [];
  //    let historySongList = localStorage.getItem('historySongList');
  //    if(historySongList){
  //     historyList = Array.isArray(JSON.parse(historySongList))?JSON.parse(historySongList):[];
  //     return historyList;
  //    }
  //  }
  //  const getSearchSong = async (word:string)=>{
  //    const res:any = await searchSong({keywords:word});
  //    if(res.code === 200){
  //     setSearchData(res.result);
  //    }else{
  //     message.error('数据异常！');
  //   }
  //  }
  //  const globalListenner = (e:Event)=>{
  //    setVisible(true);
  //     //@ts-ignore
  //     if(e.searchValue.value){
  //       //@ts-ignore
  //       getSearchSong(e.searchValue.value)
  //     }
    
  //  }
  useEffect(()=>{
    getOneSongFun();
    getSimilarFun();
    // getHotSongList();
    // window.addEventListener('SearchValueChange',globalListenner);
    // return ()=>{
    //   window.removeEventListener('SearchValueChange',globalListenner);
    // }
  },[])
  return (
    <div className='content-container'>
      {/* <Row>
        <Col span={18}></Col>
        <Col span={6}>
          <Space>
            <Input
              value={searchValue}
              onFocus={()=>{setVisible(true)}}
              placeholder="搜索"
              prefix={<SearchOutlined />}
              onChange={(e)=>{
                getSearchSong(e.target.value);
                setSearchValue(e.target.value);
              }}
            />
            <GithubOutlined style={{fontSize:'30px',cursor:'pointer'}} />
          </Space>
        </Col>
      </Row> */}
      <div className='sing-content'>
      <Row>
        <Col className='cover-img' span={12}>
        {song?.al?.picUrl&& <img src={song?.al?.picUrl} alt="" />}
        </Col>
        <Col className='song-text' span={12}>
          <span  dangerouslySetInnerHTML={{__html:songText}} />
        </Col>
      </Row>

      <Row>
        <Col span={17}> <Title level={5}>精彩评论</Title></Col>
        <Col  span={7}> <Title level={5}>相似歌曲</Title></Col>
      </Row>

      <Row>
        <Col span={16}>
          {songComment.length>0 && songComment.map(item=>{
            return (
              <Comment
                key={item.commentId}
                author={<div>
                  <a>{item.user?.nickname}：</a>
                  <span className='comment-text'>{item.content}</span>
                  </div>
                  }
                avatar={<Avatar src={item.user?.avatarUrl} alt="" />}
                content={
                  <Row style={{borderBottom:'1px solid #eee',paddingBottom:'15px'}}>
                    <Col span={20} className="comment-time">
                      {moment(item.time).format('YYYY-MM-DD HH:mm:ss')}
                    </Col>
                    <Col span={4} style={{textAlign:'right'}}>
                      <LikeFilled style={{color:'rgb(124, 124, 124)',fontSize:'12px'}} />
                      <Text type="secondary" style={{fontSize:'12px',marginLeft:'2px'}} >{item.likedCount}</Text>
                    </Col>
                  </Row>
                }
              />
            )
          })}
        </Col>
        <Col span={1} />
        <Col span={7}>
          {similarSongs.length>0 && similarSongs.map(item=>{
            return (
              <Comment
                key={item.id}
                author={<div>
                  <span className='sing-name'>{item.name}</span>
                  </div>
                  }
                avatar={<Avatar size={50}  shape='square' src={item.album.picUrl } />}
                content={
                  <Row>
                    <Col span={24} className="singer-name">
                      {item?.artists[0].name}
                    </Col>
                  </Row>
                }
              />
            )
          })}
        
    </Col>
  </Row>
  {/* <Drawer
    title={<span className='hot-search'>热门搜索</span>}
    mask={false}
    closable={true} 
    placement="right"
    getContainer={ document.querySelector('.sing-content') as HTMLDivElement}
    onClose={()=>{setVisible(false);setSearchData(undefined)}} 
    visible={visible}>
      {!searchData && <>
        {
          hotSongs.length>0&&hotSongs.map((item,index)=>{
            return (
              <span
                onClick={()=>{
                  navigate(`/discovery/search?keywords=${item.first}`)
                  setSearchValue(item.first);
                  let historySongList = localStorage.getItem('historySongList');
                  if(historySongList){
                    let tempArr:string[] = JSON.parse(historySongList);
                    Array.isArray(tempArr) && tempArr.push(item.first);
                    localStorage.setItem('historySongList',JSON.stringify([...new Set(tempArr)]));
                  }else{
                    let tempArray:string[] = [];
                    tempArray.push(item.first);
                    localStorage.setItem('historySongList',JSON.stringify(tempArray));
                  }
                }}
                className='hot-song-item'
                key={`${index}-hot-song`
                }>{item.first}</span>
            )
          })
        }
        <div className="search-history">
        <div className='search-title'>历史搜索</div>
        {getHistorySongList()?.map(item=>{
          return (
            <span
                onClick={()=>{
                  setSearchValue(item);
                }}
                className='hot-song-item'
                key={`${item}-hot-song`
                }>{item}</span>
          )
        })
        }
        </div>
      </>}
       {searchData && <>
          {searchData.songs && searchData.songs.length>0 &&
          <div className="songs">
            <div className="title">歌曲</div>
            {searchData.songs.map((item:any)=>{
              return (
                <div key={item.id} className="song-item">
                  {item.name}
                </div>
              )
            })}
          </div>}
         {searchData.artists && searchData.artists.length>0 && <div className="artists">
            <div className="title">歌手</div>
              {searchData.artists.map((item:any)=>{
                return (
                  <div key={item.id} className="artists-item">
                    {item.name}
                  </div>
                )
              })}
          </div>}
          {searchData.albums && searchData.albums.length>0 &&<div className="albums">
            <div className="title">专辑</div>
              {searchData.albums.map((item:any)=>{
                return (
                  <div key={item.id} className="albums-item">
                    {item.name}
                  </div>
                )
              })}
          </div>}
        </>}
      </Drawer> */}
  </div>
  
</div>)
}
