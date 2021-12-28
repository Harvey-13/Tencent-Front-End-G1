import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Select, Button, message } from 'antd';
import { phoneLoginApi } from '@/api/Login/PhoneLogin';
import store from '@/store';
import { setUserInfo } from '@/store/action';
const { Option } = Select;

interface ILoginForm {
  password: string;
  phone: string;
  prefix: string;
}

export default function TopBarRightLogin() {
  // 控制弹框显隐
  const [visible, setVisible] = useState(false);

  // 弹窗关闭
  const handleCancel = () => {
    setVisible(false);
  };

  // 手机号前的区号选择
  const prefixSelector = (
    <Form.Item name='prefix' noStyle initialValue={'+86'}>
      <Select style={{ width: 70 }}>
        <Option value='86'>+86</Option>
      </Select>
    </Form.Item>
  );

  // 点击登录事件
  const showModal = () => {
    setVisible(true);
  };

  // 表单提交
  const onFinish = async (val: ILoginForm) => {
    if (!val.phone.match(/^1[3456789]\d{9}$/)) {
      onFinishFailed();
      return;
    }
    const res: any = await phoneLoginApi(val.phone, val.password);
    if (res.code === 200) {
      message.success('登陆成功');
      setVisible(false);
      // user Info 存入 redux, 更改nickname
      store.dispatch(setUserInfo(res.profile));
    } else {
      message.error('登陆失败，检查用户名密码是否正确');
    }
  };

  // 数据验证失败
  const onFinishFailed = () => {
    message.error('数据验证失败，检查手机号');
  };

  // 响应store
  const [, setState] = useState({});
  useEffect(() => {
    store.subscribe(() => {
      setState({});
    });
  });

  const avatarStyle = {
    borderRadius: '50%',
  };

  const renderLoginDiv = () => {
    if (store.getState().setUserInfo.avatarUrl) {
      return (
        <>
          <div>
            <img style={avatarStyle} src={store.getState().setUserInfo.avatarUrl + '?param=30y30'} alt='头像' />
          </div>
          <div className='top-bar-right-item login' onClick={showModal}>
            {store.getState().setUserInfo.nickname}
          </div>
        </>
      );
    } else {
      return (
        <div className='top-bar-right-item login' onClick={showModal}>
          登录
        </div>
      );
    }
  };

  return (
    <>
      {renderLoginDiv()}

      <Modal title='登录' visible={visible} onCancel={handleCancel} footer={null}>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete='off'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name='phone'
            label='Phone'
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
