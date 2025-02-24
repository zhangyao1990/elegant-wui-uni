<frame/>

# Radio 单选框

单选框，用于在一组备选项中进行单选。

## 基本用法

`v-model` 为绑定值，即选中的 `wui-radio` 的 `value` 值。

```html
<demo-block title="基本用法">
  <wui-radio-group v-model="value">
    <wui-radio :value="1">单选框1</wui-radio>
    <wui-radio :value="2">单选框2</wui-radio>
  </wui-radio-group>
  <view>当前选中的值为:{{value}}</view>
</demo-block>
```

```typescript
const value = ref<number>(1)
```

## 修改图标形状

修改 `shape` 属性，可选值为 'dot'、'button'、'check'，默认为 'check'。

```html
<!-- button 按钮式单选 -->
<wui-radio-group v-model="value" shape="button" @change="change">
  <wui-radio :value="1">沃特</wui-radio>
  <wui-radio :value="2">商家后台</wui-radio>
</wui-radio-group>
```

```typescript
const value = ref<number>(1)

function change(e) {
  console.log(e)
}
```

> <div style="color: #FA4350;font-weight: 500;">注意：</div>
> <div>内容项在3项以内，且有比较重要的信息备选（如付款类型选择等）可考虑采用圆形组件。因为会跟圆形复选框容易混淆，且会造成当前表单页页面结构不统一，<span style="color: #FA4350;font-weight: 500;">一般情况不建议使用点状单选。</span></div>

```html
<!-- dot 点状单选 -->
<wui-radio-group v-model="value" shape="dot" @change="change">
  <wui-radio :value="1">沃特</wui-radio>
  <wui-radio :value="2">商家后台</wui-radio>
</wui-radio-group>
```

```typescript
const value = ref<number>(1)

function change(e) {
  console.log(e)
}
```

## 表单模式

设置 `cell` 属性，开启表单模式单选框组。

开启表单模式时，如果同时设置 `shape` 为 `button` 开启表单模式单选按钮组模式。

```html
<wui-radio-group v-model="value" cell>
  <wui-radio value="1">选项一</wui-radio>
  <wui-radio value="2">选项二</wui-radio>
  <wui-radio value="3">选项三</wui-radio>
  <wui-radio value="4">选项四</wui-radio>
  <wui-radio value="5">选项五</wui-radio>
  <wui-radio value="6">选项六</wui-radio>
  <wui-radio value="7">选项七</wui-radio>
</wui-radio-group>
```

```ts
const value = ref<number>(1)
```

## 同行展示

设置 `inline` 属性，使单选框在同一行展示。

```html
<wui-radio-group v-model="value" inline>
  <wui-radio value="1">单选框1</wui-radio>
  <wui-radio value="2">单选框2</wui-radio>
</wui-radio-group>
```

```ts
const value = ref<number>(1)
```

## 修改选中的颜色

设置 `checked-color` 属性。

```html
<wui-radio-group v-model="value" checked-color="#fa4350">
  <wui-radio value="1">沃特</wui-radio>
  <wui-radio value="2">商家后台</wui-radio>
</wui-radio-group>
```

```ts
const value = ref<number>(1)
```

## 禁用

可以在 `radio-group` 上面设置 `disabled`，禁用所有单选框，也可以在单个单选框上面设置 `disabled` 属性，禁用某个单选框。

```html
<wui-radio-group v-model="value" disabled>
  <wui-radio value="1">沃特</wui-radio>
  <wui-radio value="2">商家后台</wui-radio>
</wui-radio-group>
```

```ts
const value = ref<number>(1)
```

## 尺寸

设置 `size` 属性，可选 `large`。

```html
<wui-radio-group v-model="value" size="large">
  <wui-radio value="1">沃特</wui-radio>
  <wui-radio value="2">商家后台</wui-radio>
</wui-radio-group>
```

## Props 优先级

radio 设置的 props 优先级比 radioGroup 上设置的 props 优先级更高

```html
<wui-radio-group v-model="value" shape="button" disabled checked-color="#f00">
  <wui-radio value="1" :disabled="false" checked-color="#000">商家后台</wui-radio>
  <wui-radio value="2" :disabled="false">沃特</wui-radio>
  <wui-radio value="3">商家智能</wui-radio>
</wui-radio-group>
```

## RadioGroup Attributes

| 参数           | 说明                          | 类型                      | 可选值               | 默认值  | 最低版本 |
| -------------- | ----------------------------- | ------------------------- | -------------------- | ------- | -------- |
| v-model        | 会自动选中 value 对应的单选框 | string / number / boolean | -                    | -       | -        |
| shape          | 单选框形状                    | string                    | dot / button / check | check   | -        |
| size           | 设置大小                      | string                    | large                | -       | -        |
| checked-color  | 选中的颜色                    | string                    | -                    | #4D80F0 | -        |
| disabled       | 禁用                          | boolean                   | -                    | false   | -        |
| max-width      | 文字位置最大宽度              | string                    | -                    | -       | -        |
| inline         | 同行展示                      | boolean                   | -                    | false   | -        |
| cell           | 表单模式                      | boolean                   | -                    | false   | -        |
| icon-placement | 勾选图标对齐方式              | string                    | left / right/ auto   | auto    | -        |

## RadioGroup Events

| 事件名称 | 说明             | 参数        | 最低版本 |
| -------- | ---------------- | ----------- | -------- |
| change   | 绑定值变化时触发 | `{ value }` | -        |

## Radio Attributes

| 参数          | 说明                                             | 类型                      | 可选值               | 默认值  | 最低版本 |
| ------------- | ------------------------------------------------ | ------------------------- | -------------------- | ------- | -------- |
| value         | 单选框选中时的值。会自动匹配 radioGroup 的 value | string / number / boolean | -                    | -       | -        |
| shape         | 单选框形状                                       | string                    | dot / button / check | check   | -        |
| checked-color | 选中的颜色                                       | string                    | -                    | #4D80F0 | -        |
| disabled      | 禁用                                             | boolean                   | -                    | false   | -        |
