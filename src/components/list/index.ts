/*
 * @Description:
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-23 10:55:21
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-23 10:55:51
 */
import { App } from 'vue'

import list from './src/index.vue'

export default {
  install(app: App) {
    app.component('m-list', list)
  },
}
