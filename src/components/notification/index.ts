/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-17 14:24:40
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-17 14:27:38
 */
import { App } from 'vue'

import notification from './src/index.vue'

export default {
  install(app: App) {
    app.component('m-notification', notification)
  },
}
