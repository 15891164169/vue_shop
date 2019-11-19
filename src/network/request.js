import axios from 'axios'
import { BASEURL } from '@/network/base.js'

export function request (config) {
  const instance = axios.create({
    baseURL: BASEURL.baseURL1,
    timeout: 5000
  })

  // 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  // 响应拦截器
  instance.interceptors.response.use(response => {
    if (response.data.returnCode === 'SUCCESS') {
      return response.data.data
    }
  }, err => {
    console.log(err)
  })

  return instance(config)
}
