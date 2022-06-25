<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-06-25 11:39:57
 * @LastEditors: Xqh
 * @LastEditTime: 2022-06-25 11:57:19
-->
<template>
  <div class="header">
    <span @click="toggle">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </div>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean
}>()

const emits = defineEmits(['update:collapse'])

const toggle = () => {
  emits('update:collapse', !props.collapse)
}
</script>
<style lang="scss" scoped>
.header{
 height: 60px;
 padding: 0 20px;
 display: flex;
 align-items: center;
}
</style>
