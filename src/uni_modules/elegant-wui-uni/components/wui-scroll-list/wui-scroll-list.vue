<template>
  <view class="wui-scroll-list">
    <scroll-view
      class="wui-scroll-list__scroll-view"
      scroll-x
      :upper-threshold="0"
      :lower-threshold="0"
      @scroll="scrollHandler"
      @scrolltoupper="scrollToUpperHandler"
      @scrolltolower="scrollToLowerHandler"
    >
      <view class="wui-scroll-list__content">
        <slot></slot>
      </view>
    </scroll-view>

    <!-- 指示器 -->
    <view v-if="indicator" class="wui-scroll-list__indicator" :style="[indicatorStyle]">
      <view class="wui-scroll-list__indicator-line" :style="[lineStyle]">
        <view class="wui-scroll-list__indicator-line-bar" :style="[barStyle]"></view>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  name: 'wui-scroll-list',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>
<script setup lang="ts">
import { ref, computed, onMounted, nextTick, getCurrentInstance } from 'vue'
import { scrollListProps } from './types'
import { getRect } from '../common/util'
const { proxy } = getCurrentInstance() as any
const props = defineProps(scrollListProps)

// 定义 Emits 类型
interface Emits {
  (event: 'left'): void
  (event: 'right'): void
}

// 定义 Emits
const emit = defineEmits<Emits>()

// 定义滚动信息类型
interface ScrollInfo {
  scrollLeft: number
  scrollWidth: number
}

// 响应式数据
const scrollInfo = ref<ScrollInfo>({
  scrollLeft: 0,
  scrollWidth: 0
})
const scrollWidth = ref<number>(0)

// 计算属性：指示器滑块样式
const barStyle = computed(() => {
  const scrollLeft = scrollInfo.value.scrollLeft
  const scrollWidthValue = scrollInfo.value.scrollWidth
  const barAllMoveWidth = uni.upx2px(Number(props.indicatorWidth)) - uni.upx2px(Number(props.indicatorBarWidth))
  const x = (scrollLeft / (scrollWidthValue - scrollWidth.value)) * barAllMoveWidth

  return {
    transform: `translateX(${x}px)`,
    width: `${props.indicatorBarWidth}rpx`,
    backgroundColor: props.indicatorActiveColor
  }
})

// 计算属性：指示器整体样式
const lineStyle = computed(() => ({
  width: `${props.indicatorWidth}rpx`,
  backgroundColor: props.indicatorColor
}))

// 处理滚动事件
const scrollHandler = (event: { detail: ScrollInfo }) => {
  scrollInfo.value = event.detail
}

// 滚动到最左边触发事件
const scrollToUpperHandler = () => {
  emit('left')
  scrollInfo.value.scrollLeft = 0
}

// 滚动到最右边触发事件
const scrollToLowerHandler = () => {
  emit('right')
}

// 获取组件的宽度
const getComponentWidth = () => {
  // #ifndef MP-WEIXIN
  getRect('.wui-scroll-list', false, proxy).then((res) => {
    if (!res) {
      setTimeout(() => {
        getComponentWidth()
      }, 10)
      return
    }
    scrollWidth.value = res.width
  })
  // #endif
  // #ifdef MP-WEIXIN
  getRect('.wui-scroll-list', false, proxy, true).then((res: any) => {
    if (!res) {
      setTimeout(() => {
        getComponentWidth()
      }, 10)
      return
    }
    scrollWidth.value = res.width
  })
  // #endif
}

// 生命周期钩子
onMounted(() => {
  nextTick(() => {
    getComponentWidth()
  })
})
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
