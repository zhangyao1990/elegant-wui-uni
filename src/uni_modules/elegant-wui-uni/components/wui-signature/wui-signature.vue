<template>
  <view :class="`wui-signature ${customClass}`">
    <view class="wui-signature__content" :style="canvasStyle">
      <!-- #ifdef MP-WEIXIN -->
      <canvas
        class="wui-signature__content-canvas"
        :width="canvasState.canvasWidth"
        :height="canvasState.canvasHeight"
        :canvas-id="canvasId"
        :id="canvasId"
        :disable-scroll="disableScroll"
        @touchstart="startDrawing"
        @touchend="stopDrawing"
        @touchmove="draw"
        type="2d"
      />
      <!-- #endif  -->
      <!-- #ifndef MP-WEIXIN -->
      <canvas
        class="wui-signature__content-canvas"
        :canvas-id="canvasId"
        :width="canvasState.canvasWidth"
        :height="canvasState.canvasHeight"
        :id="canvasId"
        :disable-scroll="disableScroll"
        @touchstart="startDrawing"
        @touchend="stopDrawing"
        @touchmove="draw"
      />
      <!-- #endif  -->
    </view>
    <view class="wui-signature__footer" v-if="showFooter">
      <slot name="footer" :clear="clear" :confirm="confirmSignature">
        <wui-button size="small" plain @click="clear">{{ clearText || translate('clearText') }}</wui-button>
        <wui-button size="small" @click="confirmSignature">{{ confirmText || translate('confirmText') }}</wui-button>
      </slot>
    </view>
    <wui-toast selector="wui-signature" />
  </view>
  <canvas style="position: fixed; left: 9999px; bottom: 9999px" canvas-id="canvasRotateId"></canvas>
</template>

<script lang="ts">
export default {
  name: 'wui-signature',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>
<script lang="ts" setup>
import { computed, getCurrentInstance, onBeforeMount, onMounted, reactive, ref, watch, type CSSProperties } from 'vue'
import { addUnit, getRect, isDef, objToStyle, uuid } from '../common/util'
import { signatureProps, type SignatureExpose, type SignatureResult, type SignBoardLine } from './types'
import wuiToast from '../wui-toast/wui-toast.vue'
import { useTranslate } from '../composables/useTranslate'
// #ifdef MP-WEIXIN
import { canvas2dAdapter } from '../common/canvasHelper'
// #endif
import { useToast } from '../wui-toast'
const toast = useToast('wui-signature')
const props = defineProps(signatureProps)
const emit = defineEmits(['start', 'end', 'signing', 'confirm', 'clear'])
const { translate } = useTranslate('signature')
const { proxy } = getCurrentInstance() as any
const canvasId = ref<string>(`signature${uuid()}`) // canvas 组件的唯一标识符
let canvas: null = null //canvas对象 微信小程序生成图片必须传入
const drawing = ref<boolean>(false) // 是否正在绘制
const pixelRatio = ref<number>(1) // 像素比
const canvasState = reactive({
  canvasWidth: 0,
  canvasHeight: 0,
  ctx: null as UniApp.CanvasContext | null // canvas上下文
})

watch(
  () => props.penColor,
  () => {
    setLine()
  }
)

watch(
  () => props.lineWidth,
  () => {
    setLine()
  }
)

const canvasStyle = computed(() => {
  const style: CSSProperties = {}
  if (isDef(props.width)) {
    style.width = addUnit(props.width)
  }

  if (isDef(props.height)) {
    style.height = addUnit(props.height)
  }

  return `${objToStyle(style)};`
})

const disableScroll = computed(() => props.disableScroll)
// 线条集合
let lines: SignBoardLine[] = []

/* 开始画线 */
const startDrawing = (e: TouchEvent) => {
  e.preventDefault()
  drawing.value = true
  setLine()
  emit('start', e)
  draw(e)
}

/* 结束画线 */
const stopDrawing = (e: TouchEvent) => {
  e.preventDefault()
  drawing.value = false
  const { ctx } = canvasState
  if (ctx) {
    ctx.beginPath()
    ctx.draw(true)
    const touches = e.changedTouches[0] as any
    const point: { x: number; y: number } = {
      x: touches.x,
      y: touches.y
    }

    // 一笔结束，保存笔迹的坐标点，清空，当前笔迹
    lines.unshift({
      x: point.x,
      y: point.y,
      r: 0,
      time: Date.now()
    })
  }
  emit('end', e)
}

// 初始化 canvas
const initCanvas = () => {
  getContext().then(() => {
    const { ctx } = canvasState
    if (ctx && isDef(props.backgroundColor)) {
      ctx.fillStyle = props.backgroundColor
      ctx.fillRect(0, 0, canvasState.canvasWidth, canvasState.canvasHeight)
      ctx.draw()
      lines = []
    }
  })
}

// 清空 canvas
const clear = () => {
  const { canvasWidth, canvasHeight, ctx } = canvasState
  if (ctx) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    if (isDef(props.backgroundColor)) {
      ctx.fillStyle = props.backgroundColor
      ctx.fillRect(0, 0, canvasWidth, canvasHeight)
    }
    ctx.draw()
    lines = []
  }
  emit('clear')
}

// 确认签名
const confirmSignature = () => {
  canvasToImage()
}

