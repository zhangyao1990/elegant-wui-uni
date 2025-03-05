import { baseProps, makeBooleanProp, makeNumberProp, makeNumericProp, makeStringProp } from '../common/props'

export const cubicBezierProps = {
  ...baseProps,
  /**
   * 动画方向，可选值:rt（右上）、rb（右下）、lb（左下）、lt（左上）
   * 类型: string
   * 默认值: lb
   */
  direction: {
    type: String,
    default: 'lb'
  },
  /**
   * 购物车（终点）中心位置top值，单位rpx，direction值为rt，lt时传值
   * 类型: Number, String
   * 默认值: 100
   */
  top: {
    type: [Number, String],
    default: 100
  },
  /**
   * 购物车（终点）中心位置bottom值，单位rpx，direction值为rb，lb时传值
   * 类型: Number, String
   * 默认值: 100
   */
  bottom: {
    type: [Number, String],
    default: 100
  },
  /**
   * 购物车（终点）中心位置left值，单位rpx，direction值为lb，lt时传值
   * 类型: Number, String
   * 默认值: 60
   */
  left: {
    type: [Number, String],
    default: 60
  },
  /**
   * 购物车（终点）中心位置right值，单位rpx，direction值为rt，rb时传值
   * 类型: Number, String
   * 默认值: 60
   */
  right: {
    type: [Number, String],
    default: 60
  },
  /**
   * 页面是否使用了原生导航栏，使用了自定义导航栏时传false
   * 类型: boolean
   * 默认值: true
   */
  navbar: {
    type: Boolean,
    default: true
  },
  /**
   * 自定义参数
   * 类型: Number, String
   * 默认值: 0
   */
  param: {
    type: [Number, String],
    default: 0
  }
}
