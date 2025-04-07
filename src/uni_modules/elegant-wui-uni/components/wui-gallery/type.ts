import { baseProps } from '../common/props'

export const galleryProps = {
  ...baseProps,
  urls: {
    type: Array,
    default() {
      return []
    }
  },
  show: {
    type: Boolean,
    default: false
  },
  current: {
    type: [Number, String],
    default: 0
  },
  //文字超出是否省略成一行
  ellipsis: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: [Number, String],
    default: 9999
  },
  //是否适配底部安全区
  safeArea: {
    type: Boolean,
    default: true
  }
}
