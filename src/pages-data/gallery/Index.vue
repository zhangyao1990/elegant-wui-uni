<template>
  <page-wraper>
    <demo-block title="基本用法">
      <view class="gallery-img-box">
        <template v-for="(item,index) in urls" :key="index">
          <image @click="showGallery(index)" class="gallery-img" :src="item" />
        </template>
      </view>

    </demo-block>
    <wui-gallery :urls="urls" :show="show" :current="current" @hide="hideGallery"></wui-gallery>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const show = ref<any>(false)

const urls = ref([
  'https://gips3.baidu.com/it/u=1821127123,1149655687&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280',
  'https://gips0.baidu.com/it/u=1490237218,4115737545&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720',
  'https://gips1.baidu.com/it/u=1647344915,1746921568&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280'
])

const current = ref(0)
function showGallery(index:any) {
  current.value = index
  show.value = true
}
function hideGallery() {
  show.value = false
}
</script>
<style lang="scss" scoped>
:deep(.page-wraper) {
  .wui-button {
    margin: 0 10px 10px 0;
  }
}
.gallery-img-box {
  display: flex;
  flex-wrap: wrap;
  gap: 10rpx;
}
.gallery-img {
  width: 225rpx;
  height: 225rpx;
  border-radius: 10rpx;
}
</style>
