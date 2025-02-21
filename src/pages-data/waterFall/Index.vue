<template>
  <page-wraper>
    <demo-block title="普通模式瀑布流">
      <view class="wui-waterfall__txt">普通模式下的瀑布流是将数据通过简单的计算，将单数的数据放在左边，双数的数据放在右边</view>
      <wui-button block @click="navNormalWaterFallPage">普通瀑布流</wui-button>
    </demo-block>
    <demo-block title="计算模式瀑布流">
      <view class="wui-waterfall__txt">
        计算模式下的瀑布流是将数据一一填入待渲染的左右两个队列中，然后读取左右两列的高度，将下一个数据放到高度较小的一列中
      </view>
      <wui-button block @click="navCalcWaterFallPage">计算瀑布流</wui-button>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
const navNormalWaterFallPage = () => {
  uni.navigateTo({
    url: '/pages-data/waterFall/normal-waterfall'
  })
}
const navCalcWaterFallPage = () => {
  uni.navigateTo({
    url: '/pages-data/waterFall/calc-waterfall'
  })
}
</script>
<style lang="scss" scoped>
.wui-waterfall__txt {
  font-size: 26rpx;
  color: #999999;
  margin-bottom: 20rpx;
}
</style>
