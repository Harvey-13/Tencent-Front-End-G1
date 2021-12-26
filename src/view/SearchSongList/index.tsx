import React, { useEffect, useState } from 'react';
import {Row,Col,Typography,Space,Tabs,Button,Table, message} from 'antd'
import {CaretRightOutlined,PlusOutlined,DownloadOutlined,HeartOutlined} from '@ant-design/icons';
import {getSearchSongsList} from '../../api/playlists';
import { useNavigate } from 'react-router';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import { setFun } from '../store/action';
// import {getQueryVariable} from '../SongDetail'
import './index.less';
const {Title} = Typography;
// const keywords = getQueryVariable('keywords');
export const  SearchSongs = (props:any)=> {
  const navigate = useNavigate();
  const [songList,setSongList] = useState<any[]>([]);
  const [total,setTotal] = useState<number>(0);
  const [current,setCurrent]=useState<number>(1);
  const columns = [
    
    {
      title: '音乐标题',
      render:(row:any)=>{
        let index:number|string = songList.findIndex(item=>item.id===row.id)+1;
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
            {/* <span className="vip">VIP</span>
            <span className="try">试听</span>
            <span className="sq">SQ</span>
            <span className="mv">MV<CaretRightOutlined /></span> */}
          </Space>
        )
      }
    },
    {
      title: '歌手',
      key: 'age',
      render:(row:any)=>row.artists[0].name
    },
    {
      title: '专辑',
      key: 'address',
      render:(row:any)=>row.album.name
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
    },
    // {
    //   title: '热度',
    //   key: ''
    // },
  ];
  
 
  const getSearchSongsListFun = async (page:number,)=>{
    const res:any = await getSearchSongsList({
      keywords:props.state,
      type:1,
      offset:page?(page-1)*10:0,
      limit:20
    });
    if(res.code===200){
      setSongList([...res.result.songs]);
      setTotal(res.result.songCount);
    }else{
      message.error('数据有问题')
    }
  }
  useEffect(()=>{
    getSearchSongsListFun(1);
  },[total,props.state])
  return( 
    <div className='content-container'>
      <Row>
          <Col span={24}>
            <Space>
            <Title level={3}>搜索</Title>
            <Title level={3}>{props.state}</Title>
            </Space>
          </Col>
      </Row>
      <Tabs
        className='my-tabs'
        defaultActiveKey="1"
        onChange={()=>{}}
        tabBarExtraContent={<span style={{color:'gray'}}>找到了{total}首歌曲</span>}
      >
        
        <Tabs.TabPane tab={<Title level={4}>单歌</Title>} key="1">
          <Row>
            <Col span={24}>
              <Space>
              <Button className='my-btn-all' shape='round' style={{backgroundColor:'#ec4141',color:'#fff'}}>
                <CaretRightOutlined style={{color:"#fff"}} />
                播放全部
                <PlusOutlined style={{color:"#fff"}} />
              </Button>
              <Button className='my-btn-download' shape='round' style={{color:'rgb(60, 60, 60)'}}>
                <CaretRightOutlined style={{color:"#fff"}} />
                <DownloadOutlined />
                下载全部
                <PlusOutlined style={{color:"#fff"}} />
              </Button>
              </Space>

            </Col>
          </Row>
          <Table
            rowKey={(row:any)=>row.id}
            className='my-table'
            bordered={false}
            columns={columns}
            dataSource={songList}
            pagination={{
                current:current,
                pageSize:20,
                showSizeChanger:false,
                total:total,
                onChange(e:number){
                  setCurrent(e);
                  getSearchSongsListFun(e);
                }
              }}
            
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab={<Title level={4}>歌手</Title>} key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane tab={<Title level={4}>专辑</Title>} key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
        <Tabs.TabPane tab={<Title level={4}>视频</Title>} key="4">
          Content of Tab Pane 4
        </Tabs.TabPane>
        <Tabs.TabPane tab={<Title level={4}>歌单</Title>} key="5">
          Content of Tab Pane 5
        </Tabs.TabPane>
        <Tabs.TabPane tab={<Title level={4}>歌词</Title>} key="6">
          Content of Tab Pane 6
        </Tabs.TabPane>
        <Tabs.TabPane tab={<Title level={4}>博客</Title>} key="7">
          Content of Tab Pane 7
        </Tabs.TabPane>
        <Tabs.TabPane tab={<Title level={4}>声音</Title>} key="8">
          Content of Tab Pane 8
        </Tabs.TabPane>
        <Tabs.TabPane tab={<Title level={4}>用户</Title>} key="9">
          Content of Tab Pane 9
        </Tabs.TabPane>

      </Tabs>
    </div>
  );
}
const mapStateToProps=(state:any)=>{
  return{
      state
  }
}
const mapDispathcToProps = () =>{
  return{
      // setFun:bindActionCreators(dispatch:any)
  }
}
export default connect(mapStateToProps,mapDispathcToProps)(SearchSongs);