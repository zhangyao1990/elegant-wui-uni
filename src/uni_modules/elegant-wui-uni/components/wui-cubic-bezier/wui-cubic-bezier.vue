<template>
  <!-- #ifndef APP-NVUE -->
  <view class="wui-cubic-bezier" @tap.stop="handleClick">
    <!-- #endif -->
    <!-- #ifdef APP-NVUE -->
    <view class="wui-cubic-bezier" @touchstart="appTouchStart" @touchend="appTouchEnd">
      <!-- #endif -->
      <view class="wui-cubic-bezier__ani-cb-x" v-if="animate" :style="style_x">
        <view class="wui-cubic-bezier__ani-cb-y" :class="{'wui-cubic-bezier__ani-cb-android':android}" :style="style_y">
          <slot name="badge"></slot>
        </view>
      </view>
      <slot></slot>
    </view>
</template>
<script lang="ts">
export default {
  name: 'wui-cubic-bezier',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>
<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
import { cubicBezierProps } from './types'

const props = defineProps(cubicBezierProps)
const emits = defineEmits(['click'])
// #ifdef APP-NVUE
const timestamp = ref<number>(0)
const touches = ref<any>({})
// #endif
const time = ref<number>(0)
const animate = ref<boolean>(false)
const width = ref<number>(375)
const height = ref<number>(1334)
const style_x = ref<string>('')
const style_y = ref<string>('')
const navH = ref<number>(0)
const android = ref<boolean>(false)

onMounted(()=>{
  let sys = uni.getSystemInfoSync()
  width.value = sys.windowWidth
  height.value = sys.windowHeight
  // #ifdef APP-NVUE
  android.value = sys.platform.toLocaleLowerCase() === 'android'
  if (props.navbar) {
    let statusBarHeight = sys.statusBarHeight as any
    navH.value = statusBarHeight + 44
  }
  // #endif
})
// #ifdef APP-NVUE
const appTouchStart = (e: any)=> {
    touches.value = e.changedTouches[0]
    timestamp.value = new Date().getTime()
}
const appTouchEnd = (e:any)=> {
  const {
    screenX
  } = e.changedTouches[0]
  let diff = Math.abs(touches.value.screenX - screenX)
  let time = (new Date().getTime()) - timestamp.value
  if (diff < 5 && time < 300) {
    handleClick({
      touches: [touches.value]
    })
  }
}
// #endif
const  handleClick = (e:any)=> {
  if (new Date().getTime() - time.value <= 550) return
  time.value = new Date().getTime()
  setTimeout(() => {
    time.value = 0
  }, 540)
  cbAni(e)
  emits('click', {
    param: props.param
  })
}

const cbAni = (e:any)=> {
  let touch:any = null

  // #ifdef MP-ALIPAY
  touch = e.detail
  // #endif

  // #ifdef MP-BAIDU
  touch = e.changedTouches[0]
  // #endif

  // #ifndef MP-ALIPAY || MP-BAIDU
  touch = e.touches[0]
  // #endif

  // #ifdef APP-NVUE
  touch = {
    clientX: touch.screenX,
    clientY: touch.screenY
  }
  // #endif
  let diff = {
    x: 0,
    y: 0
  }
  //rt 右上、rb 右下、lb 左下、lt 左上
  switch (props.direction) {
    case 'rt':
      diff.x = width.value - touch.clientX - uni.upx2px(Number(props.right))
      diff.y = uni.upx2px(Number(props.top)) - touch.clientY
      break
    case 'rb':
      diff.x = width.value - touch.clientX - uni.upx2px(Number(props.right))
      diff.y = height.value - touch.clientY - uni.upx2px(Number(props.bottom))
      break
    case 'lb':
      diff.x = uni.upx2px(Number(props.left)) - touch.clientX
      diff.y = height.value - touch.clientY - uni.upx2px(Number(props.bottom))
      break
    case 'lt':
      diff.x = uni.upx2px(Number(props.left)) - touch.clientX
      diff.y = uni.upx2px(Number(props.top)) - touch.clientY
      break
    default:
      break
  }

  //移动距离
  // #ifdef APP-NVUE
  style_x.value = `left:${touch.clientX}px;top:${touch.clientY-navH.value}px;`
  // #endif
  animate.value = true
  nextTick(() => {
    setTimeout(() => {
      // #ifdef APP-NVUE
      style_x.value +=
        `transform:translate(${diff.x}px,0px);`
      style_y.value = `transform:translate(0px,${diff.y}px);`

      // #endif
      // #ifndef APP-NVUE
      style_x.value = `transform:translate3d(${diff.x}px,0,0)`
      style_y.value = `transform:translate3d(0,${diff.y}px,0)`
      // #endif
      setTimeout(() => {
        animate.value = false
        //恢复到最初状态
        style_x.value = ''
        style_y.value = ''
      }, 600)
    }, 80)
  })
}
</script>


<style lang="scss" scoped>
@import './index.scss';
</style>
