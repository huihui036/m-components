/*
 * @Description:
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-24 09:44:21
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-24 09:50:01
 */
import { App } from 'vue'

import menu from './src/index.vue'

export default {
  install(app: App) {
    app.component('m-menu', menu)
  },
}
