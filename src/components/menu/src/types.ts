/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-24 09:52:42
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-24 14:33:04
 */
export interface MenuItem {
  icon?: string
  i?:any
  name: string
  index: string
  children?: MenuItem[]
}