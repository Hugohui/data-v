import { get, post } from '../http'

/**
 * 繁殖事件统计
 * @param params get参数
 * @returns 
 */
export const getReproductivEvent = (params?: any) => {
    return get('App/BigDataApi/ReproductivEvent', params)
}

/**
 * 测试post方法
 * @param data post参数
 * @returns 
 */
export const testPost = (data: any) => {
    return post('/', data)
}