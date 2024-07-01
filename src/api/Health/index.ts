import { get, post } from '../http'

/**
 * 近一年检疫统计
 * @param params get参数
 * @returns 
 */
export const getQuarantineStatisticsYear = (data?: any) => {
    return post('App/BigDataApi/QuarantineStatisticsYear', data)
}

/**
 * 近一年免疫统计
 * @param data post参数
 * @returns 
 */
export const getCowImmuneStatisticsYear = (data?: any) => {
    return post('App/BigDataApi/CowImmuneStatisticsYear', data)
}