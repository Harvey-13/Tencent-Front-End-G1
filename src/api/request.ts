import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';

// 创建axios实例
const request = axios.create();

request.defaults.baseURL = 'localhost:3000';
request.defaults.withCredentials = false;
/**
 * 设置超时时间和跨域是否允许携带凭证
 */
request.defaults.timeout = 5000;

/**
 * 设置请求拦截器
 * 客户端发请求 -> 【请求拦截器】-> 服务器
 */
request.interceptors.request.use(
  // request success
  (config: AxiosRequestConfig) => {
    // 携带上token
    return config;
  },
  // request fail
  (error: any) => {
    message.error('请求错误，请联系技术人员');
    return Promise.reject(error);
  },
);

/**
 * 设置响应拦截器
 * 服务器返回信息 -> 【响应拦截器】 -> 客户端获取信息
 *
 */
request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: any) => {
    const response = error.response;

    if (response) {
      // 服务器返回结果了
      switch (response.status) {
        case 401:
          return response.data;
        case 403:
          return response.data;
        case 404:
          return response.data;
        default:
          return response.data;
      }
    } else {
      // 服务器结果都没返回: 服务器崩了 or 客户端没有网
      if (!window.navigator.onLine) {
        message.error('请检查网络...');
        return;
      }
      return Promise.reject(error);
    }
  },
);

export const postRequest = (
  url: string,
  data: any = {},
  headers = { 'Content-Type': 'application/json;charset=UTF-8' },
) => {
  return request({
    method: 'post',
    url,
    data,
    headers,
  });
};

export const getRequest = (url: string, params: any = {}) => {
  return request({
    method: 'get',
    url,
    params,
  });
};

export const deleteRequest = (url: string, params: any = {}) => {
  return request({
    method: 'delete',
    url,
    params,
  });
};

// export axios实例
export default request;
