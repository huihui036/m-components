<!--
 * @Description: 选择图标
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-06-25 14:14:52
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-12 12:55:40
-->
<template>
  <div>
    <m-choose-icons title="选择图标" v-model:visible="dialogVisible"></m-choose-icons>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
const dialogVisible = ref<boolean>(false)
</script>
<style></style>
