<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-10 22:28:25
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-12 12:46:15
-->
<template>
  <div>
    <el-select clearable v-model="province" placeholder="请选择省份">
      <el-option
        v-for="item in areaLits"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
    <el-select
      style="margin: 0 10px"
      clearable
      :disabled="!province"
      v-model="city"
      placeholder="请选择城市"
    >
      <el-option
        v-for="item in cityLits"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
    <el-select
      clearable
      :disabled="!province || !city"
      v-model="area"
      placeholder="请选择区域"
    >
      <el-option
        v-for="item in selectArea"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

import allAreas from '../lib/pcas-code.json'

export interface AreaItem {
  code: string
  name: string
  children?: AreaItem[]
}
export interface Data {
  name: string
  code: string
}
// 选中省份的值
let province = ref<string>('')
// 选中城市的值
let city = ref<string>('')
// 选中地区的值
let area = ref<string>('')

// 所有省份的值
let areaLits = ref<AreaItem[]>(allAreas)
//所有城市
let cityLits = ref<AreaItem[]>([])
//所有市区
let selectArea = ref<AreaItem[]>([])

//所有城市的值
watch(
  () => province.value,
  (val) => {
    if (val) {
      let cities = areaLits.value.find((e) => e.code == val)!.children!
      cityLits.value = cities
    }
    city.value = ''
    area.value = ''
  }
)

//所有城区的值
watch(
  () => city.value,
  (val) => {
    if (val) {
      let cities = cityLits.value.find((e) => e.code == val)!.children!
      selectArea.value = cities
    }
    area.value = ''
  }
)
let emits = defineEmits(['change'])
// 最终的值
watch(
  () => area.value,
  (val) => {
    if (val) {
      
      // 最终省份的值
      let provinceData: Data = {
        name: areaLits.value.find((e) => e.code == province.value)!.name,
        code: province.value,
      }

      // 最终城市的值
      let cityData: Data = {
        name: cityLits.value.find((e) => e.code == city.value)!.name,
        code: city.value,
      }

      // 最终市区的值
      let areaData: Data = {
        name: selectArea.value.find((e) => e.code == val)!.name,
        code: val,
      }
          emits('change', {
             province:provinceData,
             city:cityData,
             area:areaData
          })
   
    }
  }
)
</script>
<style></style>
