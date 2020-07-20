import axios from 'axios'
// import { Message } from 'element-ui'
// import qs from 'qs'
// import stores from './store/store'
import utcookie from '../utils/utcookie.js'
import config from './config'

if (process.server) {
  config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

const service = axios.create(config)
const trace_info = {"hashid": "hashkey","appid": "10050001"}
const header_info = {'Cookie': utcookie.getCookie("token")}//+ stores.$store.getters.token

// POST 传参序列化
service.interceptors.request.use(
  config => {
    // if (config.method === 'post') config.data = qs.stringify(config.data)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 返回状态判断
service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    return Promise.reject(error)
  }
)

export function fetchPost(url, params) {
  let param = hashkey(params, 'wap_info')
  // let header = {headers: header_info}
  return new Promise((resolve, reject) => {
    service.post(url, param)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchGet(url, params) {
  let param = hashkey(params, 'wap_info')
  return new Promise((resolve, reject) => {
      service.get(url, {
        headers: header_info,
        params: param
      })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function hashkey(param, key) {
  if (!param.hasOwnProperty(key)) {
    param[key] = trace_info
  }
  // console.log(param)
  return param
}

export default { service, fetchGet, fetchPost }
