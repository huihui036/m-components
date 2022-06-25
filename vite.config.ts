/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-06-25 09:50:09
 * @LastEditors: Xqh
 * @LastEditTime: 2022-06-25 09:51:49
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    port:8080
  }
})
