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
 * 获取料单执行情况
 * @param data post参数
 * @returns 
 */
export const getFeedIntakeList = (data?: any) => {
    return post('App/BigDataApi/getFeedIntakeList', data)
}