<template>
  <wui-config-provider :theme="theme" :theme-vars="isRed ? themeVars : {}">
    <view class="page-wraper" @click="closeOutside">
      <wui-cell title="切换暗黑" title-width="240px" center v-if="showDarkMode">
        <wui-switch v-model="isDark" />
      </wui-cell>
      <wui-cell title="切换主题色" title-width="240px" center v-if="showDarkMode">
        <wui-switch v-model="isRed" />
      </wui-cell>
      <slot />
      <!-- #ifdef MP-WEIXIN -->
      <!-- 横幅广告和格子广告可以共存，但插屏广告展示时，不显示横幅广告和格子广告 -->
      <template v-if="useWxAd && !showWxAd3 && !isFree">
        <ad-custom v-if="showWxAd" unit-id="adunit-06191d6d3d1ddfc4"></ad-custom>
        <ad-custom
          v-if="showWxAd2"
          style="width: 120rpx; height: auto; position: fixed; right: 12rpx; top: 160rpx; z-index: 999"
          unit-id="adunit-95aad07aafad3619"
        ></ad-custom>
      </template>
      <!-- #endif -->

      <wui-gap height="0" v-if="safeAreaInsetBottom" safe-area-bottom></wui-gap>
    </view>
    <wui-notify />
    <wui-toast />
    <!-- #ifdef MP-WEIXIN -->
    <wui-fab v-model:active="fabActive" draggable type="error" :gap="{ bottom: 58 }" direction="left" v-if="enableRewardFab">
      <wui-button type="error" round @click="goToReward">
        <view style="display: flex; align-items: center">
          <wui-icon name="thumb-up" size="22px"></wui-icon>
          看视频免广告
        </view>
      </wui-button>
    </wui-fab>
    <!-- #endif -->
  </wui-config-provider>
</template>
<script lang="ts">
export default {
  name: 'page-wraper',
  options: {
    multipleSlots: true,
    styleIsolation: 'shared',
    addGlobalClass: true,
    virtualHost: true
  }
}
</script>
<script lang="ts" setup>
import { computed, ref, onMounted, nextTick } from 'vue'
import { setNotifyDefaultOptions, useQueue, type ConfigProviderThemeVars } from '@/uni_modules/elegant-wui-uni'
import { useDark } from '@/store'
import { useRewardAd } from '@/store/useRewardAd'

interface Props {
  showDarkMode?: boolean
  safeAreaInsetBottom?: boolean
  useWxAd?: boolean
  useRewardFab?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showDarkMode: false,
  safeAreaInsetBottom: true,
  useWxAd: process.env.NODE_ENV !== 'development',
  useRewardFab: false
})

const enableRewardFab = computed(() => {
  return props.useRewardFab && process.env.NODE_ENV !== 'development'
})
const { isFree } = useRewardAd()
const darkMode = useDark()
const { closeOutside } = useQueue()
const isDark = ref<boolean>(false)
const isRed = ref<boolean>(false)
// #ifdef MP-WEIXIN
const fabActive = ref<boolean>(false)
// 横幅广告和格子广告可以共存，但插屏广告展示时，不显示横幅广告和格子广告
const showWxAd = ref<boolean>(Math.random() > 0.5) // 横幅广告
const showWxAd2 = ref<boolean>(Math.random() > 0.33) // 格子广告
const showWxAd3 = ref<boolean>(Math.random() > 0.66) // 插屏广告
let interstitialAd: UniApp.InterstitialAdContext | null = null
// #endif

const themeVars: ConfigProviderThemeVars = {
  colorTheme: 'red'
}

const theme = computed(() => {
  return darkMode.isDark.value || isDark.value ? 'dark' : 'light'
})

function goToReward() {
  fabActive.value = false
  uni.navigateTo({
    url: '/pages/wxRewardAd/Index'
  })
}

onMounted(() => {
  setNotifyDefaultOptions({
    onClick: (event) => console.log('onClick', event),
    onClosed: () => console.log('onClosed'),
    onOpened: () => console.log('onOpened')
  })
  // #ifdef MP-WEIXIN
  // 微信广告
  if (uni.createInterstitialAd && showWxAd3.value && props.useWxAd && !isFree.value) {
    interstitialAd = uni.createInterstitialAd({ adUnitId: 'adunit-fc8522e2b1185c89' })
    nextTick(() => {
      interstitialAd && interstitialAd.show()
    })
  }

  if (enableRewardFab.value) {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      fabActive.value = true
    }, 500)
  }

  // #endif
})
</script>
<style lang="scss" scoped>
.wui-theme-dark {
  .page-wraper {
    background: #000;
  }
}
.page-wraper {
  min-height: calc(100vh - var(--window-top));
  box-sizing: border-box;
}
</style>
