<!--
 * @Description: from 表单
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-08-04 22:26:15
 * @LastEditors: Xqh
 * @LastEditTime: 2022-08-06 21:10:31
-->
<template>
  <el-form
    v-if="model"
    :validate-on-rule-change="false"
    :model="model"
    :rules="rules"
    v-bind="$attrs"
    label-width="120px"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        v-if="!item.children || !item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
          :placeholder="item.placeholder"
        ></component>
      </el-form-item>
      <!-- 存在children -->
      <el-form-item
        v-if="item.children && item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
          :placeholder="item.placeholder"
        >
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :is="`el-${child.type}`"
            :label="child.label"
            :value="child.value"
          >
          </component>
        </component>
      </el-form-item>
    </template>
  </el-form>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted, watch } from 'vue'
import cloneDeep from 'lodash/cloneDeep'
import { FormOption } from './types/types'
let props = defineProps({
  options: {
    type: Array as PropType<FormOption[]>,
    required: true,
  },
})
let model = ref<any>(null)
let rules = ref<any>(null)

function initForm() {
  if (!props.options || !props.options.length) return
  let m: any = {}
  let r: any = {}
  props.options.map((e: FormOption) => {
    m[e.prop!] = e.value
    r[e.prop!] = e.rules
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  })
}

// 监听父组件options的变化
watch(
  () => props.options,
  () => {
    initForm()
  },
  { deep: true }
)

onMounted(() => {
  initForm()
})
</script>
<style scoped lang="scss"></style>
