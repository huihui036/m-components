/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-27 22:42:10
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-27 22:43:05
 */
import { App } from 'vue'

import progress from './src/index.vue'


export default {
  install(app: App) {
    app.component('m-progress', progress)
  },
}