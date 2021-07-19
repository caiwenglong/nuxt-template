export default function ({$axios, redirect, route, store}) {
  // 基本配置
  $axios.defaults.timeout = 10000

  // 请求拦截
  $axios.onRequest(config => {
    console.log('请求拦截');
    config.headers.token = 'token'
    
    return config;
  })

  // 相应拦截
  $axios.onResponse(res => {
    console.log('响应拦截');


    return res
  })

  // 错误处理
  $axios.onError(error => {
    console.log('错误处理');


    return error
  })
}