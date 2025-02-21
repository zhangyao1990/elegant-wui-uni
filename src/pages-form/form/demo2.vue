<template>
  <page-wraper>
    <wui-form ref="form" :model="model" :reset-on-change="false">
      <wui-cell-group border>
        <wui-input
          label="汪汪队"
          label-width="100px"
          prop="name"
          clearable
          v-model="model.name"
          placeholder="请输入汪汪队"
          @blur="handleBlur('name')"
          :rules="[{ required: true, message: '请填写汪汪队' }]"
        />
        <wui-input
          label="汪汪队单号"
          prop="phoneNumber"
          label-width="100px"
          clearable
          @blur="handleBlur('phoneNumber')"
          v-model="model.phoneNumber"
          placeholder="汪汪队单号"
          :rules="[{ required: true, message: '请填写汪汪队单号' }]"
        />

        <wui-input
          label="汪汪队id"
          prop="id"
          label-width="100px"
          clearable
          @blur="handleBlur('id')"
          v-model="model.id"
          placeholder="汪汪队id"
          :rules="[{ required: true, message: '请填写汪汪队id' }]"
        />
      </wui-cell-group>
    </wui-form>

    <view class="footer">
      <wui-button type="primary" @click="handleSubmit">提交</wui-button>
      <wui-button type="primary" @click="handleValidate">校验单号和ID</wui-button>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/elegant-wui-uni'
import type { FormInstance } from '@/uni_modules/elegant-wui-uni/components/wui-form/types'
import { reactive, ref } from 'vue'

const model = reactive<{
  name: string
  phoneNumber: string
  id: string
}>({
  name: '',
  phoneNumber: '',
  id: ''
})

const { success: showSuccess } = useToast()
const form = ref<FormInstance>()

function handleBlur(prop: string) {
  form.value!.validate(prop)
}

function handleValidate() {
  form
    .value!.validate(['phoneNumber', 'id'])
    .then(({ valid }) => {
      if (valid) {
        showSuccess('校验通过')
      }
    })
    .catch((error) => {
      console.log(error, 'error')
    })
}

function handleSubmit() {
  form
    .value!.validate()
    .then(({ valid }) => {
      if (valid) {
        showSuccess('校验通过')
      }
    })
    .catch((error) => {
      console.log(error, 'error')
    })
}
</script>
<style lang="scss" scoped>
.footer {
  padding: 12px;
  display: flex;
}
</style>
