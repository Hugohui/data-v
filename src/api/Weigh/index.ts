import { get, post } from '../http'

/**
 * 羊只列表
 * @param data post参数
 * @returns 
 */
export const getSheepList = (data?: any) => {
    return post('App/BigDataApi/SheepList', data)
}


/**
 * 体重区间占比
 * @param data post参数
 * @returns 
 */
export const getPercentageSheepWeight = (data?: any) => {
    return post('App/BigDataApi/PercentageSheepWeight', data)
}


/**
 * 体重分布
 * @param data post参数
 * @returns 
 */
export const getLamBirthWeightDistribution = (data?: any) => {
    return post('App/BigDataApi/LamBirthWeightDistribution', data)
}

/**
 * 身高体重散点图
 * @param data post参数
 * @returns 
 */
export const getWeightDistribuMapDifferenPastAges = (data?: any) => {
    return post('App/BigDataApi/WeightDistribuMapDifferenPastAges', data)
}


/**
 * 分群日增量
 * @param params get参数
 * @returns
 */
export const getDailyGainDiffGroupDiffPastures = (params?: any) => {
    return get('App/BigDataApi/DailyGainDiffGroupDiffPastures', params)
}