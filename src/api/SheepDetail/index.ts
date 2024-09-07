import { get, post } from '../http'

/**
 * 羊只列表、羊只卡片、过程记录
 * @param data post参数
 * @returns 
 */
export const getBaseCowInfoByBarn = (data?: any) => {
    return post('App/BigDataApi/BaseCowInfoByBarn', data)
}

/**
 * 月龄体态过程
 * @param data post参数
 * @returns 
 */
export const getProcessMontBodyAgeSheep = (data?: any) => {
    return post('App/BigDataApi/ProcessMontBodyAgeSheep', data)
}

/**
 * 羊只当前状态
 * @param data post参数
 * @returns
 */
export const getProcessCurrentState = (data?: any) => {
    return post('App/BigDataApi/ProcessCurrentState', data)
}