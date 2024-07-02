import { SessionEnum } from '../enums/constantEnum'


/**
 * 获取farmCode
 * @returns 
 */
export const getFarmCode = () => {
  return sessionStorage.getItem(SessionEnum.FARMCODE)
}


/**
 * 判断是否登录，目前是判断session中是否有farmid
 * @returns 
 */
export const isLogin = () => {
    return !!getFarmCode()
}