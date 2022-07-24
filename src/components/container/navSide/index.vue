<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-06-25 11:40:26
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-24 15:36:50
-->
<template>
  <!-- <el-menu
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
  </el-menu> -->
  <div >
    <m-menu
      :data="data"
      :collapse="collapse"
      :default-active="$route.path"
    ></m-menu>
  </div>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean
}>()
const data = [
  {
    icon: 'CameraFilled',
    name: '导航1',
    index: '1',
    children: [
      {
        icon: 'CameraFilled',
        name: '导航1-1',
        index: '1-1',
      },
    ],
  },
  {
    icon: 'CameraFilled',
    name: '导航2',
    index: '2',
  },
  {
    icon: 'CameraFilled',
    name: '导航3',
    index: '3',
  },
]
</script>
<style scoped>

</style>
