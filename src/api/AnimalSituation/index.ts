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
 * 繁殖水平评估
 * @param params 
 * @returns 
 */
export const getBreedingRate = (params?: any) => {
    return get('App/BigDataApi/breedingRate', params)
}


/**
 * 本年存栏统计
 * @param params 
 * @returns 
 */
export const getHalfYearEveryPasturStatics = (params?: any) => {
    return get('App/BigDataApi/getMonthSheepHerdsTrend', params)
}

/**
 * 本年出栏统计
 * @param params 
 * @returns 
 */
export const getHalfYearEveryPasturdePartureStatics = (params?: any) => {
    return get('App/BigDataApi/HalfYearEveryPasturdePartureStatics', params)
}

/**
 * 测试post方法
 * @param data post参数
 * @returns 
 */
export const testPost = (data: any) => {
    return post('/', data)
}