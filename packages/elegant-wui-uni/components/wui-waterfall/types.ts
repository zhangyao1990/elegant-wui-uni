import {
  baseProps,
  makeRequiredProp,
} from '../common/props'
import type { ExtractPropTypes } from 'vue'
export const waterFallModes = ['normal', 'calc'] as const

export const waterFallProps = {
  ...baseProps,
  /**
   * 列表数据
   */
  data: makeRequiredProp(Array<Record<string, any>>),
  /**
   * @description 瀑布流模式
   */
  mode: {
    type: String,
    values: waterFallModes,
    default: 'normal',
  },
}

export type WaterFallProps = ExtractPropTypes<typeof waterFallProps>

export type WaterFallMode = (typeof waterFallModes)[number]