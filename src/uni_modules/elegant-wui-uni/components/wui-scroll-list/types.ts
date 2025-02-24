import { baseProps, makeBooleanProp, makeNumericProp, makeStringProp } from '../common/props'

export const scrollListProps = {
  ...baseProps,

  /**
   * 是否显示指示器
   * 类型: boolean
   * 默认值: true
   */
  indicator: makeBooleanProp(true),
  /**
   * 指示器宽度
   * 类型：number 或 string
   * 默认值: 60
   */
  indicatorWidth: makeNumericProp(60),
  /**
   * 指示器滑块宽度
   * 类型：number 或 string
   * 默认值: 20
   */
  indicatorBarWidth: makeNumericProp(20),
  /**
   * 指示器颜色
   * 类型：string
   * 默认值: ''
   */
  indicatorColor: makeStringProp(''),
  /**
   * 指示器滑块颜色
   * 类型：string
   * 默认值: ''
   */
  indicatorActiveColor: makeStringProp(''),
  /**
   * 指示器自定义样式
   * 类型：string
   * 默认值: ''
   */
  indicatorStyle: makeStringProp('')
}
