import { post } from '../http'

/**
 * 登录
 * @param data post参数
 * @returns 
 */
export const checkLogin = (data: any) => {
    return post('App/User/CheckLogin', data)
}