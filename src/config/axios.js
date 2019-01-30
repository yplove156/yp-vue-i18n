import axios from 'axios'
import i18n from './i18n'
import { Message } from 'iview'
// 配置axios基本属性
const Axios = axios.create({
  baseURL: '/',
  timeout: 30000,
  responseType: 'json'
})
// Axios请求拦截器
Axios.interceptors.request.use()
// Axios响应拦截器
Axios.interceptors.response.use(
  (res) => {
    // 可在此处自定义错误提示信息
    return Promise.resolve(res)
  }, (error) => {
    // 默认错误提示信息
    Message.error(i18n.t('message.NETWORK_EXCEPTION'))
    return Promise.reject(error)
  }
)

export default Axios
