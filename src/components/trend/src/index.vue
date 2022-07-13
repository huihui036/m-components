<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-13 07:56:47
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-13 23:40:11
-->
<template>
  <div class="trend">
    <div class="text" :style="{ color: texColor }">
      <slot v-if="slots.default"></slot>

      <p v-else>{{ text }}</p>
    </div>
    <div class="icon">
      <component
        :is="`el-icon-${toLine(iconUp)}`"
        :style="{ color: reverseColor ? '#c45656' : iconColorDown }"
        v-if="type === 'up'"
      ></component>
      <component
        :is="`el-icon-${toLine(iconDown)}`"
        :style="{ color: reverseColor ? '#67c23a' : iconColorUp }"
        v-else
      ></component>
      <!-- <el-icon-arrowdown
        v-if="type === 'up'"
        :style="{ color: reverseColor ? '#c45656' : iconColorDown }"
      />
      <el-icon-arrowup
        v-else
        :style="{ color: reverseColor ? '#67c23a' : iconColorUp }"
      /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots, ref, PropType } from 'vue'
import { toLine } from '../../../utils'
export type TrendType = 'up' | 'down'

let pros = defineProps({
  type: {
    type: String as PropType<TrendType>,
    default: 'up',
  },
  text: {
    type: String,
    default: '默认',
  },
  texColor: {
    type: String,
    default: '#3e3e3e',
  },
  iconColor: {
    type: String,
  },
  reverseColor: {
    type: Boolean,
    default: false,
  },
  Icon: {
    type: String,
  },
})

const iconColorUp = ref<string>(pros.iconColor ? pros.iconColor : '#67c23a')
const iconColorDown = ref<string>(pros.iconColor ? pros.iconColor : '#c45656')

const iconDown = ref<string>(pros.Icon ? pros.Icon : 'ArrowDown')
const iconUp = ref<string>(pros.Icon ? pros.Icon : 'ArrowUp')

const slots = useSlots()


</script>
<style scoped lang="scss">
.trend {
  display: flex;
  align-items: center;
  .text {
    font-size: 12px;
    margin-right: 4px;
  }
  .icon {
    svg {
      width: 0.9em;
      height: 0.9em;
    }
  }
}
</style>
