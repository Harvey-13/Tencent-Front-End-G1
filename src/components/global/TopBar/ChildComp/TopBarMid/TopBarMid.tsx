import React,{useState} from 'react';
import { Button, Input } from 'antd';
import IconFont from '../../../../../components/common/IconFont/IconFont';
import './TopBarMid.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setFun} from '../../../../../store/action/index';
import { useNavigate } from 'react-router';
export const TopBarMid = (props:any)=> {
  const navigate = useNavigate();
  const [value,setValue] = useState<string>('');

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
            navigate('/discovery/search')
            props.setFun(e.target.value);
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

const mapStateToProps=(state:any)=>{
  return{
      state
  }
}
const mapDispathcToProps = (dispatch:any) =>{
  return{
      setFun:bindActionCreators(setFun,dispatch)
  }
}
export default connect(mapStateToProps,mapDispathcToProps)(TopBarMid);