/*
 * @Description:
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-12 12:50:02
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-12 12:52:10
 */
import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcons'
const components = [chooseArea, chooseIcon]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  },
}
