<template>
  <page-wraper>
    <wui-message-box></wui-message-box>
    <view>
      <demo-block title="基本用法">
        <wui-switch v-model="checked1" @change="handleChange1" />
      </demo-block>
      <demo-block title="修改值 active-value 、 inactive-value">
        <view style="margin-bottom: 10px">{{ checked2 }}</view>
        <wui-switch v-model="checked2" active-value="沃特" inactive-value="商家后台" @change="handleChange2" />
      </demo-block>
      <demo-block title="自定义颜色 active-color 、 inactive-color">
        <wui-switch v-model="checked3" active-color="#13ce66" inactive-color="#f00" @change="handleChange3" />
      </demo-block>
      <demo-block title="自定义大小">
        <wui-switch v-model="checked4" :size="24" @change="handleChange4" />
      </demo-block>
      <demo-block title="选中禁用">
        <wui-switch v-model="checked5" disabled />
      </demo-block>
      <demo-block title="非选中禁用">
        <wui-switch v-model="checked6" disabled />
      </demo-block>
      <demo-block title="before-change 修改前钩子函数">
        <wui-switch v-model="checked7" :before-change="beforeChange" @change="handleChange5" />
      </demo-block>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useMessage } from '@/uni_modules/elegant-wui-uni'
import type { SwitchBeforeChange } from '@/uni_modules/elegant-wui-uni/components/wui-switch/types'
import { ref } from 'vue'

const checked1 = ref<boolean>(true)
const checked2 = ref<string>('沃特')
const checked3 = ref<boolean>(true)
const checked4 = ref<boolean>(true)
const checked5 = ref<boolean>(true)
const checked6 = ref<boolean>(false)
const checked7 = ref<boolean>(false)

const message = useMessage()

const beforeChange: SwitchBeforeChange = ({ value, resolve }) => {
  message
    .confirm('是否切换开关')
    .then(() => {
      resolve(true)
    })
    .catch(() => {
      resolve(false)
    })
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
</script>
<style lang="scss" scoped>
page {
  background-color: #ededed;
}
.row {
  margin: 10px 0;
  padding: 0 10px;
  background: rgb(255, 255, 255);
}
.desc {
  padding: 0 15px;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
}
.code {
  color: rgb(0, 131, 255);
  white-space: nowrap;
  font-size: 0.8em;
  background-color: rgb(248, 248, 248);
  -webkit-font-smoothing: initial;
  padding: 1px 2px;
  margin: 0 2px;
  border-radius: 2px;
}
.center {
  text-align: center;
  padding-bottom: 10px;
}
.test {
  color: red;
}
</style>
