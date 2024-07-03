import { SessionEnum } from '../enums/constantEnum'


/**
 * 获取farmID
 * @returns 
 */
export const getFarmID = () => {
  return sessionStorage.getItem(SessionEnum.FARMID)
}

/**
 * 清除farmID
 * @returns 
 */
export const clearFarmId = () => {
  return sessionStorage.removeItem(SessionEnum.FARMID)
}

/**
 * 判断是否登录，目前是判断session中是否有farmid
 * @returns
 */
export const isLogin = () => {
    return !!getFarmID()
}