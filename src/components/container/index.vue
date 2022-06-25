<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-06-25 11:05:37
 * @LastEditors: Xqh
 * @LastEditTime: 2022-06-25 11:58:10
-->
<template>
  <el-container>
    <el-aside width="auto">
    <nav-side :collapse="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <el-header>
      <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import navHeader from './navHeader/index.vue';
import NavSide from './navSide/index.vue';
const isCollapse = ref(false)
const toggle = () => {
  isCollapse.value = !isCollapse.value
}
</script>
<style scoped>
.el-header{
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
