/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-24 09:52:42
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-24 09:58:24
 */
export interface MenuItem {
  icon?: string
  name: string
  index: string
  children?: MenuItem[]
}