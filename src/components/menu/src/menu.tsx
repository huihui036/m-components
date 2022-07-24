/*
 * @Description:
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-24 11:39:56
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-24 15:40:07
 */
import { defineComponent, PropType, useAttrs, h, resolveComponent } from 'vue'
import { toLine } from '../../../utils'
import { MenuItem } from './types'
import './index.vue'
export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    defaultActive: {
      type: String,
      default: '',
    },
    router: {
      type: Boolean,
      default: false,
    },
  },

  setup(pros, ctx) {
    let attrs = useAttrs()
    let renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        item.i = `el-icon-${toLine(item.icon!)}`
        let slots = {
          title: () => {
            return (
              <>
                {h(resolveComponent(item.i))}
                <span>{item.name}</span>
              </>
            )
          },
        }

        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        }
        return (
          <el-menu-item index={item.index}>
            {h(resolveComponent(item.i))}
            <span>{item.name}</span>
          </el-menu-item>
        )
      })
    }
    return () => {
      return (
        <el-menu
          default-active={pros.defaultActive}
          router={pros.router}
          {...attrs}
        >
          {renderMenu(pros.data)}
        </el-menu>
      )
    }
  },
})
