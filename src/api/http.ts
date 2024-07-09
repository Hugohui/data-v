import axiosInstance from './axios'
import { RequestHttpEnum, ContentTypeEnum } from '../enums/httpEnum'
import { getFarmID, getFarmInfo } from '../utils/session'

const farmID = () => {
  if (window.location.pathname === '/') {
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

export const post = (url: string, data?: object, headersType?: string) => {
  return axiosInstance({
    url: url,
    method: RequestHttpEnum.POST,
    data: {...data, farmId: farmID(), PastureID: farmID()},
    headers: {
      'Content-Type': headersType || ContentTypeEnum.JSON
    }
  })
}
