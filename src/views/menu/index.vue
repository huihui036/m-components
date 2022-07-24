<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-24 10:01:12
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-24 15:24:41
-->
<template>
  <div style="width: 200px">
    <!-- <m-menu :data="dataList" defaultActive="2" background-color="#eee" ></m-menu> -->
    <m-infinite-menu
      :data="dataList2"
      defaultActive="2"
      background-color="#eee"
    ></m-infinite-menu>
  </div>
</template>

<script lang="ts" setup>
const dataList1 = [
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
const dataList2 = [
  {
    icon: 'CameraFilled',
    name: '导航1',
    index: '1',
    children: [
      {
        icon: 'CameraFilled',
        name: '导航1-1',
        index: '1-1',
        children: [
          {
            icon: 'CameraFilled',
            name: '导航1-1-1',
            index: '1-1-1',
          },
        ],
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
