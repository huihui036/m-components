<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-13 07:57:55
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-13 23:43:41
-->
<template>
  <div class="flex">
    <m-trend></m-trend>
    <m-trend
      text="季度销售额"
      type="down"
      texColor="pink"
      iconColor="red"
    ></m-trend>

    <m-trend text="季度销售额" type="down" :reverseColor="true"></m-trend>

    <m-trend>
      <p>年度销售</p>
    </m-trend>

    <m-trend text="季度销售额" type="down" Icon="CaretBottom"></m-trend>
    <m-trend text="季度销售额" type="up" Icon="CaretTop"></m-trend>
  </div>
</template>

<script lang="ts" setup></script>
<style scoped lang="scss">
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>
