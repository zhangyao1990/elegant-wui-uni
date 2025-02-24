<template>
  <page-wraper>
    <wui-waterfall :data="imageData" mode="calc">
      <template #left="{ item }">
        <water-fall-item :url="item.url" />
      </template>
      <template #right="{ item }">
        <water-fall-item :url="item.url" />
      </template>
    </wui-waterfall>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useGenerateImageData } from './data/image-data'

import WaterFallItem from './components/water-fall-item.vue'

const { imageData } = useGenerateImageData()
</script>
<style lang="scss" scoped></style>
