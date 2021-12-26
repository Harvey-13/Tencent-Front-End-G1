import React, { useEffect, useState } from 'react';
import { Row,Col,Typography, Space,Button,Table,Tabs} from "antd";
import {playlistDetail} from '@/api/FindMusic/songList';
import {CaretRightOutlined,PlusOutlined,DownloadOutlined,HeartOutlined} from '@ant-design/icons';
import moment from 'moment';
import { useNavigate } from 'react-router';
const {Title} = Typography
import './index.less';
const SongSheet = ()=>{
    const navigate = useNavigate();
  const [playlistDetailData,setPlaylistDetailData]= useState<any>({});
  const playlistDetailFun = async ()=>{
    const res:any = await playlistDetail(6920064959);
    console.log(res.code);
    if(res.code===200){
      setPlaylistDetailData(res.playlist);
      console.log(res.playlist.tracks);
    }
  }
  const columns = [
    
    {
      title: '音乐标题',
      render:(row:any)=>{
        let index:number|string = playlistDetailData.tracks.findIndex((item:any)=>item.id===row.id)+1;
        if (index<10){
          index = `0${index}`
        }else{
          index=`${index}`;
        }
      
        return(
          <Space>
            <span className='index'>
              {index}
            </span>
            <HeartOutlined style={{color:'gray'}} />
            <DownloadOutlined style={{color:'gray'}}  />
            <a onClick={()=>{navigate(`/discovery/music-detail?id=${row.id}`)}}>{row.name}</a>
          </Space>
        )
      }
    },
    {
      title: '歌手',
      key: 'age',
      render:(row:any)=>row.ar[0].name
    },
    {
      title: '专辑',
      key: 'address',
      render:(row:any)=>row.al.name
    },
    {
      title: '时长',
      key: 'duration',
      render:(row:any)=>{
        let tempNum = row.duration/1000
        let m:string|number = parseInt(`${tempNum/60}`);
        let s:string|number = parseInt(`${tempNum%60}`);
        m=+m>9?m:`0${m}`;
        s=+s>9?s:`0${s}`
        return <span>{m}:{s}</span>
      }
    }
    
  ];
  useEffect(()=>{
    playlistDetailFun()
  },[])
  return (
    <div className='content-container'>
      {playlistDetailData && <Row>
        <Col span={6}>
        {/* @ts-ignore */}
          <img className='cover-img' src={playlistDetailData.coverImgUrl} alt="" />
        </Col>
        <Col span={18}>
          <Space>
            <span className='song-sheet'>歌单</span>
            
            <Title level={5}>{playlistDetailData.name}</Title>
          </Space>
          <Space>
             {/* @ts-ignore */}
            <img className='head-img' src={playlistDetailData?.creator?.avatarUrl} alt="" />
             {/* @ts-ignore */}
            <a className='nickname'>{playlistDetailData?.creator?.nickname}</a>
             {/* @ts-ignore */}
            <span className='time'>{moment(playlistDetailData.createTime).format('YYYY-MM-DD')}创建</span>
            <Title level={5}>{playlistDetailData.name}</Title>
          </Space>
          <br />
        <Button className='my-btn-all' shape='round' style={{backgroundColor:'#ec4141',color:'#fff'}}>播放全部</Button>
        <br />
        <Space>
           {/* @ts-ignore */}
          <span className='tag'>标签：{playlistDetailData?.tags?.join('/')}</span>
        </Space>
        <br />
        <Space>
           {/* @ts-ignore */}
          <span className='song-num'>歌曲数：{playlistDetailData.trackCount}</span>
            {/* @ts-ignore */}
          <span className='play-num'>播放数：{playlistDetailData.playCount}</span>
        </Space>
        <br />
        {/* @ts-ignore */}
        <span className='explain'>简介：{playlistDetailData.description}</span>
        </Col>
      </Row>}
      <Tabs
        className='my-tabs'
        defaultActiveKey="1"
        onChange={()=>{}}
        
      >
        
        <Tabs.TabPane tab={<Title level={4}>单歌</Title>} key="1">
          
          <Table
            rowKey={(row:any)=>row.id}
            className='my-table'
            bordered={false}
            columns={columns}
            dataSource={playlistDetailData?playlistDetailData.tracks:[]}
            pagination={false}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab={<Title level={4}>歌手</Title>} key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}


export default SongSheet;