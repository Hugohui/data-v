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
 * 头部统计信息
 * @param data post参数
 * @returns 
 */
export const getYesterdayDataStatistics = (data?: any) => {
    return post('App/BigDataApi/YesterdayDataStatistics', data)
}


/**
 * 昨日班次产奶趋势
 * @param data post参数
 * @returns 
 */
export const getTrendChartMilkProductPerShift = (data?: any) => {
    return post('App/BigDataApi/TrendChartMilkProductPerShift', data)
}

/**
 * 月度产奶量
 * @param data post参数
 * @returns 
 */
export const getGroupMonthTotalMilkProStatistics = (data?: any) => {
    return post('App/BigDataApi/GroupMonthTotalMilkProStatistics', data)
}

/**
 * 日总奶量统计
 * @param data post参数
 * @returns 
 */
export const getDailyTotalMilkVolumStaticEachPast = (data?: any) => {
    return post('App/BigDataApi/DailyTotalMilkVolumStaticEachPast', data)
}

/**
 * 日均单产统计
 * @param data post参数
 * @returns 
 */
export const getStatistiDailyMilkProducEachPasture = (data?: any) => {
    return post('App/BigDataApi/StatistiDailyMilkProducEachPasture', data)
}

/**
 * 羊只产奶数据分析与统计-柱状图
 * @param data post参数
 * @returns 
 */
export const getSheepMilkProdDatAnaStatiBar = (data?: any) => {
    return post('App/BigDataApi/SheepMilkProdDatAnaStatiBar', data)
}

/**
 * 羊只产奶数据分析与统计-羊只列表
 * @param data post参数
 * @returns 
 */
export const getSheepMilkProdDatAnaStatiBarList = (data?: any) => {
    return post('App/BigDataApi/SheepMilkProdDatAnaStatiBarList', data)
}

/**
 * 羊只产奶曲线
 * @param data post参数
 * @returns 
 */
export const getSheepMilkProdDatAnaStatiListLine = (data?: any) => {
    return post('App/BigDataApi/SheepMilkProdDatAnaStatiListLine', data)
}

/**
 * 产奶羊只列表
 * @param params get参数
 * @returns 
 */
export const getListDairyProducingSheep = (params: any) => {
    return get('App/BigDataApi/ListDairyProducingSheep', params)
}