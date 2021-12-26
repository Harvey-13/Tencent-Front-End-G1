import React, { useEffect, useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {Row,Col,Typography,Card,Pagination, message} from 'antd';
import {RightOutlined,CaretRightOutlined} from '@ant-design/icons';
import {topList} from '../../../../api/playlists';
import {SongItemType} from '../../types'
import './index.less';

const { Text } = Typography;
const FindMusicList:React.FC = ()=> {
  const navigation =useNavigate()
  const [musicList,setMusicList] = useState<SongItemType[]>([]);
  const [current,setCurrent] = useState<number>(1);
  const [total,setTotal] = useState<number>(0);
  const getList = async (page?:number)=>{
    const params = {
      limit: 10,
      offset:page?(page-1)*10:0,
    }
    const res:any = await topList(params);
    if(res.code===200){
      setMusicList(res.playlists);
      setTotal(res.total)
    }else{
      message.error('请稍后刷新！');
    }
  }
  useEffect(()=>{
    getList();
  },[])
  
  return (
    <div className='find-music-header-container'>
      <Row>
        <Col span={4}>
          <Text className='recommend'>推荐歌单</Text>
          <RightOutlined style={{fontSize:'12px'}} />
        </Col>
      </Row>
      <div className="song-list">
        {musicList.length>0 && musicList.map(item=>{
          return (
            <Card
            key={item.id}
            className='song-item'
            hoverable={true}
            cover={<img alt="example" src={item.coverImgUrl}
            onClick={()=>{navigation(`/discovery/song-sheet?id=${item.id}`)}}
            />}
          >
            <Text className='play-number'>
              <CaretRightOutlined  /> 
             {item.playCount>10000?`${Math.round(item.playCount/10000)}万`:item.playCount}
            </Text>
            <div className="play-icon">
                <div className="play-icon-btn"></div>
            </div>

            <Card.Meta title={null} description={item.name} />
          </Card>
          )
        })}
      </div>
        <Pagination
         current={current}
          total={total}
          showSizeChanger={false}
          onChange={(e:number)=>{
            setCurrent(e);
            getList(e);
          }}
        />
    </div>
  );
}
export default  FindMusicList;