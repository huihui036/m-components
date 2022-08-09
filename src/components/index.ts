/*
 * @Description:
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-12 12:50:02
 * @LastEditors: Xqh
 * @LastEditTime: 2022-08-06 13:24:40
 */
import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcons'
import notification from './notification'
import list from './list'
import trend from './trend'
import menu from './menu'
import progress from './progress'
import Form from './form'
const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menu,
  progress,
  Form,
]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  },
}
