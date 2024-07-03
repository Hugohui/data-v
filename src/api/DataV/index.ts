import { get, post } from '../http'

/**
 * 数据统计
 * @param params get参数
 * @returns 
 */
export const getVisualDataStatistics = (params?: any) => {
    return get('App/BigDataApi/VisualDataStatistics', params)
}

/**
 * 育肥水平评估
 * @param data post参数
 * @returns 
 */
export const getFattLevelRecent6Months = (data?: any) => {
    return post('App/BigDataApi/FattLevelRecent6Months', data)
}

/**
 * 产奶量
 * @param data post参数
 * @returns 
 */
export const getMilkProduction = (data?: any) => {
    return post('App/BigDataApi/milkProduction', data)
}

/**
 * 环境监测
 * @param data post参数
 * @returns 
 */
export const getEnvironmentalMonitoring = (data?: any) => {
    return post('App/BigDataApi/environmentalMonitoring', data)
}


/**
 * 年度信用水平评估
 * @param data post参数
 * @returns 
 */
export const getRanchAnnualCreditLevelAssment = (data?: any) => {
    return post('App/BigDataApi/RanchAnnualCreditLevelAssment', data)
}