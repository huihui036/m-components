/*
 * @Description:
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-24 09:44:21
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-24 11:45:14
 */
import { App } from 'vue'

import menu from './src/index.vue'
import infiniteMenu from './src/menu'

export default {
  install(app: App) {
    app.component('m-menu', menu)
    app.component('m-infinite-menu', infiniteMenu)
  },
}
