/**
 * 判断是否为空
 * @param value 
 * @returns true false
 */
export const isEmpty = (value: any) => {
    return value == null || value === '' || value === 0
}