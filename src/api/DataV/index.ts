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
 * 育肥水平评估
 * @param data post参数
 * @returns 
 */
export const getFattLevelRecent6Months = (data?: any) => {
    return post('App/BigDataApi/FattLevelRecent6Months', data)
}