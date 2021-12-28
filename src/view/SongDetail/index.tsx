import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Comment, Avatar, message } from 'antd';
import { LikeFilled } from '@ant-design/icons';
import moment from 'moment';
import { getSongText, getComment, getOneSong, getSimilar } from '@/api/FindMusic/songList';
import './index.less';
export const getQueryVariable = (str: string) => {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] == str) {
      return pair[1];
    }
  }
  return '';
};
const { Text, Title } = Typography;
export default function PodCast() {
  const id = getQueryVariable('id');
  const [songText, setSongText] = useState<string>('');
  const [songComment, setSongComment] = useState<any[]>([]);
  const [similarSongs, setSimilarSong] = useState<any[]>([]);
  const [song, setSong] = useState<any>({});

  const getSongTextFun = async () => {
    const res: any = await getSongText({ id: +id });
    if (res.code === 200) {
      let text = '';
      let reg = new RegExp('\\[(.+?)\\]', 'g');
      if (res.lrc.lyric) {
        text = res.lrc.lyric.replace(reg, '<br />');
      }
      setSongText(text);
    } else {
      message.error('数据异常！');
    }
  };
  const getCommentFun = async () => {
    const res: any = await getComment({ id: +id, limit: 20 });
    if (res.code === 200) {
      setSongComment(res.hotComments);
    } else {
      message.error('数据异常！');
    }
  };
  const getOneSongFun = async () => {
    const res: any = await getOneSong({ ids: +id });
    if (res.code === 200) {
      // setImg(res.playlist.coverImgUrl)
      setSong(res.songs[0]);
      getCommentFun();
      getSongTextFun();
    } else {
      message.error('数据异常！');
    }
  };
  const getSimilarFun = async () => {
    const res: any = await getSimilar({ id: +id });
    if (res.code === 200) {
      setSimilarSong(res.songs);
    } else {
      message.error('数据异常！');
    }
  };

  useEffect(() => {
    getOneSongFun();
    getSimilarFun();
  }, []);
  return (
    <div className='content-container'>
      <div className='sing-content'>
        <Row>
          <Col className='cover-img' span={12}>
            {song?.al?.picUrl && <img src={song?.al?.picUrl} alt='' />}
          </Col>
          <Col className='song-text' span={12}>
            <span dangerouslySetInnerHTML={{ __html: songText }} />
          </Col>
        </Row>

        <Row>
          <Col span={17}>
            <Title level={5}>精彩评论</Title>
          </Col>
          <Col span={7}>
            <Title level={5}>相似歌曲</Title>
          </Col>
        </Row>

        <Row>
          <Col span={16}>
            {songComment.length > 0 &&
              songComment.map(item => {
                return (
                  <Comment
                    key={item.commentId}
                    author={
                      <div>
                        <a>{item.user?.nickname}：</a>
                        <span className='comment-text'>{item.content}</span>
                      </div>
                    }
                    avatar={<Avatar src={item.user?.avatarUrl} alt='' />}
                    content={
                      <Row style={{ borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                        <Col span={20} className='comment-time'>
                          {moment(item.time).format('YYYY-MM-DD HH:mm:ss')}
                        </Col>
                        <Col span={4} style={{ textAlign: 'right' }}>
                          <LikeFilled style={{ color: 'rgb(124, 124, 124)', fontSize: '12px' }} />
                          <Text type='secondary' style={{ fontSize: '12px', marginLeft: '2px' }}>
                            {item.likedCount}
                          </Text>
                        </Col>
                      </Row>
                    }
                  />
                );
              })}
          </Col>
          <Col span={1} />
          <Col span={7}>
            {similarSongs.length > 0 &&
              similarSongs.map(item => {
                return (
                  <Comment
                    key={item.id}
                    author={
                      <div>
                        <span className='sing-name'>{item.name}</span>
                      </div>
                    }
                    avatar={<Avatar size={50} shape='square' src={item.album.picUrl} />}
                    content={
                      <Row>
                        <Col span={24} className='singer-name'>
                          {item?.artists[0].name}
                        </Col>
                      </Row>
                    }
                  />
                );
              })}
          </Col>
        </Row>
      </div>
    </div>
  );
}
