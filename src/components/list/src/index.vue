<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-23 10:55:14
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-23 12:42:53
-->
<template>
  <div class="m-list-tabs">
    <el-tabs>
      <el-tab-pane
        v-for="(item, index) in list"
        :key="index"
        :label="item.title"
      >
        <el-scrollbar max-height="300px">
          <div
            class="container"
            v-for="(contentItem, contentIndex) in item.content"
            :key="contentIndex"
            @click="clickItem(contentItem,contentIndex)"
          >
            <div class="avatar" v-if="contentItem.avatar">
              <el-avatar size="small" :src="contentItem.avatar" />
            </div>
            <div class="content">
              <div class="title" v-if="contentItem.title">
                <p>{{ contentItem.title }}</p>
                <el-tag
                  v-if="contentItem.tag"
                  size="small"
                  :type="contentItem.tagType"
                  >{{ contentItem.tag }}</el-tag
                >
              </div>
              <p v-if="contentItem.desc" class="content-tex">
                {{ contentItem.desc }}
              </p>
              <p v-if="contentItem.time" class="content-tex">
                {{ contentItem.time }}
              </p>
            </div>
          </div>
          <div class="action">
            <div class="a-item" v-for="(item, index) in action" :key="index" @click="clickAction(item,index)">
              <div class="a-icon" v-if="item.icon">
                <component :is="`el-icon-${toLine(item.icon)}`"></component>
              </div>

              <p class="a-tile">{{ item.title }}</p>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { toLine } from '../../../utils'
import { ListItem, ListOptions, ActionList } from './types'
let props = defineProps({
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },
  action: {
    type: Array as PropType<ActionList[]>,
    default: () => [],
  },
})

let emit =defineEmits(['clickItem','clickAction']) 

const clickItem = (item:ListItem,index:number)=>{
  emit('clickItem',{item,index})
}

const clickAction = (item:ActionList,index:number)=>{
  emit('clickAction',{item,index})
}
</script>
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  &:hover{
    background-color: #e6f6ff;
  }
  .avatar {
    flex: 1;
  }
  .content {
    flex: 3;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .content-tex {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
  }
}
.action {
  height: 30px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  .a-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .a-icon{
    margin-right: 4px;
    position: relative;
    top: 2px;
  }
}
</style>
