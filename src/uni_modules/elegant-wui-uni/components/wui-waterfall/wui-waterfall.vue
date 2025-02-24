<template>
  <view class="wui-water-fall">
    <!-- 左边数据 -->
    <view :id="`${componentId}-left`" class="left wui-water-fall__container">
      <view v-for="(item, index) in leftData" :key="index" class="wui-water-fall__item">
        <slot name="left" :item="item" :index="index" />
      </view>
    </view>
    <!-- 右边数据 -->
    <view :id="`${componentId}-right`" class="right wui-water-fall__container">
      <view v-for="(item, index) in rightData" :key="index" class="wui-water-fall__item">
        <slot name="right" :item="item" :index="index" />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'wui-waterfall',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>
<script lang="ts" setup>
import { ref, getCurrentInstance, watch, nextTick } from 'vue'
import { waterFallProps } from './types'
import { deepClone, getRect, uuid } from '../common/util'
import { debugWarn } from '../common/error'
const props = defineProps(waterFallProps)

const { proxy } = getCurrentInstance() as any
const componentId = `wui-${uuid()}`

// 切割左右两边数据
const leftData = ref<any[]>([])
const rightData = ref<any[]>([])

// 获取左右两边容器的高度信息
let leftContainerHeight = 0
let rightContainerHeight = 0
const getContainerHeight = async () => {
  try {
    if (componentId) {
      setTimeout(async () => {
        const leftContainerRectInfo = await getRect(`#${componentId}-left`, false, proxy, true)
        const rightContainerRectInfo = await getRect(`#${componentId}-right`, false, proxy, true)
        leftContainerHeight = leftContainerRectInfo.height || leftContainerHeight
        rightContainerHeight = rightContainerRectInfo.height || rightContainerHeight
      }, 100)
    }
  } catch (err) {
    debugWarn('WuiWaterFall', `获取容器高度信息失败：${err}`)
  }
}

// 旧数据
let oldUserData: any[] = []
// 分割数据
const splitData = async (data: any[]) => {
  if (!data || !data.length) return
  if (props.mode === 'calc') {
    // 根据左右两边的数据高度，判断当前数据应该放在左边还是右边
    await getContainerHeight()
    if (leftContainerHeight <= rightContainerHeight) {
      leftData.value.push(data.shift())
    } else {
      rightData.value.push(data.shift())
    }
    nextTick(() => {
      setTimeout(() => {
        splitData(data)
      }, 200)
    })
  } else if (props.mode === 'normal') {
    // 判断当前的第一个元素是放在左边还是右边
    let firstLeft = true
    await getContainerHeight()
    if (leftData.value.length > rightData.value.length) {
      firstLeft = false
    }
    let leftSmall = false
    if (leftContainerHeight < rightContainerHeight) {
      leftSmall = true
    }

    // 按照顺序，左右交替放置数据
    data.forEach((item, index) => {
      if ((index % 2 === 0 && firstLeft) || leftSmall) {
        leftData.value.push(item)
      } else {
        rightData.value.push(item)
      }
      if (!firstLeft) {
        firstLeft = true
      }
      if (leftSmall && index >= 2) {
        leftSmall = false
      }
    })
  }
}

// 重新渲染列表
const resetWaterFall = () => {
  if (!props.data) return
  leftData.value = []
  rightData.value = []
  leftContainerHeight = 0
  rightContainerHeight = 0
  nextTick(() => {
    oldUserData = props.data
    splitData(props.data)
  })
}

watch(
  () => props.data,
  (val) => {
    if (!val) return
    if (oldUserData.length === val.length) return
    const newData = deepClone(val.slice(oldUserData.length))
    if (!newData.length) {
      leftData.value = []
      rightData.value = []
      leftContainerHeight = 0
      rightContainerHeight = 0
    }
    nextTick(() => {
      oldUserData = val
      splitData(newData)
    })
  },
  {
    immediate: true
  }
)

defineExpose({
  /**
   * @description 重置瀑布流
   */
  reset: resetWaterFall
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
