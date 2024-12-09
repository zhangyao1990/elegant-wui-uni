/*
 * @Author: Mr zhang
 * @Date: 2024-09-01 15:42:04
 * @LastEditTime: 2024-11-06 23:50:08
 * @LastEditors: Mr zhang
 * @Description:
 * @FilePath: \elegant-wui-uni\src\uni_modules\elegant-wui-uni\components\wui-transition\types.ts
 * 记得注释
 */
import type { ExtractPropTypes, PropType } from 'vue'
import { baseProps, makeBooleanProp, makeStringProp } from '../common/props'

export type TransitionName =
  | 'fade'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'slide-up'
  | 'zoom-in'
  | 'zoom-out'

export const transitionProps = {
  ...baseProps,

  /**
   * 是否展示组件
   * 类型：boolean
   * 默认值：false
   */
  show: makeBooleanProp(false),

  /**
   * 动画执行时间
   * 类型：number | boolean | Record<string, number>
   * 默认值：300 (毫秒)
   */
  duration: {
    type: [Object, Number, Boolean] as PropType<Record<string, number> | number | boolean>,
    default: 300
  },
  /**
   * 弹层内容懒渲染，触发展示时才渲染内容
   * 类型：boolean
   * 默认值：false
   */
  lazyRender: makeBooleanProp(false),
  /**
   * 动画类型
   * 类型：string
   * 可选值：fade / fade-up / fade-down / fade-left / fade-right / slide-up / slide-down / slide-left / slide-right / zoom-in
   * 默认值：'fade'
   */
  name: [String, Array] as PropType<TransitionName | TransitionName[]>,
  /**
   * 是否在动画结束时销毁子节点（display: none)
   * 类型：boolean
   * 默认值：false
   */
  destroy: makeBooleanProp(true),
  /**
   * 进入过渡的开始状态
   * 类型：string
   */
  enterClass: makeStringProp(''),

  /**
   * 进入过渡的激活状态
   * 类型：string
   */
  enterActiveClass: makeStringProp(''),

  /**
   * 进入过渡的结束状态
   * 类型：string
   */
  enterToClass: makeStringProp(''),

  /**
   * 离开过渡的开始状态
   * 类型：string
   */
  leaveClass: makeStringProp(''),

  /**
   * 离开过渡的激活状态
   * 类型：string
   */
  leaveActiveClass: makeStringProp(''),

  /**
   * 离开过渡的结束状态
   * 类型：string
   */
  leaveToClass: makeStringProp('')
}

export type TransitionProps = ExtractPropTypes<typeof transitionProps>