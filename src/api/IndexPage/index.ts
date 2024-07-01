import { get, post } from '../http'

/**
 * 测试get方法
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