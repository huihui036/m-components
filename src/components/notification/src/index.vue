<!--
 * @Description: o
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-17 14:24:33
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-23 11:26:31
-->
<template>
  <div>
    <el-popover placement="bottom" trigger="click" :width="300">
      <template #default>
       <slot></slot>
      </template>
      <template #reference>
        <el-badge :value="value" :is-dot="isDot" :max="max">
          <component :is="`el-icon-${toLine(icon)}`"></component>
        </el-badge>
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import { toLine } from '../../../utils'
let pros = defineProps({
  icon: {
    type: String,
    default: 'Bell',
  },
  value: {
    type: [String, Number],
    default: '',
  },
  max: {
    type: Number,
  },
  isDot: {
    type: Boolean,
    default: false,
  },
})
</script>
<style></style>
