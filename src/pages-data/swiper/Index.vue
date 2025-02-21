<template>
  <page-wraper>
    <demo-block title="点状指示器">
      <wui-swiper
        :list="swiperList"
        autoplay
        v-model:current="current"
        :indicator="{ type: 'dots' }"
        @click="handleClick"
        @change="onChange"
      ></wui-swiper>
    </demo-block>

    <demo-block title="点条状指示器">
      <wui-swiper
        :list="swiperList"
        autoplay
        v-model:current="current1"
        :indicator="{ type: 'dots-bar' }"
        @click="handleClick"
        @change="onChange"
      ></wui-swiper>
    </demo-block>

    <demo-block title="数字指示器">
      <wui-swiper
        :list="swiperList"
        autoplay
        v-model:current="current2"
        :indicator="{ type: 'fraction' }"
        indicator-position="bottom-right"
        @click="handleClick"
        @change="onChange"
      ></wui-swiper>
    </demo-block>

    <!-- #ifdef MP-WEIXIN || H5 || MP-DINGTALK -->
    <demo-block title="视频轮播">
      <wui-swiper
        :list="videoList"
        autoplay
        :indicator="{ type: 'fraction' }"
        indicator-position="top-right"
        @click="handleClick"
        @change="onChange"
      ></wui-swiper>
    </demo-block>

    <demo-block title="手动播放视频">
      <wui-swiper
        :list="videoList"
        autoplay
        :autoplayVideo="false"
        :indicator="{ type: 'fraction' }"
        indicator-position="top-right"
        @click="handleClick"
        @change="onChange"
      ></wui-swiper>
    </demo-block>

    <demo-block title="播放视频时停止轮播">
      <wui-swiper
        :list="videoList"
        autoplay
        stopAutoplayWhenVideoPlay
        :autoplayVideo="false"
        :indicator="{ type: 'fraction' }"
        indicator-position="top-right"
        @click="handleClick"
        @change="onChange"
      ></wui-swiper>
    </demo-block>
    <!-- #endif -->

    <demo-block title="手动切换">
      <wui-swiper
        :list="swiperList"
        :autoplay="false"
        v-model:current="current3"
        :indicator="{ showControls: true }"
        :loop="false"
        @click="handleClick"
        @change="onChange"
      ></wui-swiper>
    </demo-block>

    <demo-block title="卡片样式">
      <view class="card-swiper">
        <wui-swiper
          autoplay
          v-model:current="current4"
          custom-indicator-class="custom-indicator-class"
          custom-image-class="custom-image"
          custom-next-image-class="custom-image-prev"
          custom-prev-image-class="custom-image-prev"
          :indicator="{ type: 'dots' }"
          :list="swiperList"
          previousMargin="24px"
          nextMargin="24px"
        ></wui-swiper>
      </view>
    </demo-block>

    <demo-block title="同时展示2个滑块">
      <view class="card-swiper">
        <wui-swiper
          autoplay
          v-model:current="current5"
          :display-multiple-items="2"
          custom-indicator-class="custom-indicator-class"
          custom-image-class="custom-image"
          custom-next-image-class="custom-image-prev"
          custom-prev-image-class="custom-image-prev"
          :indicator="{ type: 'dots' }"
          :list="swiperList"
          previousMargin="24px"
          nextMargin="24px"
        ></wui-swiper>
      </view>
    </demo-block>

    <demo-block title="垂直方向">
      <wui-swiper
        :list="swiperList"
        direction="vertical"
        indicator-position="right"
        autoplay
        v-model:current="current6"
        :indicator="{ type: 'dots-bar' }"
        @click="handleClick"
        @change="onChange"
      ></wui-swiper>
    </demo-block>

    <demo-block title="自定义指示器">
      <wui-swiper
        :list="swiperList"
        direction="vertical"
        indicator-position="right"
        autoplay
        v-model:current="current7"
        @click="handleClick"
        @change="onChange"
      >
        <template #indicator="{ current, total }">
          <view class="custom-indicator" style="position: absolute; bottom: 24rpx; right: 24rpx">{{ current + 1 }}/{{ total }}</view>
        </template>
      </wui-swiper>
    </demo-block>

    <demo-block title="指定valueKey和textKey">
      <wui-swiper
        value-key="url"
        text-key="title"
        :list="customSwiperList"
        autoplay
        v-model:current="current9"
        @click="handleClick"
        @change="onChange"
      ></wui-swiper>
    </demo-block>

    <demo-block title="属性控制切换">
      <wui-swiper :loop="isLoop" :autoplay="false" :list="swiperList" v-model:current="current8" />
      <wui-gap />
      <wui-cell-group>
        <wui-cell title="loop">
          <wui-switch v-model="isLoop" size="24px" />
        </wui-cell>
        <wui-cell title="current" :value="current8.toString()" />
      </wui-cell-group>
      <view style="display: flex; justify-content: space-between">
        <wui-button @click="current8--">prev</wui-button>

        <wui-button type="success" @click="current8++">next</wui-button>
      </view>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const swiperList = ref([
  'https://cdn.pixabay.com/photo/2014/10/10/10/49/forest-483207_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681_640.jpg',
  'https://cdn.pixabay.com/photo/2020/09/22/11/36/moss-5592802_640.jpg',
  'https://cdn.pixabay.com/photo/2016/08/11/23/55/trees-1587301_640.jpg',
  'https://cdn.pixabay.com/photo/2017/03/29/11/48/meadow-2184989_640.jpg'
])

