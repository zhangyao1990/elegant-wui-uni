<template>
  <page-wraper>
    <view @click.stop="">
      <wui-message-box></wui-message-box>
    </view>
    <view class="demo-body">
      <demo-block title="基本用法" transparent>
        <wui-drop-menu>
          <wui-drop-menu-item v-model="value1" :options="option1" @change="handleChange1" />
          <wui-drop-menu-item v-model="value2" :options="option2" @change="handleChange2" />
        </wui-drop-menu>
      </demo-block>
      <demo-block title="自定义菜单内容" transparent>
        <wui-drop-menu>
          <wui-drop-menu-item v-model="value3" :options="option1" @change="handleChange3" />
          <wui-drop-menu-item ref="dropMenu" title="筛选" @opened="handleOpened">
            <view>
              <wui-slider v-model="valuetest" ref="slider" />
              <wui-cell title="标题文字" value="内容" />
              <wui-cell title="标题文字" label="描述信息" value="内容" />
              <view style="padding: 0 10px 20px; box-sizing: border-box">
                <wui-button block size="large" @click="confirm">主要按钮</wui-button>
              </view>
            </view>
          </wui-drop-menu-item>
        </wui-drop-menu>
      </demo-block>
      <demo-block title="自定义菜单选项" transparent>
        <view class="custom-menu">
          <wui-drop-menu custom-style="flex: 1; min-width: 0">
            <wui-drop-menu-item v-model="value4" :options="option1" @change="handleChange4" />
          </wui-drop-menu>
          <view style="flex: 1">
            <wui-sort-button v-model="value5" title="上架时间" @change="handleChange5" />
          </view>
        </view>
      </demo-block>
      <demo-block title="自定义菜单图标" transparent>
        <wui-drop-menu>
          <wui-drop-menu-item title="地图" icon="location" icon-size="24px" />
        </wui-drop-menu>
      </demo-block>
      <demo-block title="异步打开/关闭" transparent>
        <wui-drop-menu>
          <wui-drop-menu-item v-model="value10" :options="option1" @change="handleChange1" :before-toggle="handleBeforeToggle" />
        </wui-drop-menu>
      </demo-block>
      <demo-block title="向上弹出" transparent>
        <wui-drop-menu direction="up">
          <wui-drop-menu-item v-model="value6" :options="option1" @change="handleChange6" custom-title="custom-title" custom-icon="custom-icon" />
          <wui-drop-menu-item v-model="value7" :options="option2" @change="handleChange7" />
        </wui-drop-menu>
      </demo-block>
      <demo-block title="禁用" transparent>
        <wui-drop-menu direction="up">
          <wui-drop-menu-item v-model="value8" disabled :options="option1" @change="handleChange8" />
          <wui-drop-menu-item v-model="value9" :options="option2" @change="handleChange9" />
        </wui-drop-menu>
      </demo-block>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import { useMessage } from '@/uni_modules/elegant-wui-uni'
import type { SliderInstance } from '@/uni_modules/elegant-wui-uni/components/wui-slider/types'
import type { DropMenuItemBeforeToggle } from '@/uni_modules/elegant-wui-uni/components/wui-drop-menu-item/types'
const messageBox = useMessage()

const dropMenu = ref()
const slider = ref<SliderInstance>()

const valuetest = ref<number>(30)

const show = ref<boolean>(false)
const value1 = ref<number>(1)
const value2 = ref<number>(0)
const value3 = ref<number>(0)
const value4 = ref<number>(0)
const value5 = ref<number>(0)
const value6 = ref<number>(0)
const value7 = ref<number>(0)
const value8 = ref<number>(0)
const value9 = ref<number>(0)
const value10 = ref<number>(0)

const option1 = ref<Record<string, any>[]>([
  { label: '全部商品', value: 0 },
  { label: '新款商品', value: 1, tip: '这是补充信息' },
  { label: '这是比较长的筛选条件这是比较长的筛选条件', value: 2 }
])
const option2 = ref<Record<string, any>[]>([
  { label: '综合', value: 0 },
  { label: '销量', value: 1 },
  { label: '上架时间', value: 2 }
])

function handleOpened() {
  slider.value?.initSlider()
}

function handleChange1({ value }: any) {
  console.log(value)
}
function handleChange2({ value }: any) {
  console.log(value)
}
function handleChange3({ value }: any) {
  console.log(value)
}
function handleChange4({ value }: any) {
  console.log(value)
}
function handleChange5({ value }: any) {
  console.log(value)
}
function handleChange6({ value }: any) {
  console.log(value)
}
function handleChange7({ value }: any) {
  console.log(value)
}
function handleChange8({ value }: any) {
  console.log(value)
}
function handleChange9({ value }: any) {
  console.log(value)
}

function confirm() {
  dropMenu.value.close()
}

const handleBeforeToggle: DropMenuItemBeforeToggle = ({ status, resolve }) => {
  messageBox
    .confirm({
      title: `异步${status ? '打开' : '关闭'}`,
      msg: `确定要${status ? '打开' : '关闭'}下拉菜单吗？`
    })
    .then(() => {
      resolve(true)
    })
    .catch(() => {
      resolve(false)
    })
}
</script>
<style lang="scss" scoped>
.wui-theme-dark {
  .custom-menu {
    background: $-dark-background2;
  }
}

.demo-body {
  height: 100vh;
}

.custom-menu {
  display: flex;
  background: #fff;
  text-align: center;
}

:deep(.custom-title) {
  color: red;
}

:deep(.custom-icon) {
  color: red;
}
</style>
