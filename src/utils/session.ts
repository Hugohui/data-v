import { SessionEnum } from '../enums/constantEnum'


/**
 * 获取farmID
 * @returns 
 */
export const getFarmID = () => {
  return Number(sessionStorage.getItem(SessionEnum.FARMID))
}

/**
 * 清除farmID
 * @returns 
 */
export const clearFarmId = () => {
  return sessionStorage.removeItem(SessionEnum.FARMID)
}

/**
 * 设置当前牧场
 * @param info 
 */
export const setFarmInfo = (info: any = {}) => {
  sessionStorage.setItem(SessionEnum.FARMINFO, JSON.stringify(info))
}

/**
 * 获取当前牧场
 * @returns 
 */
export const getFarmInfo = () => {
  return JSON.parse(sessionStorage.getItem(SessionEnum.FARMINFO) || '{}')
}

/**
 * 删除当前牧场
 * @returns 
 */
export const removeFarmInfo = () => {
  return sessionStorage.removeItem(SessionEnum.FARMINFO)
}

/**
 * 判断是否登录，目前是判断session中是否有farmid
 * @returns
 */
export const isLogin = () => {
    return !!getFarmID()
}