<template>
  <page-wraper>
    <demo-block title="基本用法">
      <wui-input-number v-model="value1" @change="handleChange1" />
    </demo-block>
    <demo-block title="设置步长">
      <wui-input-number v-model="value2" @change="handleChange2" :step="2" />
    </demo-block>
    <demo-block title="限制最大最小值">
      <wui-input-number v-model="value3" @change="handleChange3" :min="3" :max="10" />
    </demo-block>
    <demo-block title="禁用">
      <wui-input-number v-model="value4" @change="handleChange4" disabled />
    </demo-block>
    <demo-block title="禁用输入框">
      <wui-input-number v-model="value10" @change="handleChange4" disable-input />
    </demo-block>
    <demo-block title="禁用减号按钮">
      <wui-input-number v-model="value13" @change="handleChange13" disable-minus />
    </demo-block>
    <demo-block title="禁用加号按钮">
      <wui-input-number v-model="value14" @change="handleChange14" disable-plus />
    </demo-block>
    <demo-block title="无输入框">
      <view class="flex">
        <view>数量：{{ value5 }}</view>
        <wui-input-number v-model="value5" @change="handleChange5" without-input />
      </view>
    </demo-block>
    <demo-block title="设置小数精度">
      <wui-input-number v-model="value6" @change="handleChange6" :precision="2" :step="0.01" />
    </demo-block>
    <demo-block title="输入严格为步数的倍数">
      <wui-input-number v-model="value7" @change="handleChange7" step-strictly :step="2" />
    </demo-block>
    <demo-block title="严格步进+边界限制">
      <view class="strict-bounds-demo">
        <view class="demo-description">值：{{ value19 }}（步进值2，最小值3，最大值15，严格步进模式）</view>
        <wui-input-number v-model="value19" @change="handleChange19" step-strictly :step="2" :min="3" :max="15" />
        <view class="demo-note">
          尝试输入各种值：
          <br />
          • 输入1 → 自动调整为4（≥3的最小2的倍数）
          <br />
          • 输入5 → 自动调整为4（最接近的2的倍数）
          <br />
          • 输入17 → 自动调整为14（≤15的最大2的倍数）
        </view>
      </view>
    </demo-block>
    <demo-block title="修改输入框宽度">
      <wui-input-number v-model="value8" input-width="70px" @change="handleChange8" />
    </demo-block>
    <demo-block title="允许空值，并设置 placeholder">
      <wui-input-number v-model="value9" allow-null placeholder="不限" input-width="70px" @change="handleChange9" />
    </demo-block>
    <demo-block title="异步变更">
      <wui-input-number v-model="value11" :before-change="beforeChange" />
    </demo-block>
    <demo-block title="非允许空值但可临时删除">
      <view class="temp-empty-demo">
        <view class="demo-description">值：{{ value18 }}（可以删除为空，但失焦时会自动修正为最小值）</view>
        <wui-input-number v-model="value18" @change="handleChange18" :allow-null="false" :min="1" />
        <view class="demo-note">尝试删除输入框中的所有内容，然后点击其他地方失焦，会自动修正为最小值1</view>
      </view>
    </demo-block>
    <demo-block title="键盘弹起不上推页面">
      <wui-input-number v-model="value15" @change="handleChange15" :adjust-position="false" />
    </demo-block>
    <demo-block title="非立即更新模式">
      <view class="immediate-demo">
        <view class="demo-title">立即更新模式（默认）- 值：{{ value16 }}</view>
        <wui-input-number v-model="value16" @change="handleChange16" :immediate-change="true" />
        <view class="demo-title">非立即更新模式 - 值：{{ value17 }}</view>
        <wui-input-number v-model="value17" @change="handleChange17" :immediate-change="false" />
        <view class="demo-note">在输入框中输入内容时，上方的值会立即更新，下方的值仅在失焦或点击按钮时更新</view>
      </view>
    </demo-block>
    <demo-block title="初始化时自动修正">
      <view class="format-init-demo">
        <view class="demo-title">自动修正初始值 - 值：{{ value20 }}</view>
        <wui-input-number v-model="value20" @change="handleChange20" :update-on-init="true" :min="3" :max="15" :step="2" step-strictly />
        <view class="demo-title">不修正初始值 - 值：{{ value21 }}</view>
        <wui-input-number v-model="value21" @change="handleChange21" :update-on-init="false" :min="3" :max="15" :step="2" step-strictly />
        <view class="demo-note">上方组件会在初始化时自动将值1修正为4（≥3的最小2的倍数），下方组件不会自动修正</view>
      </view>
    </demo-block>
    <demo-block title="长按加减">
      <wui-input-number v-model="value12" long-press @change="handleChange12" />
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/elegant-wui-uni'

