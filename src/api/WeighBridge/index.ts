import { get, post } from '../http'

/**
 * 测试get方法
 * @param params get参数
 * @returns 
 */
export const testGet = (params: any) => {
    return get('/', params)
}

/**
 * 除入场记录
 * @param data post参数
 * @returns 
 */
export const getWeighbridgeData = (data?: any) => {
    return post('App/BigDataApi/GetWeighbridgeData', data)
}