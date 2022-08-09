/*
 * @Description: 表单类型
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-08-04 22:25:37
 * @LastEditors: Xqh
 * @LastEditTime: 2022-08-06 21:06:31
 */

import { StyleValue} from 'vue'
import { RuleItem } from './rule'

export interface FormOption {
  type:
    | 'cascader'
    | 'checkbox'
    | 'checkbox-group'
    | 'color-picker'
    | 'date-picker'
    | 'datetime-picker'
    | 'input'
    | 'input-number'
    | 'radio'
    | 'radio-group'
    | 'select'
    | 'option'
    | 'slider'
    | 'switch'
    | 'time-picker'
    | 'time-select'
    | 'transfer'
    | 'upload'
  // 表单值
  value: any
  // 名称
  label?: string
  // 标识
  prop?: string
  // 没有值时候的占位符
  placeholder?: string
  // 验证规则
  rules?: RuleItem[]
  // 特有属性
  attrs?: {
    clearable?: boolean
    showPassword?: boolean
    disabled?: boolean
    style?: StyleValue
  }
  children?: FormOption[]
}
