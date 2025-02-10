<template>
  <view :class="`wui-navbar-capsule ${customClass}`" :style="customStyle">
    <wui-icon @click="handleBack" name="chevron-left" custom-class="wui-navbar-capsule__icon" />
    <wui-icon @click="handleBackHome" name="home" custom-class="wui-navbar-capsule__icon" />
  </view>
</template>
<script lang="ts">
export default {
  name: 'wui-navbar-capsule',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wuiIcon from '../wui-icon/wui-icon.vue'
import { navbarCapsuleProps } from './types'
const emit = defineEmits(['back', 'back-home'])
defineProps(navbarCapsuleProps)
function handleBack() {
  emit('back')
}
function handleBackHome() {
  emit('back-home')
}
</script>

<style lang="scss">
@import './index.scss';
</style>
