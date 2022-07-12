<!--
 * @Description: el
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-06-25 14:07:16
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-12 12:43:44
-->
<template>
  <el-button @click="handleClick" type="primary">图标选择</el-button>

  <div class="m-choose-icon-dialog-body-height">
    <el-dialog v-model="dialogVisible" :title="title" width="40%">
      <el-scrollbar height="100%">
        <div class="container">
          <div
            v-for="(item, index) in Object.keys(ElementPlusIcon)"
            class="item"
            @click="copyIcon(item)"
          >
            <div class="icon">
              <component :is="`el-icon-${toLine(item)}`"></component>
            </div>
          
            <div class="text">{{ item }}</div>
          </div>
        </div>
      </el-scrollbar>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue'
import * as ElementPlusIcon from '@element-plus/icons-vue'
import { toLine } from '../../../utils'
import { useCopy } from '../../../hooks/iseCopy'  

let props = defineProps<{
  title: string
  visible: boolean
}>()
const dialogVisible = ref(props.visible)
let emits = defineEmits(['update:visible'])

// 点击了显示按钮
const handleClick = () => {
  emits('update:visible', !props.visible)
}


// 点击了复制图标
const copyIcon = (icons:string) => {
  useCopy(`<el-icon-${toLine(icons)} />`)
  // f复制后关闭弹框
  dialogVisible.value = false
}

watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val
  }
)

watch(
  () => dialogVisible.value,
  (val) => {
    emits('update:visible', val)
  }
)
</script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.text {
  font-size: 14px;
}
.item {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  height: 70px;
}
svg {
  width: 2em;
  height: 2em;
}
</style>
