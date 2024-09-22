import axiosInstance from './axios'
import { RequestHttpEnum, ContentTypeEnum } from '../enums/httpEnum'
import { getFarmID, getFarmInfo } from '../utils/session'

const farmID = () => {
  const pathname = process.env.REACT_APP_ROUTER_MODEL === 'HashRouter' ? window.location.hash : window.location.pathname;
  if (pathname === '/' || pathname === '' || pathname === '#/') {
    return getFarmID()
  } else {
    const farmInfo = getFarmInfo()
    return farmInfo.PastureCode
  }
}

export const get = (url: string, params?: object) => {
  return axiosInstance({
    url: url,
    method: RequestHttpEnum.GET,
    params: {...params, farmId: farmID(), PastureID: farmID()}
  })
}

export const post = (url: string, data?: any, headersType?: string) => {
  return axiosInstance({
    url: url,
    method: RequestHttpEnum.POST,
    data: {...data, farmId: data?.farmId || farmID(), PastureID: data?.farmId || farmID()},
    headers: {
      'Content-Type': headersType || ContentTypeEnum.JSON
    }
  })
}
