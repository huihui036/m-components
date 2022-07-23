<!--
 * @Description: notification
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-17 14:30:19
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-23 12:44:18
-->
<template>
  <div>
    <!-- <m-notification :max="99" :value="100"></m-notification>
    <m-notification  is-dot></m-notification>
    <m-notification  ></m-notification> -->
    <m-notification :max="99" :value="77" icon="ChatRound">
      <template #default>
        <m-list
          :list="list"
          :action="action"
          @clickItem="clickItem"
          @clickAction="clickAction"
        ></m-list>
      </template>
    </m-notification>
  </div>
</template>

<script lang="ts" setup>
const list = [
  {
    title: '通知',
    content: [
      {
        avatar: 'https://avatars.githubusercontent.com/u/29560987?v=4',
        title: '第五届数字中国建设峰会',
        time: '2022-07-21 16:42',
      },

      {
        avatar: 'https://avatars.githubusercontent.com/u/49899455?v=4',
        title: '第五届数字中国建设峰会',

        time: '2022-07-21 16:42',
      },
    ],
  },
  {
    title: '关注',
    content: [
      {
        avatar: 'https://avatars.githubusercontent.com/u/29560987?v=4',
        title: '由于西 评论了你的vue',
        desc: '这个一个非常不错项目 查看详情',
        time: '2022-07-21 16:42',
      },
    ],
  },
  {
    title: '代办',
    content: [
      {
        title: 'vue3X项目需要进行跟新',
        desc: '这个一个非常不错项目 前开始完成',
        tag: '未开始',
        tagType: 'success',
      },
    ],
  },
]
const action = [
  {
    icon: 'BellFilled',
    title: '全部已读',
  },
  {
    icon: 'CameraFilled',
    title: '清空记录',
  },
]

const clickItem = (val: any) => {
  console.log(val)
}
const clickAction = (val: any) => {
  console.log(val)
}
</script>
<style></style>
