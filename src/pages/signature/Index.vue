<template>
  <page-wraper>
    <demo-block title="基础用法">
      <wui-signature
        @clear="img.src = ''"
        @confirm="
          (result) => {
            confirm(result, '1')
          }
        "
      />
      <wui-img :height="img.height" :width="img.width" :src="img.src" v-if="img.src" />
    </demo-block>
    <demo-block title="自定义颜色">
      <wui-signature
        pen-color="red"
        @clear="img.src1 = ''"
        @confirm="
          (result) => {
            confirm(result, '2')
          }
        "
      />
      <wui-img :height="img.height" :width="img.width" :src="img.src1" v-if="img.src1" />
    </demo-block>
    <demo-block title="自定义宽度">
      <wui-signature
        :line-width="6"
        @clear="img.src1 = ''"
        @confirm="
          (result) => {
            confirm(result, '3')
          }
        "
      />
      <wui-img :height="img.height" :width="img.width" :src="img.src2" v-if="img.src2" />
    </demo-block>
    <demo-block title="自定义按钮">
      <wui-signature :disabled="disabled">
        <template #footer="{ clear, confirm }">
          <wui-button block @click="changeDisabled" v-if="disabled">开始签名</wui-button>
          <wui-button v-if="!disabled" size="small" plain @click="clear">清除</wui-button>
          <wui-button v-if="!disabled" size="small" style="margin-left: 4px" @click="confirm">确认</wui-button>
        </template>
      </wui-signature>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import type { FileType } from '@/uni_modules/elegant-wui-uni/components/wui-signature/types'
import { ref } from 'vue'
const img = ref({
  width: 0,
  height: 0,
  src: '',
  src1: '',
  src2: ''
})
const disabled = ref(true)
function confirm(result: FileType, type: string) {
  if (type === '1') {
    img.value.src = result.tempFilePath
  } else if (type === '2') {
    img.value.src1 = result.tempFilePath
  } else if (type === '3') {
    img.value.src2 = result.tempFilePath
  }
  img.value.height = result.height
  img.value.width = result.width
}
function changeDisabled() {
  disabled.value = false
}
</script>
