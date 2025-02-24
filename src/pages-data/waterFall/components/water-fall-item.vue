<script lang="ts" setup>
defineProps({
  /**
   * @description 图片地址
   */
  url: String,
})
</script>

// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif

<template>
  <view class="water-fall-item">
    <wui-img width="100%" height="100%" lazyLoad :src="url" mode="widthFix"></wui-img>
  </view>
</template>

<style lang="scss" scoped>
.water-fall-item {
  width: calc(100% - 20rpx);
  margin: 10rpx;
  border-top: solid transparent;
}
</style>