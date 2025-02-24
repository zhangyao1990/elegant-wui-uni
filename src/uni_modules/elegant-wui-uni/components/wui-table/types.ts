/*
 * @Author: Mr zhang
 * @Date: 2024-03-15 11:36:12
 * @LastEditTime: 2024-07-18 19:02:32
 * @LastEditors: Mr zhang
 * @Description:
 * @FilePath: /elegant-wui-uni/src/uni_modules/elegant-wui-uni/components/wui-table/types.ts
 * 记得注释
 */
import type { CSSProperties, ExtractPropTypes, InjectionKey } from 'vue'
import { baseProps, makeBooleanProp, makeNumericProp, makeRequiredProp, numericProp } from '../common/props'
import type { TableColumnProps } from '../wui-table-col/types'
import type { PropType } from 'vue'

export const tableProps = {
  ...baseProps,
  /**
   * 显示的数据
   */
  data: makeRequiredProp(Array<Record<string, any>>),
  /**
   * 是否带有边框
   */
  border: makeBooleanProp(true),
  /**
   * 是否为斑马纹 table
   */
  stripe: makeBooleanProp(true),
  /**
   * Table 的高度
   */
  height: numericProp,
  /**
   * 行高
   */
  rowHeight: makeNumericProp(50),
  /**
   * 是否显示表头
   */
  showHeader: makeBooleanProp(true),
  /**
   * 是否超出2行隐藏
   */
  ellipsis: makeBooleanProp(true),
  /**
   * 是否显示索引列
   */
  index: {
    type: [Object, Boolean] as PropType<boolean | Omit<Partial<TableColumnProps>, 'prop'>>,
    default: false
  },
  fixedHeader: makeBooleanProp(true)
}

export type TableProps = ExtractPropTypes<typeof tableProps>

export type TableProvide = {
  props: Omit<TableProps, 'index' | 'customStyle' | 'customClass'>
  state: {
    scrollLeft: number
  }
  rowClick: (index: number) => void
  getIsLastFixed: (column: { fixed: boolean; prop: string }) => boolean
  getFixedStyle: (index: number, style: CSSProperties) => CSSProperties
}

export const TABLE_KEY: InjectionKey<TableProvide> = Symbol('wui-table')
