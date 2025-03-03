<template>
  <view :class="`wui-pager ${customClass}`" :style="customStyle" v-if="!(hideIfOnePage && totalPageNum === 1)">
    <view class="wui-pager__content">
      <wui-button :plain="modelValue > 1" type="info" size="small" :disabled="modelValue <= 1" custom-class="wui-pager__nav" @click="sub">
        <text v-if="!showIcon">{{ prevText || translate('prev') }}</text>
        <wui-icon
          v-else
          :custom-class="`wui-pager__left wui-pager__icon ${modelValue <= 1 ? 'wui-pager__nav--disabled' : 'wui-pager__nav--active'}`"
          name="arrow-right"
        ></wui-icon>
      </wui-button>
      <view class="wui-pager__size">
        <text class="wui-pager__current">{{ modelValue }}</text>
        <text class="wui-pager__separator">/</text>
        <text>{{ totalPageNum }}</text>
      </view>
      <wui-button
        :plain="modelValue < totalPageNum"
        type="info"
        size="small"
        :disabled="modelValue >= totalPageNum"
        custom-class="wui-pager__nav"
        @click="add"
      >
        <text v-if="!showIcon">{{ nextText || translate('next') }}</text>
        <wui-icon
          v-else
          :custom-class="`wui-pager__icon ${modelValue >= totalPageNum ? 'wui-pager__nav--disabled' : 'wui-pager__nav--active'}`"
          name="arrow-right"
        ></wui-icon>
      </wui-button>
    </view>
    <view class="wui-pager__message" v-if="showMessage">
      <text>{{ translate('page', modelValue) }}，</text>
      <text v-if="total">{{ translate('total', total) }}，</text>
      <text>{{ translate('size', pageSize) }}</text>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'wui-pagination',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wuiIcon from '../wui-icon/wui-icon.vue'
import wuiButton from '../wui-button/wui-button.vue'
import { ref, watch } from 'vue'
import { useTranslate } from '../composables/useTranslate'
import { paginationProps } from './types'

const { translate } = useTranslate('pagination')

const props = defineProps(paginationProps)
const emit = defineEmits(['change', 'update:modelValue'])

const totalPageNum = ref<number>(0) // 总页数

watch(
  () => props.totalPage,
  (newValue) => {
    if (!totalPageNum.value && newValue) {
      totalPageNum.value = newValue
    }
  },
  { immediate: true, deep: true }
)

watch(
  () => props.total,
  () => {
    updateTotalPage()
  },
  { immediate: true, deep: true }
)

function add() {
  const { modelValue } = props
  if (modelValue > totalPageNum.value - 1) {
    return
  }
  emit('change', { value: modelValue + 1 })
  emit('update:modelValue', modelValue + 1)
}

function sub() {
  const { modelValue } = props
  if (modelValue < 2) {
    return
  }
  emit('change', { value: modelValue - 1 })
  emit('update:modelValue', modelValue - 1)
}

function updateTotalPage() {
  const { total, pageSize } = props
  totalPageNum.value = Math.ceil(total || 0 / pageSize)
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
