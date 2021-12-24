import request from '../utils/request';
//登录状态
export const loginStatus = () => {
    return request({
      url: '/login/status',
    });
  };
//手机号登录
export const loginPhone = ({ phone, password, countrycode, md5_password, captcha }) => {
    return request({
      url: '/login/cellphone',
      method: 'get',
      params: {
        phone, 
        password, 
        countrycode, 
        md5_password, 
        captcha,
      },
    });
  };
  //邮箱登录
  export const loginEmail = ({ email, password, md5_password }) => {
    return request({
      url: '/login',
      method: 'get',
      params: {
        email, 
        password, 
        md5_password, 
      },
    });
  };
  //二维码key生成
  export const qrcodeKeyGenerate = () => {
    return request({
      url: '/login/qr/key',
      method: 'get',
    });
  };
  //二维码图片生成
  export const qrcodeImgGenerate = ({key, qrimg}) => {
    return request({
      url: '/login/qr/create',
      method: 'get',
      params: {
        key,
        qrimg,
      }
    });
  };
  //二维码状态查询
  export const qrcodeStatus = ({key}) => {
    return request({
      url: '/login/qr/check',
      method: 'get',
      params: {
        key,
      }
    });
  };
  //登录状态刷新
  export const loginRefresh = () => {
    return request({
      url: '/login/refersh',
      method: 'get',
    });
  };
  // 发送验证码
  export const captchaSend = ({phone, ctcode}) => {
    return request({
      url: '/captcha/sent',
      method: 'get',
      params: {
        phone,
        ctcode,
      }
    });
  };
  // 验证验证码
  export const captchaVerify = ({phone, ctcode}) => {
    return request({
      url: '/captcha/verify',
      method: 'get',
      params: {
        phone,
        ctcode,
      }
    });
  };