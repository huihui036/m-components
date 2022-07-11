/*
 * @Description:
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-06-25 09:59:08
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-10 22:36:48
 */
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'
import home from '../views/home.vue'
import container from '../components/container/index.vue'
import chooseIcon from '../views/chooseIcon/index.vue'
import chooseArea from '../views/chooseArea/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: container,

    children: [
      {
        path: '/',
        component: home,
      },
      {
        path: '/chooseIcon',
        component: chooseIcon,
      },
      {
        path: '/chooseArea',
        component: chooseArea,
      },
    ],
  },
]
const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export default router
