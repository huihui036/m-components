<!--
 * @Description: menu
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-24 09:44:36
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-24 15:37:57
-->
<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="defaultActive"
      :router="router"
      v-bind="$attrs"
    >
      <template v-for="(item, index) in data" :key="item.index">
        <!-- 第一层 -->
        <el-menu-item
          v-if="!item.children || !item.children.length"
          :index="item.index"
        >
          <component
            v-if="item.icon"
            :is="`el-icon-${toLine(item.icon)}`"
          ></component>
          <span>{{ item.name }}{{ item.index }}</span>
        </el-menu-item>
        <!-- 第二层 -->
        <el-sub-menu
          v-if="item.children && item.children.length"
          :index="item.index"
        >
          <template #title>
            <component
              v-if="item.icon"
              :is="`el-icon-${toLine(item.icon)}`"
            ></component>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item v-for="item1 in item.children" :index="item1.index">
            <component
              v-if="item.icon"
              :is="`el-icon-${toLine(item.icon)}`"
            ></component>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { MenuItem } from './types'
import { toLine } from '../../../utils'

let props = defineProps({
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true,
  },
  defaultActive: {
    type: String,
    default: '',
  },
  router: {
    type: Boolean,
    default: false,
  },
})
console.log(props.data)
</script>
<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
