/*
 * @Description:
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-12 12:50:02
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-17 14:32:28
 */
import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcons'
import notification from './notification'
import trend from './trend'
const components = [chooseArea, chooseIcon, trend, notification]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  },
}
