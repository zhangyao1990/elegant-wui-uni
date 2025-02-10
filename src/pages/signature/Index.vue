<template>
  <page-wraper>
    <demo-block title="基础用法">
      <wui-signature @confirm="confirm" @clear="clear" :export-scale="2" />
      <wui-img v-if="img.tempFilePath" mode="widthFix" width="100%" :src="img.tempFilePath" />
    </demo-block>
    <demo-block title="自定义画笔颜色">
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
    <demo-block title="自定义画笔宽度">
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
    <demo-block title="自定义背景颜色">
      <wui-signature background-color="lightgray" />
    </demo-block>
    <demo-block title="自定义插槽">
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
import type { SignatureResult } from '@/uni_modules/elegant-wui-uni/components/wui-signature/types'
import { ref } from 'vue'
const img = ref<Partial<SignatureResult>>({})
const disabled = ref(true)
function confirm(result: SignatureResult) {
  img.value = result
}
function clear() {
  img.value = {}
}
function changeDisabled() {
  disabled.value = false
}
</script>
