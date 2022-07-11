<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-10 22:31:49
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-11 22:12:21
-->
<template>
  <choose-area @change="change"></choose-area>
</template>

<script lang="ts" setup>
import chooseArea from '../../components/chooseArea/index.vue'
const change = (val: any) => {
  console.log(val)
}
</script>
<style></style>
