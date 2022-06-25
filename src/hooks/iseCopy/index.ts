/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-06-25 16:44:17
 * @LastEditors: Xqh
 * @LastEditTime: 2022-06-25 16:46:08
 */
import { ElMessage } from 'element-plus'

// 复制文本
export const useCopy = (val: string) => {
  navigator.clipboard
    .writeText(val)
    .then(() => {
      ElMessage.success('复制成功')
    })
    .catch((err) => {
      ElMessage.error('复制失败')
      console.error(err)
    })
}