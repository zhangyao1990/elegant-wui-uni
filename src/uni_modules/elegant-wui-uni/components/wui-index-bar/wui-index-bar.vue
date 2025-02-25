<template>
  <view class="wui-index-bar" :id="indexBarId">
    <!-- #ifdef MP-DINGTALK -->
    <view class="wui-index-bar" :id="indexBarId">
      <!-- #endif -->
      <scroll-view :scrollTop="scrollState.scrollTop" :scroll-y="true" class="wui-index-bar__content" @scroll="hanleScroll">
        <slot></slot>
      </scroll-view>
      <view
        :id="indexBarKeyId"
        class="wui-index-bar__sidebar"
        @touchstart.stop.prevent="handleTouchStart"
        @touchmove.stop.prevent="handleTouchMove"
        @touchend.stop.prevent="handleTouchEnd"
        @touchcancel.stop.prevent="handleTouchEnd"
      >
        <view
          class="wui-index-bar__index key-value"
          :class="{ 'is-active': item.index === state.activeIndex }"
          v-for="item in children"
          :key="item.index"
        >
          {{ item.index }}
        </view>
        <!-- 提示框 -->
        <view v-if="scrollState.touching" class="wui-index-bar__tips-value" :style="{ top: `${state.keyListTipsTopValue}px` }">
          {{ state.activeIndex }}
          <view class="wui-index-bar__auxiliary-element" />
        </view>
      </view>
      <!-- #ifdef MP-DINGTALK -->
    </view>
    <!-- #endif -->
  </view>
</template>

<script setup lang="ts">
import { indexBarInjectionKey, indexBarProps, type KeyListRectInfo, type AnchorIndex } from './types'
import { ref, getCurrentInstance, onMounted, reactive, nextTick, watch } from 'vue'
import { getRect, isDef, uuid, pause } from '../common/util'
import { useChildren } from '../composables/useChildren'
import { debugWarn } from '../common/error'

const props = defineProps(indexBarProps)

const indexBarId = ref<string>(`indexBar${uuid()}`)
const indexBarKeyId = `indexBarKey${uuid()}`
const { proxy } = getCurrentInstance()!

const state = reactive({
  activeIndex: null as AnchorIndex | null,
  keyListTipsTopValue: 0
})

const { linkChildren, children } = useChildren(indexBarInjectionKey)

linkChildren({ props, anchorState: state })

watch(
  () => children,
  (newValue) => {
    if (!newValue.length) {
      state.activeIndex = null // 或者设置为一个默认值，如第一个子项的索引
      return
    }

    if (!isDef(state.activeIndex) || !newValue.find((item) => item.index === state.activeIndex)) {
      state.activeIndex = newValue[0].index
    }
  },
  { deep: true, immediate: true }
)

const scrollState = reactive({
  scrollTop: 0, // 即将滚动到的位置
  prevScrollTop: 0, // 上次记录的位置
  // 滚动距离
  touching: false
})

// 组件距离页面顶部的高度
let offsetTop = 0
let sidebarInfo = {
  // 侧边栏距离顶部的高度
  offsetTop: 0,
  // 高度固定24px
  indexHeight: 24
}

function init() {
  setTimeout(() => {
    Promise.all([
      getRect(`#${indexBarId.value}`, false, proxy),
      getRect('.wui-index-bar__sidebar', false, proxy),
      getRect('.wui-index-bar__index', false, proxy)
    ]).then(([bar, sidebar, index]) => {
      offsetTop = bar.top!
      sidebarInfo.offsetTop = sidebar.top!
      sidebarInfo.indexHeight = index.height!
    })
  }, 100)
}

onMounted(() => {
  init()
  // #ifndef APP-PLUS || MP-ALIPAY
  nextTick(() => {
    getKeyListNodeInfo()
  })
  // #endif
  // #ifdef APP-PLUS || MP-ALIPAY
  setTimeout(() => {
    getKeyListNodeInfo()
  }, 500)
  // #endif
})
function hanleScroll(scrollEvent: any) {
  if (scrollState.touching) {
    return
  }
  const { detail } = scrollEvent
  const scrolltop = Math.floor(detail.scrollTop)
  const anchor = children.find((item, index) => {
    if (!isDef(children[index + 1])) {
      return true
    }
    return item.$.exposed!.top.value - offsetTop <= scrolltop && children[index + 1].$.exposed!.top.value - offsetTop > scrolltop
  })
  if (isDef(anchor) && state.activeIndex !== anchor.index) {
    state.activeIndex = anchor.index
  }
  scrollState.prevScrollTop = scrolltop
}

function getAnchorByPageY(pageY: number) {
  const y = pageY - sidebarInfo.offsetTop
  let idx = Math.floor(y / sidebarInfo.indexHeight)
  if (idx < 0) idx = 0
  else if (idx > children.length - 1) idx = children.length - 1
  return children[idx]
}

function handleTouchStart() {
  scrollState.touching = true
}
let initCount = 0
const keyListItemRectInfo = ref<KeyListRectInfo[]>([])
async function getKeyListNodeInfo() {
  try {
    const keyListNodeInfo = await getRect(`#${indexBarKeyId}`, false, proxy)
    const keyListItemNodeInfo = await getRect(`#${indexBarKeyId} .key-value`, true, proxy)
    initCount = 0
    let keyListTop = keyListNodeInfo.top || 0
    keyListItemRectInfo.value = keyListItemNodeInfo.map((item: any, index: number) => {
      return {
        top: (item.top || 0) - keyListTop,
        height: item.height || 0,
        index: children[index].index
      }
    })
  } catch (err) {
    if (initCount > 10) {
      initCount = 0
      debugWarn('WuiIndexList', `获取索引列表的容器信息失败：${err}`)
      return
    }
    initCount++
    setTimeout(() => {
      getKeyListNodeInfo()
    }, 150)
  }
}
function handleTouchMove(e: TouchEvent) {
  const clientY = e.touches[0].pageY
  if (state.activeIndex === getAnchorByPageY(clientY).index) {
    return
  }
  state.activeIndex = getAnchorByPageY(clientY).index
  if (keyListItemRectInfo.value?.length) {
    const keyListRectItem: any = keyListItemRectInfo.value.find((item) => item.index === state.activeIndex)
    state.keyListTipsTopValue = keyListRectItem.top + keyListRectItem.height / 2
  }
  setScrollTop(getAnchorByPageY(clientY).$.exposed!.top.value - offsetTop)
}
async function handleTouchEnd(e: TouchEvent) {
  const clientY = e.changedTouches[0].pageY
  state.activeIndex = getAnchorByPageY(clientY).index
  setScrollTop(getAnchorByPageY(clientY).$.exposed!.top.value - offsetTop)
  await pause()
  scrollState.touching = false
}

function setScrollTop(top: number) {
  if (scrollState.scrollTop === top) {
    scrollState.scrollTop = scrollState.prevScrollTop
    nextTick(() => {
      scrollState.scrollTop = top
    })
  } else {
    scrollState.scrollTop = top
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
