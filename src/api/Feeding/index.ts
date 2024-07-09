import { get, post } from '../http'

/**
 * 获取料单饲料明细
 * @param params get参数
 * @returns 
 */
export const getFeedDetailsList = (params?: any) => {
    return get('App/BigDataApi/getFeedDetailsList', params)
}


/**
 * 获取料单执行情况
 * @param data post参数
 * @returns 
 */
export const getFeedIntakeList = (data?: any) => {
    return post('App/BigDataApi/getFeedIntakeList', data)
}


/**
 * 上料误差率
 * @param data post参数
 * @returns 
 */
export const getFeedingErroRatelist = (data?: any) => {
    return post('App/BigDataApi/FeedingErroRate', data)
}

/**
 * 下料误差率
 * @param data post参数
 * @returns 
 */
export const getBlankingErroRatelist = (data?: any) => {
    return post('App/BigDataApi/FeedingErroRate', data)
}

/**
 * 数据统计
 * @param data post参数
 * @returns 
 */
export const getTodayStatisticalData = (data?: any) => {
    return post('App/BigDataApi/getTodayStatisticalData', data)
}

/**
 * 料单折线
 * @param data post参数
 * @returns 
 */
export const getWeekBillData = (data?: any) => {
    return post('App/BigDataApi/getWeekBillData', data)
}
