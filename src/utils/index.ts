/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-06-25 10:15:23
 * @LastEditors: Xqh
 * @LastEditTime: 2022-06-25 10:17:17
 */
export const toLine = (value:string)=>{
  return value.replace(/(A-Z)g/,'-$1').toLocaleLowerCase()
}