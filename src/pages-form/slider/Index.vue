<template>
  <page-wraper>
    <demo-block title="基础用法">
      <wui-slider v-model="value1" />
    </demo-block>
    <demo-block title="指定选择范围">
      <wui-slider v-model="value8" :min="160" :max="280" :step="30" />
    </demo-block>
    <demo-block title="指定步长">
      <wui-slider v-model="value4" hide-min-max :step="10" />
    </demo-block>
    <demo-block title="指定最大值和最小值">
      <wui-slider v-model="value7" :min="5" :max="50" />
    </demo-block>
    <demo-block title="禁用状态">
      <wui-slider v-model="value5" disabled />
    </demo-block>
    <demo-block title="双向滑块">
      <wui-slider v-model="value6" :min="10" :max="80" />
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref<number>(30)
const value2 = ref<number>(479)
const value4 = ref<number>(11)
const value5 = ref<number>(70)
const value6 = ref<number[]>([20, 40])
const value7 = ref<number>(20)
const value8 = ref<number>(185)
</script>

<style lang="css" scoped></style>
