<template>
  <page-wraper>
    <demo-block title="基本用法">
      <wui-progress :percentage="percentageZero" />
    </demo-block>

    <demo-block title="不显示进度文字">
      <wui-progress :percentage="60" hide-text />
    </demo-block>

    <demo-block title="进度条状态">
      <wui-progress :percentage="100" hide-text status="success" />
      <wui-progress :percentage="80" hide-text status="danger" />
      <wui-progress :percentage="90" hide-text status="warning" />
    </demo-block>

    <demo-block title="修改颜色">
      <wui-progress :percentage="80" color="#00c740" />
    </demo-block>

    <demo-block title="颜色数组">
      <wui-progress :percentage="100" :color="['#00c740', '#ffb300', '#e2231a', '#0083ff']" />
      <wui-progress :percentage="percentage" :color="colorObject" />
    </demo-block>

    <demo-block title="动态设置">
      <wui-progress :percentage="percentageDynamic" />
      <wui-button custom-style="margin-right: 10px;" @click="add" type="success" size="small">+10</wui-button>
      <wui-button @click="reduce" type="error" size="small">-10</wui-button>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import type { ProgressColor } from '@/uni_modules/elegant-wui-uni/components/wui-progress/types'
import { ref } from 'vue'

const percentageZero = ref<number>(30)
const percentage = ref<number>(100)
// 动态进度 变量
const percentageDynamic = ref<number>(50)
// 动态变量加10
const add = () => {
  percentageDynamic.value = Math.min(percentageDynamic.value + 10, 100)
}
// 动态变量减10
const reduce = () => {
  percentageDynamic.value = Math.max(percentageDynamic.value - 10, 0)
}
const colorObject = ref<ProgressColor[]>([
  {
    color: 'yellow',
    percentage: 30
  },
  {
    color: 'red',
    percentage: 60
  },
  {
    color: 'blue',
    percentage: 80
  },
  {
    color: 'black',
    percentage: 90
  }
])
</script>
<style lang="scss" scoped></style>
