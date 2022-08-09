/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-08-04 22:27:00
 * @LastEditors: Xqh
 * @LastEditTime: 2022-08-06 13:23:46
 */
import { App } from 'vue'

import Form from './src/index.vue'

// 让组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('m-form', Form)
  },
}
