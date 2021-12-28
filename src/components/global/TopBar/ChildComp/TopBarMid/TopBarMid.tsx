import React,{useEffect, useState} from 'react';
import { Button, Input } from 'antd';
import IconFont from '../../../../../components/common/IconFont/IconFont';
import './TopBarMid.less';

import { useNavigate } from 'react-router';
import store from '@/store';
import { setFun } from '../../../../../store/action';
export const TopBarMid = (props:any)=> {
  const navigate = useNavigate();
  const [value,setValue] = useState<string>('');
useEffect(()=>{
  console.log(props,23);
},[])
  return (
    <div className='top-bar-mid-container'>
      <div className='left-arrow mid-bar-item'>
        <Button size='small' className='top-bar-btn' shape='circle' icon={<IconFont iconName='arrow-left' />} />
      </div>
      <div className='right-arrow mid-bar-item'>
        <Button size='small' className='top-bar-btn' shape='circle' icon={<IconFont iconName='arrow-right' />} />
      </div>
      <div className='input-search mid-bar-item'>
        <Input
          onChange={(e)=>{
            navigate('/discovery/search');
            // props.setFun(e.target.value);
            store.dispatch(setFun(e.target.value))
            setValue(e.target.value);
          }}
          value={value}
          size='middle'
          className='top-bar-btn'
           prefix={<IconFont
          iconName='search' />} />
      </div>

      <div className='voice mid-bar-item'>
        <Button size='small' className='top-bar-btn' shape='circle' icon={<IconFont iconName='voice' />} />
      </div>
    </div>
  );
}


export default TopBarMid