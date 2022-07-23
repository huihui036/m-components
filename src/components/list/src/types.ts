/*
 * @Description:
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-23 11:01:54
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-23 12:12:31
 */
 export interface ListItem {
  avatar?: string
  title?: string
  desc?: string
  time?: string
  tag?: string
  tagType?: '' | 'success' | 'info' | 'waring' | 'danger'
}

export interface ListOptions {
  title: string
  content: ListItem[]
}

export interface ActionList{
  title:string,
  icon?:string
}