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
    return get('App/BigDataApi/HerdStructure', params)
}

/**
 * 获取羊群变化趋势
 * @param params get参数
 * @returns 
 */
export const getMonthSheepHerdsTrend = (params?: any) => {
    return get('App/BigDataApi/getMonthSheepHerdsTrend', params)
}

/**
 * 获取产奶变化趋势
 * @param params get参数
 * @returns 
 */
export const getMonthMilkHerdsTrend = (params?: any) => {
    return get('App/BigDataApi/getMonthMilkHerdsTrend', params)
}

/**
 * 获取饲料使用情况
 * @param params get参数
 * @returns 
 */
export const getFeedUsageTrend = (params?: any) => {
    return get('App/BigDataApi/FeedUsageTrend', params)
}

/**
 * 存栏占比
 * @param params get参数
 * @returns 
 */
export const getSheepHerdsRatio = (params?: any) => {
    return get('App/BigDataApi/getSheepHerdsRatio', params)
}
