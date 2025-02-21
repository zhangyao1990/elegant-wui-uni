<template>
  <page-wraper>
    <view class="wrapper">
      <demo-block custom-class="pop" title="基本使用">
        <wui-scroll-list>
          <view>
            <view class="scroll-list-box">
              <template v-for="(item, index) in 14" :key="index">
                <view class="scroll-list-box__item">
                  <view class="scroll-list-box__content">
                    <view class="scroll-list-box__icon wui-shadow-blur" :class="[getRandomCoolBgClass(index)]">
                      <wui-icon name="github-filled" size="22px"></wui-icon>
                    </view>
                    <view class="scroll-list-box__text">
                      <text class="wui-text-ellipsis">汪汪队{{ item }}</text>
                    </view>
                  </view>
                </view>
              </template>
            </view>
            <view class="scroll-list-box">
              <template v-for="(item, index) in 14" :key="index">
                <view class="scroll-list-box__item">
                  <view class="scroll-list-box__content">
                    <view class="scroll-list-box__icon wui-shadow-blur" :class="[getRandomCoolBgClass(index)]">
                      <wui-icon name="github-filled" size="22px"></wui-icon>
                    </view>
                    <view class="scroll-list-box__text">
                      <text class="wui-text-ellipsis">汪汪队{{ item }}</text>
                    </view>
                  </view>
                </view>
              </template>
            </view>
          </view>
        </wui-scroll-list>
      </demo-block>
      <demo-block custom-class="pop" title="隐藏指示器">
        <wui-scroll-list :indicator="false">
          <view class="scroll-list-box">
            <template v-for="(item, index) in 14" :key="index">
              <view class="scroll-list-box__item">
                <view class="scroll-list-box__content">
                  <view class="scroll-list-box__icon wui-shadow-blur" :class="[getRandomCoolBgClass(index)]">
                    <wui-icon name="github-filled" size="22px"></wui-icon>
                  </view>
                  <view class="scroll-list-box__text">
                    <text class="wui-text-ellipsis">汪汪队{{ item }}</text>
                  </view>
                </view>
              </view>
            </template>
          </view>
        </wui-scroll-list>
      </demo-block>
      <demo-block custom-class="pop" title="自定义指示器样式">
        <wui-scroll-list :indicator-width="100" :indicator-bar-width="30" indicator-color="#D6F4FA" indicator-active-color="#27A1BA">
          <view class="scroll-list-box">
            <template v-for="(item, index) in 14" :key="index">
              <view class="scroll-list-box__item">
                <view class="scroll-list-box__content">
                  <view class="scroll-list-box__icon wui-shadow-blur" :class="[getRandomCoolBgClass(index)]">
                    <wui-icon name="github-filled" size="22px"></wui-icon>
                  </view>
                  <view class="scroll-list-box__text">
                    <text class="wui-text-ellipsis">汪汪队{{ item }}</text>
                  </view>
                </view>
              </view>
            </template>
          </view>
        </wui-scroll-list>
      </demo-block>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
/**
 * 随机获取酷炫背景对应的类
 */
function getRandomCoolBgClass(idx?: number) {
  const COOL_BG_COLOR_COUNT = 16
  const index = Math.random() * COOL_BG_COLOR_COUNT + 1
  return 'wui-cool-bg-color-' + Math.floor(index)
}
</script>
<style lang="scss" scoped>
.scroll-list-box {
  display: flex;
  margin: 0 20rpx;
  &__item {
    flex: 1;
    padding: 20rpx;
    margin: 10rpx;
    border-radius: 6rpx;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__icon {
    width: 100rpx;
    height: 100rpx;
    font-size: 60rpx;
    border-radius: 25%;
    margin-bottom: 18rpx;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      content: ' ';
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      left: 0;
      bottom: 0;
      border-radius: inherit;
      opacity: 1;
      transform: scale(1, 1);
      background-size: 100% 100%;
      background-image: url(https://isdm-public.oss-cn-hangzhou.aliyuncs.com/image/wui-icon_bg6.png);
    }
  }
  &__text {
    color: #000000;
    text-align: center;
    font-size: 30rpx;
    font-weight: 500;
  }
}
.wui-text-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.wui-shadow-blur {
  position: relative;
}
.wui-shadow-blur::before {
  content: ' ';
  display: block;
  background: inherit;
  -webkit-filter: blur(5px);
  filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 5px;
  left: 5px;
  z-index: -1;
  opacity: 0.4;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  border-radius: inherit;
  -webkit-transform: scale(1, 1);
  transform: scale(1, 1);
}
</style>