//canvas划线
const draw = (e: any) => {
  e.preventDefault()
  const { ctx } = canvasState

  if (!drawing.value || props.disabled || !ctx) return
  const { x, y } = e.touches[0]
  ctx.lineTo(x, y)
  ctx.stroke()
  ctx.draw(true) //是否记住上一次画线
  ctx.moveTo(x, y)
  emit('signing', e)
}

onMounted(() => {
  initCanvas()
})

onBeforeMount(() => {
  // #ifdef MP
  pixelRatio.value = uni.getSystemInfoSync().pixelRatio
  // #endif
})

/**
 * 获取canvas上下文
 */
function getContext() {
  return new Promise<UniApp.CanvasContext>((resolve) => {
    const { ctx } = canvasState

    if (ctx) {
      return resolve(ctx)
    }
    setTimeout(() => {
      // #ifndef MP-WEIXIN
      getRect(`#${canvasId.value}`, false, proxy).then((canvasRect) => {
        setcanvasState(canvasRect.width!, canvasRect.height!)
        canvasState.ctx = uni.createCanvasContext(canvasId.value, proxy)
        if (canvasState.ctx) {
          canvasState.ctx.scale(pixelRatio.value, pixelRatio.value)
        }
        resolve(canvasState.ctx)
      })
      // #endif
      // #ifdef MP-WEIXIN
      getRect(`#${canvasId.value}`, false, proxy, true).then((canvasRect: any) => {
        if (canvasRect && canvasRect.node) {
          const canvasInstance = canvasRect.node
          canvasState.ctx = canvas2dAdapter(canvasInstance.getContext('2d') as CanvasRenderingContext2D)
          canvasInstance.width = canvasRect.width * pixelRatio.value
          canvasInstance.height = canvasRect.height * pixelRatio.value
          canvasState.ctx.scale(pixelRatio.value, pixelRatio.value)
          canvas = canvasInstance
          setcanvasState(canvasRect.width, canvasRect.height)
          resolve(canvasState.ctx)
        }
      })
      // #endif
    }, 500)
  })
}

/**
 * 设置 canvasState
 */
function setcanvasState(width: number, height: number) {
  canvasState.canvasHeight = height * pixelRatio.value
  canvasState.canvasWidth = width * pixelRatio.value
}

/* 设置线段 */
function setLine() {
  const { ctx } = canvasState
  if (ctx) {
    ctx.setLineWidth(props.lineWidth)
    ctx.setStrokeStyle(props.penColor)
    ctx.setLineJoin('round')
    ctx.setLineCap('round')
  }
}

/**
 *  canvas 绘制图片输出成文件类型
 */
function canvasToImage() {
  const { fileType, quality, exportScale } = props
  const { canvasWidth, canvasHeight, ctx } = canvasState
  if (!lines.length || !ctx) {
    toast.show({
      msg: props.promptText || translate('promptText')
    })
    return
  }
  uni.canvasToTempFilePath(
    {
      width: canvasWidth * exportScale,
      height: canvasHeight * exportScale,
      destWidth: canvasWidth * exportScale,
      destHeight: canvasHeight * exportScale,
      fileType,
      quality,
      canvasId: canvasId.value,
      canvas: canvas,
      success: (res: any) => {
        if (props.isRotate) {
          generateRotateImage(res.tempFilePath)
        } else {
          const result: SignatureResult = {
            tempFilePath: res.tempFilePath,
            width: (canvasWidth * exportScale) / pixelRatio.value,
            height: (canvasHeight * exportScale) / pixelRatio.value,
            success: true
          }
          // #ifdef MP-DINGTALK
          result.tempFilePath = (res as any).filePath
          // #endif
          emit('confirm', result)
        }
      },
      fail: () => {
        const result: SignatureResult = {
          tempFilePath: '',
          width: (canvasWidth * exportScale) / pixelRatio.value,
          height: (canvasHeight * exportScale) / pixelRatio.value,
          success: false
        }
        emit('confirm', result)
      }
    },
    proxy
  )
}
function generateRotateImage(tempFilePaths: any) {
  uni.getImageInfo({
    src: tempFilePaths,
    success: (res1) => {
      console.log(res1)
      let canvasContext = uni.createCanvasContext('canvasRotateId', proxy)
      let rate = res1.height / res1.width
      let width = 300 / rate
      let height = 300
      canvasContext.translate(height / 2, width / 2)
      canvasContext.rotate((270 * Math.PI) / 180)
      canvasContext.drawImage(res1.path, -width / 2, -height / 2, width, height)
      canvasContext.draw(false, (data) => {
        uni.canvasToTempFilePath(
          {
            canvasId: 'canvasRotateId',
            fileType: 'png',
            quality: 1,
            success(res2) {
              console.log(res2)
              const result: SignatureResult = {
                tempFilePath: res2.tempFilePath,
                width: (width * props.exportScale) / pixelRatio.value,
                height: (height * props.exportScale) / pixelRatio.value,
                success: true
              }
              // #ifdef MP-DINGTALK
              result.tempFilePath = (res2 as any).filePath
              // #endif
              emit('confirm', result)
            }
          },
          proxy
        )
      })
    }
  })
}
defineExpose<SignatureExpose>({
  clear,
  confirm: confirmSignature
})
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
