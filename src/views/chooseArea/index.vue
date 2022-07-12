<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-10 22:31:49
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-12 12:56:19
-->
<template>
  <m-choose-area @change="change"></m-choose-area>
</template>

<script lang="ts" setup>

const change = (val: any) => {
  console.log(val)
}
</script>
<style></style>
