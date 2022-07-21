<!--
 * @Description: notification
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-17 14:30:19
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-17 16:05:57
-->
<template>
  <div>
    <!-- <m-notification :max="99" :value="100"></m-notification>
    <m-notification  is-dot></m-notification>
    <m-notification  ></m-notification> -->
    <m-notification :max="99" :value="77" icon="ChatRound">
    <template #default>这是个说明</template>
    </m-notification>
  </div>
</template>

<script lang="ts" setup></script>
<style></style>
