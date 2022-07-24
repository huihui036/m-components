<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-24 10:01:12
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-24 10:31:31
-->
<template>
  <div style="width:200px">
    <m-menu :data="dataList" defaultActive="2" background-color="#eee" router></m-menu>
  </div>
</template>

<script lang="ts" setup>
const dataList = [
  {
    icon: 'CameraFilled',
    name: '导航1',
    index: '1',
    children: [
      {
        icon: 'CameraFilled',
        name: '导航1',
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
<style scoped lang="scss"></style>
