<template>
  <page-wraper>
    <demo-block title="基础用法">
      <view class="signature-h">
        <wui-signature @confirm="confirm" @clear="clear" :export-scale="2" />
      </view>
      <wui-img style="margin-top: 10rpx" v-if="img.tempFilePath" mode="widthFix" width="100%" :src="img.tempFilePath" />
    </demo-block>
    <demo-block title="自定义画笔颜色">
      <view class="signature-h">
        <wui-signature pen-color="red" />
      </view>
    </demo-block>
    <demo-block title="自定义画笔宽度">
      <view class="signature-h">
        <wui-signature :line-width="6" />
      </view>
    </demo-block>
    <demo-block title="自定义背景颜色">
      <view class="signature-h">
        <wui-signature />
      </view>
    </demo-block>
    <demo-block title="自定义插槽">
      <view class="signature-h">
        <wui-signature :disabled="disabled" @confirm="handleSignConfirm">
          <template #footer="{ clear, confirm }">
            <wui-button block @click="changeDisabled" v-if="disabled">开始签名</wui-button>
            <wui-button v-if="!disabled" size="small" plain @click="clear">清除</wui-button>
            <wui-button v-if="!disabled" size="small" style="margin-left: 4px" @click="confirm">确认</wui-button>
          </template>
        </wui-signature>
      </view>
    </demo-block>
    <demo-block title="横屏">
      <wui-button block @click="handleShowSign">开始签名</wui-button>
    </demo-block>
  </page-wraper>
  <wui-popup v-model="showSign" :zIndex="9999" lock-scroll custom-style="width:100%; height: 100%;" @close="handleSignClose">
    <view class="wui-sign-board">
      <view class="wui-sign-board__content">
        <wui-signature
          ref="signRef"
          v-if="showSign"
          :showFooter="false"
          :isRotate="true"
          :pen-color="currentSelectColor"
          @confirm="handleSignConfirm"
          :line-width="6"
        ></wui-signature>
      </view>
      <view class="wui-sign-board__tools">
        <view class="wui-sign-board__tools__color">
          <view
            v-for="(item, index) in signSelectColor"
            :key="index"
            class="wui-sign-board__tools__color__item"
            :class="[{ 'wui-sign-board__tools__color__item--active': currentSelectColor === item }]"
            :style="{ backgroundColor: item }"
            @tap="colorSwitch(item)"
          ></view>
        </view>
        <view class="wui-sign-board__tools__button">
          <view class="wui-sign-board__tools__button__item">
            <wui-button type="error" size="small" @click="handleClear">清除</wui-button>
          </view>
          <view class="wui-sign-board__tools__button__item">
            <wui-button size="small" @click="handleConfirm">保存</wui-button>
          </view>
          <view class="wui-sign-board__tools__button__item">
            <wui-button type="warning" size="small" @click="handleSignClose">关闭</wui-button>
          </view>
        </view>
      </view>
    </view>
  </wui-popup>
</template>
<script lang="ts" setup>
import type { SignatureResult } from '@/uni_modules/elegant-wui-uni/components/wui-signature/types'
import { ref } from 'vue'
const img = ref<Partial<SignatureResult>>({})
const disabled = ref(true)
function confirm(result: SignatureResult) {
  img.value = result
}
function clear() {
  img.value = {}
}
function changeDisabled() {
  disabled.value = false
}
const showSign = ref(false)
const signSelectColor = ref(['#080808', '#E83A30'])
const currentSelectColor = ref(signSelectColor.value[0])
function handleShowSign() {
  showSign.value = true
}
const signRef = ref()
const handleClear = () => {
  signRef.value.clear()
}
const handleConfirm = () => {
  signRef.value.confirm()
}
function handleSignClose() {
  showSign.value = false
  img.value = {}
}
function handleSignConfirm(result: SignatureResult) {
  console.log('handleSignConfirm', result)
  showSign.value = false
  img.value = result
  // 也可以转换成在线地址
  //   ...
}
// 切换画笔颜色
function colorSwitch(color: string) {
  currentSelectColor.value = color
}
</script>
<style lang="scss" scoped>
.signature-h {
  height: 300rpx;
}
.wui-sign-board {
  display: flex;
  flex-direction: row-reverse;
  height: calc(100% - 44px);
  &__content {
    width: 83%;
    height: 100%;
    margin: 20rpx 10rpx;
  }

  &__tools {
    width: 17%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20rpx 0;
    &__color {
      margin-top: 30rpx;
      &__item {
        width: 70rpx;
        height: 70rpx;
        border-radius: 100rpx;
        margin: 20rpx auto;

        &--active {
          position: relative;

          &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 40%;
            height: 40%;
            border-radius: 100rpx;
            background-color: #ffffff;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
    &__button {
      margin-bottom: 30rpx;
      display: flex;
      flex-direction: column;

      &__item {
        width: 150rpx;
        height: 60rpx;
        line-height: 60rpx;
        text-align: center;
        margin: 50rpx auto;
        color: #ffffff;
        transform-origin: center center;
        transform: rotateZ(90deg);
        :deep(.wui-button) {
          width: 100%;
        }
      }
    }
  }
}
</style>
