<template>
  <page-wraper>
    <!-- #ifdef MP-WEIXIN -->
    <wui-privacy-popup></wui-privacy-popup>
    <!-- #endif -->
    <demo-block title="基本用法" style="text-align: center">
      <wui-img-cropper
        v-model="show"
        :img-src="src"
        @confirm="handleConfirm"
        @cancel="handleCancel"
        @imgloaderror="imgLoaderror"
        @imgloaded="imgLoaded"
      ></wui-img-cropper>
      <view class="profile">
        <view v-if="!imgSrc" class="img" @click="upload">
          <wui-icon name="fill-camera" custom-class="img-icon"></wui-icon>
        </view>
        <wui-img v-if="imgSrc" round width="200px" height="200px" :src="imgSrc" mode="aspectFit" custom-class="profile-img" @click="upload" />
        <view style="font-size: 14px">点击上传头像</view>
      </view>
    </demo-block>

    <demo-block title="自定义裁剪比例" style="text-align: center">
      <view class="profile-grid">
        <view v-for="(ratio, index) in ['3:2', '16:9', '16:10']" :key="index" class="profile-item">
          <wui-img-cropper
            v-model="showCustom[index]"
            :img-src="srcCustom[index]"
            :aspect-ratio="ratio"
            @confirm="handleCustomConfirm(index, $event)"
            @cancel="handleCustomCancel"
          ></wui-img-cropper>
          <view v-if="!imgSrcCustom[index]" class="img" @click="uploadCustom(index)">
            <wui-icon name="fill-camera" custom-class="img-icon"></wui-icon>
          </view>
          <wui-img
            v-if="imgSrcCustom[index]"
            width="300px"
            :height="getHeight(ratio)"
            :src="imgSrcCustom[index]"
            mode="aspectFit"
            custom-class="profile-img"
            @click="uploadCustom(index)"
          />
          <view style="font-size: 14px">{{ ratio }} 比例裁剪</view>
        </view>
      </view>
    </demo-block>

    <demo-block title="裁剪后上传" style="text-align: center">
      <wui-img-cropper v-model="showUpload" :img-src="srcUpload" @confirm="handleConfirmUpload" @cancel="handleCancel"></wui-img-cropper>
      <view class="profile">
        <view v-if="!imgSrcUpload" class="img" @click="uploadWithCrop">
          <wui-icon name="fill-camera" custom-class="img-icon"></wui-icon>
        </view>
        <wui-img
          v-if="imgSrcUpload"
          round
          width="200px"
          height="200px"
          :src="imgSrcUpload"
          mode="aspectFit"
          custom-class="profile-img"
          @click="uploadWithCrop"
        />
        <view style="font-size: 14px">点击上传裁剪后的头像</view>
      </view>
    </demo-block>
  </page-wraper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useUpload, useToast } from '@/uni_modules/elegant-wui-uni'
import { type UploadFileItem } from '@/uni_modules/elegant-wui-uni/components/wui-upload/types'

const { startUpload, UPLOAD_STATUS } = useUpload()

const { show: showToast } = useToast()

const src = ref<string>('')
const imgSrc = ref<string>('')
const show = ref<boolean>(false)

// 自定义裁剪比例相关变量
const showCustom = ref<boolean[]>([false, false, false])
const srcCustom = ref<string[]>(['', '', ''])
const imgSrcCustom = ref<string[]>(['', '', ''])

// 裁剪上传相关变量
const showUpload = ref<boolean>(false)
const srcUpload = ref<string>('')
const imgSrcUpload = ref<string>('')

function upload() {
  uni.chooseImage({
    count: 1,
    success: (res) => {
      const tempFilePaths = res.tempFilePaths[0]
      src.value = tempFilePaths
      show.value = true
    }
  })
}

function uploadCustom(index: number) {
  uni.chooseImage({
    count: 1,
    success: (res) => {
      const tempFilePaths = res.tempFilePaths[0]
      srcCustom.value[index] = tempFilePaths
      showCustom.value[index] = true
    }
  })
}

function uploadWithCrop() {
  uni.chooseImage({
    count: 1,
    success: (res) => {
      srcUpload.value = res.tempFilePaths[0]
      showUpload.value = true
    }
  })
}

function handleConfirm(event: any) {
  const { tempFilePath } = event
  imgSrc.value = tempFilePath
}

function handleCustomConfirm(index: number, event: any) {
  const { tempFilePath } = event
  imgSrcCustom.value[index] = tempFilePath
}

async function handleConfirmUpload(event: any) {
  const { tempFilePath } = event

  // 构建上传文件对象
  const file: UploadFileItem = {
    url: tempFilePath,
    status: UPLOAD_STATUS.PENDING,
    percent: 0,
    uid: new Date().getTime()
  }

  try {
    // 开始上传
    await startUpload(file, {
      action: 'https://mockapi.eolink.com/zhTuw2P8c29bc981a741931bdd86eb04dc1e8fd64865cb5/upload', // 替换为实际的上传地址
      onSuccess() {
        imgSrcUpload.value = tempFilePath
        showToast({
          msg: '上传成功'
        })
      },
      onError() {
        showToast({
          msg: '上传失败'
        })
      },
      onProgress(res) {
        console.log('上传进度:', res.progress)
      }
    })
  } catch (error) {
    console.error('上传失败:', error)
  }
}

function imgLoaderror(res: any) {
  console.log('加载失败', res)
}

function imgLoaded(res: any) {
  console.log('加载成功', res)
}

function handleCancel(event: any) {
  console.log('取消', event)
}

function handleCustomCancel(event: any) {
  console.log('取消', event)
}

function getHeight(ratio: string): string {
  const [w, h] = ratio.split(':').map(Number)
  if (ratio === '1:1') return '200px'
  return `${(300 * h) / w}px`
}
</script>

<style lang="scss" scoped>
.wui-theme-dark {
  :deep(.profile-img) {
    border: 1px solid $-dark-border-color;
  }
  .img {
    background-color: $-dark-background4;
  }
}

.profile {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 300px;
}

:deep(.profile-img) {
  border: 1px solid rgba(0, 0, 0, 0.09);
}
.img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.04);
  position: relative;
}
:deep(.img-icon) {
  font-size: 60px;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.profile-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding: 20px;
}

.profile-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.profile-item .img {
  width: 300px;
  height: 169px; // 16:9的默认高度
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.04);
  position: relative;
}

.profile-item:nth-child(1) .img {
  height: 200px;
}
</style>