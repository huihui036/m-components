/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-12 12:44:28
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-12 12:49:12
 */
import {App}from 'vue'

import chooseIcon from './src/index.vue'

// 让组件可以通过use的形式使用
export default {
  install(app:App){
    app.component('m-choose-icons',chooseIcon)
  }
}