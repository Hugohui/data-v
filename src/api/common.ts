import { get, post } from './http'

/**
 * 视频接口
 * @param params get参数
 * @returns 
 */
export const getPastureVideoList = (params?: any) => {
    return get('App/BigDataApi/PastureVideoList', params)
}

/**
 * 视频转码
 * @param params get参数
 * @returns 
 */
export const getM3u8VideoStream = (url?: any) => {
    return get(`${process.env.REACT_APP_VIDEO_API_PATH}/api/device/getM3u8VideoStream?stream=${url}&deviceId=${url}`)
}