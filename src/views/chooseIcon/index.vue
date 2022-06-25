<!--
 * @Description: 选择图标
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-06-25 14:14:52
 * @LastEditors: Xqh
 * @LastEditTime: 2022-06-25 14:49:58
-->
<template>
  <div>
    <choose-icon title="选择图标" v-model:visible="dialogVisible"></choose-icon>
  </div>
</template>

<script lang="ts" setup>
import chooseIcon from '../../components/chooseIcons/index.vue'
import { ref } from 'vue'
const dialogVisible = ref<boolean>(false)
</script>
<style></style>
