<template>
  <page-wraper class="content-box">
    <demo-block title="左下方" transparent>
      <wui-cell-group border>
        <wui-cell title="点击加号加入购物车" center>
          <view class="cubic-bezier-right">
            <wui-cubic-bezier :navbar="false" :left="left" :bottom="bottom" :param="0" @click="handleClick">
              <wui-icon name="add-circle" size="22px"></wui-icon>
              <template v-slot:badge>
                <view class="wui-badge">1</view>
              </template>
            </wui-cubic-bezier>
          </view>
        </wui-cell>
        <wui-cell title="点击加号加入购物车" center>
          <view class="cubic-bezier-right">
            <wui-cubic-bezier :navbar="false" :left="left" :bottom="bottom" :param="0" @click="handleClick">
              <wui-icon name="add-circle" size="22px"></wui-icon>
              <template v-slot:badge>
                <view class="wui-badge">1</view>
              </template>
            </wui-cubic-bezier>
          </view>
        </wui-cell>
        <wui-cell>
          <template #title>
            <view class="cubic-bezier-left">
              <wui-cubic-bezier :navbar="false" :left="left" :bottom="bottom" :param="1" @click="handleClick">
                <wui-icon name="add-circle" size="22px"></wui-icon>
                <template v-slot:badge>
                  <view class="wui-badge">1</view>
                </template>
              </wui-cubic-bezier>
            </view>
          </template>
          <view>点击加号加入购物车</view>
        </wui-cell>
      </wui-cell-group>
    </demo-block>
    <demo-block title="右下方" transparent>
      <wui-cell-group border>
        <wui-cell title="点击加号加入购物车" center>
          <view class="cubic-bezier-right">
            <wui-cubic-bezier direction="rb" :navbar="false" :right="right" :bottom="bottom" :param="0" @click="handleClick">
              <wui-icon name="add-circle" size="22px"></wui-icon>
              <template v-slot:badge>
                <view class="wui-badge">1</view>
              </template>
            </wui-cubic-bezier>
          </view>
        </wui-cell>
        <wui-cell title="点击加号加入购物车" center>
          <view class="cubic-bezier-right">
            <wui-cubic-bezier direction="rb" :right="right" :bottom="bottom" :param="0" @click="handleClick">
              <wui-icon name="add-circle" size="22px"></wui-icon>
              <template v-slot:badge>
                <view class="wui-badge">1</view>
              </template>
            </wui-cubic-bezier>
          </view>
        </wui-cell>
        <wui-cell>
          <template #title>
            <view class="cubic-bezier-left">
              <wui-cubic-bezier direction="rb" :right="right" :bottom="bottom" :param="1" @click="handleClick">
                <wui-icon name="add-circle" size="22px"></wui-icon>
                <template v-slot:badge>
                  <view class="wui-badge">1</view>
                </template>
              </wui-cubic-bezier>
            </view>
          </template>
          <view>点击加号加入购物车</view>
        </wui-cell>
      </wui-cell-group>
    </demo-block>
    <view class="wui-cart--box">
      <wui-icon name="cart" size="28px"></wui-icon>
    </view>
    <view class="wui-cart--box wui-cart--right">
      <wui-icon name="cart" size="28px"></wui-icon>
    </view>
  </page-wraper>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const left = ref<any>(116)
const right = ref<any>(100)
const bottom = ref<any>(140)
const handleClick = (e: any) => {
  console.log(e)
  console.log(e)
}
</script>
<style lang="scss">
.content-box {
  padding: 0 30rpx;
}
.cubic-bezier-left {
  display: flex;
  justify-content: flex-start;
}
.cubic-bezier-right {
  display: flex;
  justify-content: flex-end;
}
.wui-cart--box {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 40rpx;
  bottom: 80rpx;
  box-shadow: 0 10rpx 14rpx 0 rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.wui-cart--right {
  left: auto;
  right: 40rpx;
}

.wui-badge {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff2b2b;
  color: #fff;
  font-size: 12px;
}

.wui-badge--logo {
  width: 18px;
  height: 18px;
}
</style>
