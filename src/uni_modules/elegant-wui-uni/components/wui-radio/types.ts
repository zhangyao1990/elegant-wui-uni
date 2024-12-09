/*
 * @Author: Mr zhang
 * @Date: 2024-03-15 20:40:34
 * @LastEditTime: 2024-03-18 16:01:19
 * @LastEditors: Mr zhang
 * @Description:
 * @FilePath: \elegant-wui-uni\src\uni_modules\elegant-wui-uni\components\wui-radio\types.ts
 * 记得注释
 */
import type { PropType } from 'vue'
import { baseProps, makeRequiredProp } from '../common/props'

export type RadioShape = 'dot' | 'button' | 'check'

export const radioProps = {
  ...baseProps,
  /** 选中时的值 */
  value: makeRequiredProp([String, Number, Boolean]),
  /** 单选框的形状 */
  shape: String as PropType<RadioShape>,
  /** 选中的颜色 */
  checkedColor: String,
  /** 禁用 */
  disabled: {
    type: [Boolean, null] as PropType<boolean | null>,
    default: null
  },
  /** 单元格 */
  cell: {
    type: [Boolean, null] as PropType<boolean | null>,
    default: null
  },
  /** 大小 */
  size: String,
  /** 内联 */
  inline: {
    type: [Boolean, null] as PropType<boolean | null>,
    default: null
  },
  /** 最大宽度 */
  maxWidth: String
}