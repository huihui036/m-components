<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-08-06 13:23:04
 * @LastEditors: Xqh
 * @LastEditTime: 2022-08-06 21:20:00
-->
<template>
  <div>
    <m-form :options="options"></m-form>
  </div>
</template>

<script lang="ts" setup>
import { FormOption } from '../../components/form/src/types/types'
const options: FormOption[] = [
  {
    type: 'input',
    value: '',
    prop: 'userName',
    placeholder: '请输入用户名',
    label: '用户名',
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur',
      },
    ],
    attrs: {
      clearable: true,
    },
  },
  {
    type: 'input',
    value: '',
    prop: 'password',
    placeholder: '请输入用户名',
    label: '密码',
    rules: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur',
      },
    ],
    attrs: {
      showPassword: true,
      clearable: true,
    },
  },
  {
    type: 'select',
    value: '',
    prop: 'name',
    placeholder: '选择职业',
    label: '职位',
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1',
      },
      {
        type: 'option',
        label: '总监',
        value: '2',
      },
    ],
    attrs: {
      style: {
        width: '100%',
      },
      clearable: true,
    },
  },

  {
    type: 'checkbox-group',
    value: [],
    prop: 'like',

    label: '爱好',
    rules: [
      {
        required: true,
        message: '爱好不能为空',
        trigger: 'change',
      },
    ],
    children: [
      {
        type: 'checkbox',
        label: '篮球',
        value: '1',
      },
      {
        type: 'checkbox',
        label: '足球',
        value: '2',
      },
      {
        type: 'checkbox',
        label: '羽毛球',
        value: '3',
      },
    ],
  },

  {
    type: 'radio-group',
    value: '',
    prop: 'sex',

    label: '性别',
    children: [
      {
        type: 'radio',
        label: '男',
        value: '1',
      },
      {
        type: 'radio',
        label: '女',
        value: '2',
      },
      {
        type: 'radio',
        label: '保密',
        value: '3',
      },
    ],
  },

  {
    type:'switch',
    value: false,
    prop: 'isLock',
    label: '是否开启',
  }
]
</script>
<style scoped lang="scss"></style>
