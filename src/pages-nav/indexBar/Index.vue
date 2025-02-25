<template>
  <page-wraper>
    <wui-search hide-cancel placeholder="我要去哪里？" v-model="keyword" @search="handleSearch" @clear="handleClear" />
    <view class="wraper">
      <wui-index-bar sticky v-if="showList.length">
        <view v-for="item in showList" :key="item.index">
          <wui-index-anchor :index="item.index" />
          <wui-cell border clickable v-for="city in item.data" :key="city" :title="city" @click="handleClick(item.index, city)"></wui-cell>
        </view>
      </wui-index-bar>
    </view>
  </page-wraper>
</template>

<script lang="ts" setup>
import { useToast } from '@/uni_modules/elegant-wui-uni'
import { nextTick, onMounted, ref } from 'vue'
import { indexBarList } from './indexBarData'
const { show: showToast } = useToast()

onMounted(() => {
  handleSearch()
})

const keyword = ref('')

const showList = ref<any>([])

function handleClick(index: string, city: string) {
  showToast(`当前点击项：${index}，城市：${city}`)
}

function handleSearch() {
  const indexList: any = indexBarList.map((item) => ({
    index: item.name,
    data: item.list.map((city) => city[1]) // 提取城市名称（列表中的第二项）
  }))
  showList.value = []
  nextTick(() => {
    if (keyword.value) {
      showList.value = indexList.filter((item: any) => {
        return item.data.some((city: string) => {
          return city.includes(keyword.value)
        })
      })
    } else {
      showList.value = indexList
    }
  })

  // 筛选indexList项中data包含keyword的项
}

function handleClear() {
  keyword.value = ''
  handleSearch()
}
</script>

<style lang="scss">
.wraper {
  height: calc(100vh - var(--window-top));
  height: calc(100vh - var(--window-top) - constant(safe-area-inset-bottom));
  height: calc(100vh - var(--window-top) - env(safe-area-inset-bottom));
}
</style>
