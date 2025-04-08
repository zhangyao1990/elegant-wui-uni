<template>
	<view
		class="wui-gallery__wrap"
		:style="{ zIndex: zIndex }"
		:class="[show ? 'wui-gallery__show' : 'wui-gallery__hidden']"
		v-if="show || !isNvue"
		@tap.stop="hideGallery"
	>
		<swiper
			class="wui-gallery__img-wrap"
			:indicator-dots="false"
			@change="change"
			:current="defActive"
			:autoplay="false"
			:duration="50"
		>
			<swiper-item class="wui-gallery__swiper-item" v-for="(item, index) in imgUrls" :key="index">
				<image mode="aspectFit" class="wui-gallery__img" :src="item.src"></image>
			</swiper-item>
		</swiper>
		<view class="wui-gallery__index-wrap" :style="{ top: top + 'px' }">
			<text class="wui-gallery__index">{{ active + 1 }}/{{ imgUrls.length }}</text>
		</view>
		<view class="wui-gallery__descr-wrap" :class="{ 'wui-gallery__weex-safe': iphoneX && safeArea }" v-if="descr">
			<text class="wui-gallery__descr" :class="{ 'wui-gallery__text-ellipsis': ellipsis }" v-if="descr">{{ descr }}</text>
		</view>
	</view>
</template>
<script lang="ts">
export default {
  name: 'wui-gallery',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>
<script setup lang="ts">
import {  galleryProps} from './type'
import { onMounted, watch, ref } from 'vue'
const props = defineProps(galleryProps)
const emits = defineEmits(['change', 'hide'])

const isNvue = ref<boolean>(false)
const imgUrls = ref<any>([])
const active = ref<any>(0)
const defActive = ref<any>(0)
const top = ref<any>(20)
const descr = ref<any>('')
const iphoneX = ref<boolean>(false)

onMounted(()=>{
  // #ifdef APP-NVUE
  isNvue.value = true
  // #endif
  let sys = uni.getSystemInfoSync()
  top.value = sys.statusBarHeight + 20
  // #ifdef APP-NVUE || MP-TOUTIAO
  iphoneX.value = isPhoneX(sys)
  // #endif
  defActive.value = Number(props.current)
  active.value = defActive.value
  initData(props.urls)
  getDescr(active.value)
})

watch(()=>props.urls,(newVal)=>{
  initData(newVal)
})
watch(()=>props.current,(newVal)=>{
  defActive.value = active.value
  let val = Number(newVal)
  setTimeout(() => {
    defActive.value = val
    active.value = val
  }, 20)
})
function initData(vals: any) {
  if (vals && vals.length > 0) {
    if (typeof vals[0] === 'string') {
      vals = vals.map(item => {
        return {
          src: item
        }
      })
    }
    imgUrls.value = vals
  }
}
function getDescr(index: any) {
  let item = imgUrls.value[index]
  if (item) {
    descr.value = item.descr || ''
  }
}
function change(e:any) {
  active.value = e.detail.current
  getDescr(active.value)
  emits('change', {
    index: active.value
  })
}
function hideGallery() {
  emits('hide', {})
}
// #ifdef APP-NVUE || MP-TOUTIAO
function isPhoneX(res:any) {
  if (!props.safeArea) return false
  let iphonex = false
  let models = [
    'iphonex',
    'iphonexr',
    'iphonexsmax',
    'iphone11',
    'iphone11pro',
    'iphone11promax',
    'iphone12',
    'iphone12mini',
    'iphone12pro',
    'iphone12promax',
    'iphone13',
    'iphone13mini',
    'iphone13pro',
    'iphone13promax',
    'iphone14',
    'iphone14mini',
    'iphone14pro',
    'iphone14promax'
  ]
  const model = res.model.replace(/\s/g, '').toLowerCase()
  const newModel = model.split('<')[0]
  if (models.includes(model) || models.includes(newModel) || (res.safeAreaInsets && res.safeAreaInsets.bottom > 0)) {
    iphonex = true
  }
  return iphonex
}
// #endif
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
