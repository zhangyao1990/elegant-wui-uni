<template>
  <page-wraper>
    <demo-block title="基本用法">
      <wui-input type="text" @input="handleInput" v-model="value" placeholder="请输入" @change="handleChange" @blur="handleBlur" />
    </demo-block>
    <demo-block title="禁用状态">
      <wui-input type="text" @input="handleInput" v-model="value1" disabled />
    </demo-block>
    <demo-block title="只读状态">
      <wui-input type="text" @input="handleInput" v-model="value2" readonly />
    </demo-block>
    <demo-block title="错误状态">
      <wui-input type="text" @input="handleInput" v-model="value3" placeholder="请输入" error />
    </demo-block>
    <demo-block title="清空按钮">
      <wui-input type="text" @input="handleInput" v-model="value4" clearable @change="handleChange1" />
    </demo-block>
    <demo-block title="有值且聚焦时展示清空按钮">
      <wui-input type="text" clear-trigger="focus" @input="handleInput" v-model="value20" clearable @change="handleChange1" />
    </demo-block>
    <demo-block title="点击清除按钮时不自动聚焦">
      <wui-input type="text" :focus-when-clear="false" @input="handleInput" v-model="value21" clearable @change="handleChange1" />
    </demo-block>
    <demo-block title="密码框">
      <wui-input type="text" @input="handleInput" v-model="value5" clearable show-password @change="handleChange2" />
    </demo-block>
    <demo-block title="数字类型">
      <wui-input type="number" @input="handleInput" v-model="value9" />
    </demo-block>
    <demo-block title="设置前后Icon">
      <wui-input type="text" v-model="value6" @input="handleInput" prefix-icon="dong" suffix-icon="list" clearable @change="handleChange3" />
    </demo-block>
    <demo-block title="字数限制">
      <wui-input type="text" v-model="value7" @input="handleInput" :maxlength="20" show-word-limit />
    </demo-block>
    <demo-block title="取消底部边框，自定义使用">
      <wui-input
        v-model="value8"
        @input="handleInput"
        no-border
        placeholder="请输入价格"
        custom-style="display: inline-block; width: 70px; vertical-align: middle;"
      />
      <text class="custom-txt">元</text>
    </demo-block>
    <demo-block title="cell 类型" transparent>
      <wui-cell-group border>
        <wui-input type="text" label="基本用法" v-model="value12" @input="handleInput" placeholder="请输入..." />
        <wui-input type="text" label="禁用" v-model="value13" @input="handleInput" disabled placeholder="请输入" />
        <wui-input type="text" label="清除、密码" v-model="value14" @input="handleInput" placeholder="请输入..." clearable show-password />
        <wui-input type="text" label="错误状态" v-model="value15" @input="handleInput" placeholder="请输入" error />
        <wui-input type="text" label="必填" v-model="value16" @input="handleInput" placeholder="请输入" required />
        <wui-input type="text" label="字数限制" v-model="value22" placeholder="请输入..." :maxlength="20" show-word-limit clearable />
        <wui-input type="text" label="图标" v-model="value17" @input="handleInput" placeholder="请输入..." prefix-icon="dong" suffix-icon="list" />
        <wui-input type="text" label="自定义插槽" center v-model="value18" @input="handleInput" placeholder="请输入..." clearable>
          <template #suffix>
            <wui-button size="small" custom-class="button">获取验证码</wui-button>
          </template>
        </wui-input>
        <wui-input type="text" label="大尺寸" clearable size="large" v-model="value19" @input="handleInput" placeholder="请输入..." />
      </wui-cell-group>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string>('')
const value1 = ref<string>('这是禁用状态')
const value2 = ref<string>('这是只读状态')
const value3 = ref<string>('123456')
const value4 = ref<string>('支持清空')
const value5 = ref<string>('password')
const value6 = ref<string>('')
const value7 = ref<string>('1234')
const value8 = ref<string>('')
const value9 = ref<number | ''>('')
const value12 = ref<string>('')
const value13 = ref<string>('该输入框禁用')
const value14 = ref<string>('12345678')
const value15 = ref<string>('')
const value16 = ref<string>('')
const value17 = ref<string>('')
const value18 = ref<string>('')
const value19 = ref<string>('')
const value20 = ref<string>('')
const value21 = ref<string>('')
const value22 = ref<string>('')

function handleChange(event: any) {
  console.log(event)
}
function handleChange1(event: any) {
  console.log(event)
}
function handleChange2(event: any) {
  console.log(event)
}
function handleChange3(event: any) {
  console.log(event)
}
function handleBlur(event: any) {
  console.log('失焦', event)
}

function handleInput(event: any) {
  console.log(event)
}
</script>
<style lang="scss" scoped>
.wui-theme-dark {
  .custom-txt {
    color: $-dark-color;
  }
}
.custom-txt {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  line-height: 24px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.suffix-slot {
  display: inline-block;
  height: 37px;
  line-height: 37px;
  margin-left: 8px;
  vertical-align: middle;
}
:deep(.page-wraper) {
  .wui-button {
    margin-left: 8px;
    vertical-align: middle;
  }
}
</style>
