import { get, post } from '../http'

/**
 * 获取实时数据
 * @param params 
 * @returns 
 */
export const getRealTimeData = (params?: any) => {
    return get('App/BigDataApi/getRealTimeData', params)
}

/**
 * 获取繁育实时数据
 * @param params 
 * @returns 
 */
export const getBreedingRealTimeData = (params?: any) => {
    return get('App/BigDataApi/getBreedRealTimeData', params)
}

/**
 * 获取羊群结构
 * @param params get参数
 * @returns 
 */
export const getHerdStructure = (params?: any) => {
    return get('/App/BigDataApi/HerdStructure', params)
}

/**
 * 测试post方法
 * @param data post参数
 * @returns 
 */
export const testPost = (data: any) => {
    return post('/', data)
}