import { get, post } from './http'

/**
 * 视频接口
 * @param params get参数
 * @returns 
 */
export const getPastureVideoList = (params?: any) => {
    return get('App/BigDataApi/PastureVideoList', params)
}
