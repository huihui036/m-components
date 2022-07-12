/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-06-25 09:50:09
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-12 12:53:57
 */
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import router from './router/index'
import { toLine } from './utils'
import mUI from './components'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon-${toLine(key)}`, component)
}
app.use(router).use(ElementPlus).use(mUI).mount('#app')