const customSwiperList = ref([
  { url: 'https://cdn.pixabay.com/photo/2016/11/18/12/41/autumn-1834228_640.jpg', title: '小熊猫！' },
  { url: 'https://cdn.pixabay.com/photo/2012/11/29/14/35/florida-67897_640.jpg', title: '卡！皮！巴！拉！' },
  { url: 'https://cdn.pixabay.com/photo/2015/11/12/21/27/fern-1041021_640.jpg', title: '大熊猫！' },
  { url: 'https://cdn.pixabay.com/photo/2020/11/13/20/10/forest-5739807_640.jpg', title: '诗画中国！' }
])

const videoList = ref([
  'https://standard-hospital-xnykd.oss-cn-hangzhou.aliyuncs.com/sys/video/1735897454073_.mp4',
  'https://standard-hospital-xnykd.oss-cn-hangzhou.aliyuncs.com/sys/video/1735897475859_.mp4',
  'https://standard-hospital-xnykd.oss-cn-hangzhou.aliyuncs.com/sys/video/1735897494353_.mp4',
  'https://cdn.pixabay.com/photo/2016/04/23/21/51/fern-1348353_640.jpg'
])

const current = ref<number>(0)
const current1 = ref<number>(1)
const current2 = ref<number>(2)
const current3 = ref<number>(3)
const current4 = ref<number>(4)
const current5 = ref<number>(0)
const current6 = ref<number>(0)
const current7 = ref<number>(0)
const current8 = ref<number>(0)
const current9 = ref<number>(0)

const isLoop = ref(false)

function handleClick(e: any) {
  console.log(e)
}
function onChange(e: any) {
  console.log(e)
}
</script>
<style lang="scss" scoped>
.card-swiper {
  --wui-swiper-radius: 0;
  --wui-swiper-item-padding: 0 24rpx;
  --wui-swiper-nav-dot-color: #e7e7e7;
  --wui-swiper-nav-dot-active-color: #4d80f0;
  padding-bottom: 24rpx;
  :deep(.custom-indicator-class) {
    bottom: -16px;
  }
  :deep(.custom-image) {
    border-radius: 12rpx;
  }
  :deep(.custom-image-prev) {
    height: 168px !important;
  }
}

.custom-slot-image {
  width: 100%;
  height: 100%;
}

.custom-indicator {
  padding: 0 12rpx;
  height: 48rpx;
  line-height: 48rpx;
  border-radius: 45%;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-size: 24rpx;
}
</style>
