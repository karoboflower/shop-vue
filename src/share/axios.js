import axios from 'axios'
import Router from '@/router/index'
const service = axios.create({
  timeout: 5000,
  withCredentials: true
});

service.interceptors.request.use(config => {
  let token = window.localStorage.getItem('logindata');
  let TENANTID = window.localStorage.getItem('TENANTID');
  if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.Authorization = token;
  }
  if (TENANTID) {
    config.headers.TENANTID = TENANTID; //判断店是否存在
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    let _this=this
    if (response.headers.Authorization) {
      localStorage.setItem('logindata', response.headers.Authorization) //不断刷新token，携带新的token给后台
    }
    if (response.data.code === 9999101) {
        Router.push('/login')
      return false;
    } else {
      return response
    }

  },
  function (error) {
    console.log(error)
  }
)



export default service;
