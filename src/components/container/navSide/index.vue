<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-06-25 11:40:26
 * @LastEditors: Xqh
 * @LastEditTime: 2022-06-25 11:51:48
-->
<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="collapse"
  >
    <el-menu-item index="1">
      <el-icon-menu></el-icon-menu>
      <template #title>导航1</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu></el-icon-menu>
      <template #title>导航2</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-menu></el-icon-menu>
      <template #title>导航3</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
let props = defineProps<{
  collapse: boolean
}>()
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
