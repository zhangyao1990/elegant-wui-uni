<frame/>

# InputNumber 计数器

由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

## 基本用法

通过 `v-model` 绑定输入值，可以通过 `change` 事件监听到输入值的变化。

```html
<wui-input-number v-model="value" @change="handleChange" />
```

```typescript
const value = ref<number>(1)
function handleChange({ value }) {
  console.log(value)
}
```

## 设置步长

设置 `step` 步长，即每次 value 变化的绝对值。

```html
<wui-input-number v-model="value" @change="handleChange" :step="2" />
```

## 设置最小最大值

设置 `min` 最小值，`max` 最大值。`min` 默认为 1。

```html
<wui-input-number v-model="value" @change="handleChange" :min="3" :max="10" />
```

## 禁用

设置 `disabled` 属性。

```html
<wui-input-number v-model="value" @change="handleChange" disabled />
```

## 禁用输入框

设置 `disable-input` 属性。

```html
<wui-input-number v-model="value" @change="handleChange" disable-input />
```

## 无输入框

设置 `without-input` ，不展示输入框。

```html
<wui-input-number v-model="value" @change="handleChange" without-input />
```

## 设置小数精度

设置 `precision` 属性，默认为 0。

```html
<wui-input-number v-model="value" @change="handleChange" :precision="2" :step="0.1" />
```

## 严格步数倍数

设置 `step-strictly` 属性，强制输入框输入内容为 `step` 的倍数（当用户输入完成后触发 change 时，会更正输入框内容）。

```html
<wui-input-number v-model="value" @change="handleChange" step-strictly :step="2" />
```

## 修改输入框宽度

设置 `input-width` 设置宽度，该值接受 1 个字符串，可以是表示尺寸的任何单位。

```html
<wui-input-number v-model="value" @change="handleChange" input-width="70px" />
```

## 允许空值，设置 placeholder

设置 `allow-null` 属性允许空值，设置 `placeholder` 提示填写。

```html
<wui-input-number v-model="value" allow-null placeholder="不限" @change="handleChange" />
```

```typescript
const value = ref<number | string>('')
function handleChange({ value }) {
  console.log(value)
}
```

## 异步变更

通过 `before-change` 可以在输入值变化前进行校验和拦截。

```html
<wui-input-number v-model="value" :before-change="beforeChange" />
```

```typescript
import { ref } from 'vue'
import { useToast } from '@/uni_modules/elegant-wui-uni'
import type { InputNumberBeforeChange } from '@/uni_modules/elegant-wui-uni/components/wui-input-number/types'
const { loading, close } = useToast()
const value = ref<number>(1)

const beforeChange: InputNumberBeforeChange = (value) => {
  loading({ msg: `正在更新到${value}...` })
  return new Promise((resolve) => {
    setTimeout(() => {
      close()
      resolve(true)
    }, 500)
  })
}
```

## 长按加减

设置 `long-press` 属性，允许长按加减。

```html
<wui-input-number v-model="value" long-press @change="handleChange" />
```

## Attributes

| 参数           | 说明                                                                  | 类型                                                       | 可选值 | 默认值   | 最低版本 |
| -------------- | --------------------------------------------------------------------- | ---------------------------------------------------------- | ------ | -------- | -------- |
| v-model        | 绑定值                                                                | number / string                                            | -      | -        | -        |
| min            | 最小值                                                                | number                                                     | -      | 1        | -        |
| max            | 最大值                                                                | number                                                     | -      | Infinity | -        |
| step           | 步数                                                                  | number                                                     | -      | 1        | -        |
| step-strictly  | 严格值为步数的倍数                                                    | boolean                                                    | -      | false    | -        |
| precision      | 小数精度                                                              | number                                                     | -      | 0        | -        |
| disabled       | 禁用                                                                  | boolean                                                    | -      | false    | -        |
| without-input  | 不显示输入框                                                          | boolean                                                    | -      | false    | -        |
| input-width    | 输入框宽度                                                            | string                                                     | -      | 36px     | -        |
| allow-null     | 是否允许输入的值为空，设置为 `true` 后允许传入空字符串                | boolean                                                    | -      | false    | -        |
| placeholder    | 占位文本                                                              | string                                                     | -      | -        | -        |
| disable-input  | 禁用输入框                                                            | boolean                                                    | -      | false    | -        |
| disable-plus   | 禁用增加按钮                                                          | boolean                                                    | -      | false    | -        |
| disable-minus  | 禁用减少按钮                                                          | boolean                                                    | -      | false    | -        |
| adjustPosition | 原生属性，键盘弹起时，是否自动上推页面                                | boolean                                                    | -      | true     | -        |
| before-change  | 输入框值改变前触发，返回 false 会阻止输入框值改变，支持返回 `Promise` | `(value: number \| string) => boolean \| Promise<boolean>` | -      | -        | -        |
| long-press | 是否允许长按进行加减 | boolean | - | false | 0.3.5 |
## Events

| 事件名称 | 说明               | 参数                 | 最低版本 |
| -------- | ------------------ | -------------------- | -------- |
| change   | 值修改事件         | ` { value }`         | -        |
| focus    | 输入框获取焦点事件 | ` { value, height }` | -        |
| blur     | 输入框失去焦点事件 | ` { value }`         | -        |

## 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |
