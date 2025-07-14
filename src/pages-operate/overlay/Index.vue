<template>
  <page-meta :page-style="`overflow:${show ? 'hidden' : 'visible'};`"></page-meta>
  <view>
    <page-wraper>
      <demo-block title="基础用法">
        <wui-button type="primary" @click="show = true">显示遮罩层</wui-button>
      </demo-block>

      <demo-block title="嵌入内容">
        <wui-button type="primary" @click="show1 = true">嵌入内容</wui-button>
      </demo-block>
    </page-wraper>
    <wui-overlay :show="show" @click="show = false" />
    <wui-overlay :show="show1" @click="show1 = false" :lock-scroll="lockScroll">
      <view class="wrapper">
        <view class="content" @click.stop="">
          <demo-block title="是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动" transparent>
            <wui-switch v-model="lockScroll" size="22px" />
          </demo-block>
          <view class="scroll">
            <view class="block" v-for="i in 10" :key="i" @click.stop="">{{ i }}</view>
          </view>
        </view>
      </view>
    </wui-overlay>
  </view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const show = ref<boolean>(false)
const show1 = ref<boolean>(false)
const lockScroll = ref<boolean>(true)
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.content {
  background-color: #fff;
  border-radius: 12px;
}

.scroll {
  height: 50vh;
  overflow-y: auto;
  width: 300px;
}

.block {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
