import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
  Axios,
  AxiosRequestConfig
} from 'axios'
import { ResultEnum } from '../enums/httpEnum'
import { isLogin } from '../utils/session'

export interface MyResponseType<T> {
  code: ResultEnum
  data: T
  message: string
}

export interface MyRequestInstance extends Axios {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <T = any>(config: AxiosRequestConfig): Promise<MyResponseType<T>>
}

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  timeout: ResultEnum.TIMEOUT
}) as unknown as MyRequestInstance

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 请求前判断是否登录（是否有farmid）
    if (config?.url !== 'App/User/CheckLogin' && !isLogin()) {
      window.location.href = '/login'
      return config
    }
    return config
  },
  (error: AxiosError) => {
    Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    const { code } = res.data as { code: number }
    if (code === undefined || code === null) return Promise.resolve(res.data)
    if (code === ResultEnum.SUCCESS) return Promise.resolve(res.data)
    return Promise.resolve(res.data)
  },
  (err: AxiosResponse) => {
    // Promise.reject(err)
  }
)

export default axiosInstance