import { type InputNumberBeforeChange } from '@/uni_modules/elegant-wui-uni/components/wui-input-number/types'
import { ref } from 'vue'
const { loading, close } = useToast()
const value1 = ref<number>(1)
const value2 = ref<number>(1)
const value3 = ref<number>(1)
const value4 = ref<number>(2)
const value5 = ref<number>(1)
const value6 = ref<string>('1.22')
const value7 = ref<number>(1)
const value8 = ref<number>(2)
const value9 = ref<string>('')
const value10 = ref<number>(1)
const value11 = ref<number>(1)
const value12 = ref<number>(1)
const value13 = ref<number>(1)
const value14 = ref<number>(1)
const value15 = ref<number>(1)
const value16 = ref<number>(1)
const value17 = ref<number>(1)
const value18 = ref<number>(1)
const value19 = ref<number>(4)
const value20 = ref<number>(1)
const value21 = ref<number>(1)

function handleChange1({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange2({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange3({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange4({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange5({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange6({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange7({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange8({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange9({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange12({ value }: { value: number | string }) {
  console.log(value)
}

function handleChange13({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange14({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange15({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange16({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange17({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange18({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange19({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange20({ value }: { value: number | string }) {
  console.log(value)
}
function handleChange21({ value }: { value: number | string }) {
  console.log(value)
}
const beforeChange: InputNumberBeforeChange = (value: any) => {
  loading({ msg: `正在更新到${value}...` })
  return new Promise((resolve) => {
    setTimeout(() => {
      close()
      resolve(true)
    }, 500)
  })
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.immediate-demo {
  .demo-title {
    margin-top:20rpx ;
    font-size: 14px;
    color: #999999;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .demo-note {
    font-size: 12px;
    color: #999;
    margin-top: 12px;
    line-height: 1.4;
    padding: 8px;
    background: #f5f5f5;
    border-radius: 4px;
  }

  .wui-input-number {
    margin-bottom: 16px;
  }
}

.temp-empty-demo {
  .demo-description {
    font-size: 14px;
    color: #999;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .demo-note {
    font-size: 12px;
    color: #999;
    margin-top: 12px;
    line-height: 1.4;
    padding: 8px;
    background: #f5f5f5;
    border-radius: 4px;
  }

  .wui-input-number {
    margin-bottom: 16px;
  }
}

.strict-bounds-demo {
  .demo-description {
    font-size: 14px;
    color: #999;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .demo-note {
    font-size: 12px;
    color: #999;
    margin-top: 12px;
    line-height: 1.4;
    padding: 8px;
    background: #f5f5f5;
    border-radius: 4px;
  }

  .wui-input-number {
    margin-bottom: 16px;
  }
}

.format-init-demo {
  .demo-title {
    margin-top:20rpx ;
    font-size: 14px;
    color: #999999;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .demo-note {
    font-size: 12px;
    color: #999;
    margin-top: 12px;
    line-height: 1.4;
    padding: 8px;
    background: #f5f5f5;
    border-radius: 4px;
  }

  .wui-input-number {
    margin-bottom: 16px;
  }
}
</style>
