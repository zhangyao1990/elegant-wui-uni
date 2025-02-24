<template>
  <page-wraper>
    <view class="wui-home">
      <view class="wui-home-logo">
        <image src="https://isdm-public.oss-cn-hangzhou.aliyuncs.com/image/vue-logo.png" alt="" />
      </view>
      <view class="wui-home-name">Eleagnt Wui Uni（{{ packageConfig.version }}）</view>
      <view class="wui-home-time">{{ progress }}</view>
      <view class="wui-page__desc">Eleagnt Wui Uni 是一个基于Vue3+TS开发的uni-app组件库，提供70+高质量组件，支持暗黑模式、国际化和自定义主题。</view>
    </view>
  </page-wraper>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import packageConfig from '../../../package.json'
onShow(() => {
  timeCount(() => {
    uni.reLaunch({
      url: '/pages/index/Index'
    })
  })
})
const percent = ref<number>(0)
const progress = computed(() => {
  return `${percent.value}%`
})
const timeCount = (fn: () => void) => {
  const duration = 2000
  const tick: number = 100
  const per = 100 / (duration / tick)

  const time = setInterval(() => {
    if (percent.value < 100) {
      percent.value += per
    } else {
      clearInterval(time)
      setTimeout(() => {
        fn()
      }, 200)
    }
  }, tick)
}
</script>

<style scoped lang="scss">
.wui-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100vh;
  padding-top: 25vh;
}
.wui-home-logo {
  margin-bottom: 40rpx;
  image {
    width: 200rpx;
    height: 200rpx;
    animation: bounce-top 0.9s both;
  }
}
.wui-home-name {
  width: 100%;
  text-align: center;
  font-family: DINAlternate-Bold;
  font-size: 40rpx;
  color: #333;
  font-weight: bold;
  margin-bottom: 40rpx;
  animation: text-shadow-drop-center 0.6s both;
}
.wui-home-time {
  width: 100%;
  text-align: center;
  font-size: 28rpx;
  font-family: DINAlternate-Bold;
  color: #333;
}
.wui-page__desc {
  text-align: left;
  margin-top: 20px;
  padding: 0 50rpx;
  color: #666;
  font-size: 13px;
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
@keyframes text-shadow-drop-center {
  0% {
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    text-shadow: 0 0 18px rgba(0, 0, 0, 0.35);
  }
}

@keyframes bounce-top {
  0% {
    transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
}
@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
</style>
