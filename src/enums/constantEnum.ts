/**
 * @description: 时间枚举
 */
export enum TimeEnum {
    REFRESH = 1000 * 60 * 2 // 刷新接口的间隔，2分钟
}

/**
 * @description: 登录之后存储全局农场标识
 */
export enum SessionEnum {
    FARMID = "farmID",
    FARMINFO = "farmInfo"
}