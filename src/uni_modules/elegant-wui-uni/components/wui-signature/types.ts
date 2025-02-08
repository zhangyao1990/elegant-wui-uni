import type { ExtractPropTypes, Prop, PropType } from 'vue'
import { baseProps, makeBooleanProp, makeNumberProp, makeRequiredProp } from '../common/props'
export const signatureProps = {
  ...baseProps,
  penColor: {
    type: String,
    default: '#000'
  },
  lineWidth: {
    type: Number,
    default: 3
  },
  height: {
    type: Number,
    default: 200
  },
  width: {
    type: Number,
    default: 300
  },
  clearText: {
    type: String,
    default: '清空'
  },
  confirmText: {
    type: String,
    default: '确认'
  },
  fileType: {
    type: String,
    default: 'png'
  },
  quality: {
    type: Number,
    default: 1
  },
  exportScale: {
    type: Number,
    default: 1
  },
  disabled: {
    type: Boolean,
    default: false
  }
}
export type FileType = {
  tempFilePath: string
  width: number
  height: number
}
export type SignatureExpose = {
  /** 点击清除按钮清除签名 */
  clear: () => void
  /** 点击确定按钮 */
  confirm: (result: FileType) => void
}
