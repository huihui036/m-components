/*
 * @Description:
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-06-25 09:59:08
 * @LastEditors: Xqh
 * @LastEditTime: 2022-06-25 11:08:38
 */
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'
import home from '../views/home.vue'
import container from '../components/container/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: container,
    children: [
      {
        path: '/',
        component: home,
      },
    ],
  },
]
const router = createRouter({
  routes,
  history: createMemoryHistory(),
})

export default router
