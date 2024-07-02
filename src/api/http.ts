import axiosInstance from './axios'
import { RequestHttpEnum, ContentTypeEnum } from '../enums/httpEnum'
import { SessionEnum } from '../enums/constantEnum'

const getFarmCode = () => {
  return sessionStorage.getItem(SessionEnum.FARMCODE)
}

export const get = (url: string, params?: object) => {
  return axiosInstance({
    url: url,
    method: RequestHttpEnum.GET,
    params: {...params, farmId: getFarmCode()}
  })
}

export const post = (url: string, data?: object, headersType?: string) => {
  return axiosInstance({
    url: url,
    method: RequestHttpEnum.POST,
    data: {...data, farmId: getFarmCode()},
    headers: {
      'Content-Type': headersType || ContentTypeEnum.JSON
    }
  })
}

export const patch = (url: string, data?: object, headersType?: string) => {
  return axiosInstance({
    url: url,
    method: RequestHttpEnum.PATCH,
    data: data,
    headers: {
      'Content-Type': headersType || ContentTypeEnum.JSON
    }
  })
}

export const put = (
  url: string,
  data?: object,
  headersType?: ContentTypeEnum
) => {
  return axiosInstance({
    url: url,
    method: RequestHttpEnum.PUT,
    data: data,
    headers: {
      'Content-Type': headersType || ContentTypeEnum.JSON
    }
  })
}

export const del = (url: string, params?: object) => {
  return axiosInstance({
    url: url,
    method: RequestHttpEnum.DELETE,
    params
  })
}
