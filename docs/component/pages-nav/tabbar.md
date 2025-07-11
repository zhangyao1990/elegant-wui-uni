<frame/>

# Tabbar 标签栏

底部导航栏，用于在不同页面之间进行切换。

## 基础用法

`v-model` 为绑定值，表示选中标签的索引值或者名称。

```html
<wui-tabbar v-model="tabbar">
  <wui-tabbar-item title="首页" icon="home"></wui-tabbar-item>
  <wui-tabbar-item title="分类" icon="cart"></wui-tabbar-item>
  <wui-tabbar-item title="我的" icon="user"></wui-tabbar-item>
</wui-tabbar>
```

```typescript
import { ref } from 'vue'

const tabbar = ref(1)
```

## 通过名称匹配

通过设置 `name` 属性，可以通过名称匹配选中标签。

```html
<wui-tabbar v-model="tabbar">
  <wui-tabbar-item name="home" title="首页" icon="home"></wui-tabbar-item>
  <wui-tabbar-item name="cart" title="分类" icon="cart"></wui-tabbar-item>
  <wui-tabbar-item name="setting" title="设置" icon="setting"></wui-tabbar-item>
  <wui-tabbar-item name="user" title="我的" icon="user"></wui-tabbar-item>
</wui-tabbar>
```

```typescript
import { ref } from 'vue'

const tabbar = ref('home')
```

## 徽标提示

通过设置 `value` 属性，可以显示徽标提示，而设置 is-dot 属性后，会在图标右上角展示一个小红点。

```html
<wui-tabbar v-model="tabbar">
  <wui-tabbar-item is-dot :value="2" title="点状" icon="home"></wui-tabbar-item>
  <wui-tabbar-item :value="2" icon="cart" title="分类"></wui-tabbar-item>
  <wui-tabbar-item :value="30" title="我的" icon="user"></wui-tabbar-item>
  <wui-tabbar-item :value="200" title="最大值" icon="user"></wui-tabbar-item>
</wui-tabbar>
```

```typescript
import { ref } from 'vue'

const tabbar = ref(1)
```

## 悬浮标签栏

通过设置 `shape` 属性为 `round`，可以将标签栏设置为悬浮样式。

```html
<wui-tabbar shape="round" v-model="tabbar">
  <wui-tabbar-item title="首页" is-dot :value="2" icon="home"></wui-tabbar-item>
  <wui-tabbar-item title="分类" :value="2" icon="cart"></wui-tabbar-item>
  <wui-tabbar-item title="相册" :value="30" icon="photo"></wui-tabbar-item>
  <wui-tabbar-item title="我的" :value="200" icon="user"></wui-tabbar-item>
</wui-tabbar>
```

```typescript
import { ref } from 'vue'

const tabbar = ref(1)
```

## 自定义图标

通过使用 `<template #icon>` 可以自定义标签页的图标。

```html
<wui-tabbar v-model="tabbar">
  <wui-tabbar-item :value="2" title="首页" icon="home"></wui-tabbar-item>
  <wui-tabbar-item :value="2" icon="cart" title="分类">
    <template #icon>
      <wui-img round height="40rpx" width="40rpx" src="https://registry.npmmirror.com/elegant-wui-uni-assets/*/files/panda.jpg"></wui-img>
    </template>
  </wui-tabbar-item>
  <wui-tabbar-item :value="3" title="我的" icon="user"></wui-tabbar-item>
</wui-tabbar>
```

```typescript
import { ref } from 'vue'

const tabbar = ref(1)
```

## 自定义颜色

通过设置 `active-color` 和 `inactive-color` 属性，可以自定义激活和未激活标签的颜色。

```html
<wui-tabbar v-model="tabbar" active-color="#ee0a24" inactive-color="#7d7e80">
  <wui-tabbar-item is-dot :value="2" title="点状" icon="home"></wui-tabbar-item>
  <wui-tabbar-item :value="2" icon="cart" title="分类"></wui-tabbar-item>
  <wui-tabbar-item :value="30" title="我的" icon="user"></wui-tabbar-item>
  <wui-tabbar-item :value="200" title="最大值" icon="photo"></wui-tabbar-item>
  <wui-tabbar-item :value="10" title="客服" icon="chat"></wui-tabbar-item>
</wui-tabbar>
```

```typescript
import { ref } from 'vue'

const tabbar = ref(1)
```

## 监听切换事件

通过监听 `change` 事件，可以获取选中标签的值。

```html
<wui-tabbar v-model="tabbar" @change="handleChange" active-color="#ee0a24" inactive-color="#7d7e80">
  <wui-tabbar-item title="首页" icon="home"></wui-tabbar-item>
  <wui-tabbar-item title="分类" icon="cart"></wui-tabbar-item>
  <wui-tabbar-item title="我的" icon="user"></wui-tabbar-item>
  <wui-tabbar-item title="相册" icon="photo"></wui-tabbar-item>
  <wui-tabbar-item title="客服" icon="chat"></wui-tabbar-item>
</wui-tabbar>
```

```typescript
import { ref } from 'vue'

const tabbar = ref(1)

function handleChange({ value }: { value: string }) {
  show(`选中标签:${value}`)
}
```

## 固定底部

通过设置 `fixed` 属性，可以将标签栏固定在底部；通过设置 `placeholder` 属性，可以在固定在底部时在标签位置生成一个等高的占位元素。

```html
<wui-tabbar fixed v-model="tabbar" bordered safeAreaInsetBottom placeholder>
  <wui-tabbar-item :value="2" is-dot title="首页" icon="home"></wui-tabbar-item>
  <wui-tabbar-item title="分类" icon="cart"></wui-tabbar-item>
  <wui-tabbar-item title="我的" icon="user"></wui-tabbar-item>
  <wui-tabbar-item :value="200" title="相册" icon="photo"></wui-tabbar-item>
  <wui-tabbar-item :value="10" title="客服" icon="chat"></wui-tabbar-item>
</wui-tabbar>
```

```typescript
import { ref } from 'vue'

const tabbar = ref(1)
```

## Attributes

| 参数                  | 说明                                               | 类型            | 可选值              | 默认值    | 最低版本 |
| --------------------- | -------------------------------------------------- | --------------- | ------------------- | --------- | -------- |
| model-value / v-model | 选中标签的索引值或者名称                           | number / string | -                   | 0         | -        |
| fixed                 | 是否固定在底部                                     | boolean         | -                   | false     | -        |
| safeAreaInsetBottom   | 是否设置底部安全距离（iPhone X 类型的机型）        | boolean         | -                   | false     | -        |
| bordered              | 是否显示顶部边框                                   | boolean         | -                   | true      | -        |
| shape                 | 标签栏的形状                                       | TabbarShape     | 'default' / 'round' | 'default' | -        |
| activeColor           | 激活标签的颜色                                     | string          | -                   | -         | -        |
| inactiveColor         | 未激活标签的颜色                                   | string          | -                   | -         | -        |
| placeholder           | 固定在底部时，是否在标签位置生成一个等高的占位元素 | boolean         | -                   | false     | -        |
| zIndex                | tabbar 组件的层级                                  | number          | -                   | 500       | -        |

## Events

| 事件名称 | 说明                  | 参数        | 最低版本 |
| -------- | --------------------- | ----------- | -------- |
| change   | tabbar 标签切换时触发 | `{ value }` | -        |

## 外部样式类

| 类名         | 说明         | 最低版本 |
| ------------ | ------------ | -------- |
| custom-class | 根节点样式类 | -        |
| custom-style | 根节点样式   | -        |

## TabbarItem Attributes

| 参数        | 说明                                                                                                | 类型            | 可选值 | 默认值 | 最低版本 |
| ----------- | --------------------------------------------------------------------------------------------------- | --------------- | ------ | ------ | -------- |
| title       | 标签页的标题                                                                                        | string          | -      | -      | -        |
| name        | 唯一标识符                                                                                          | string / number | -      | -      | -        |
| icon        | 图标                                                                                                | string          | -      | -      | -        |
| value       | 徽标显示值                                                                                          | number / string | -      | -      | -        |
| isDot       | 是否点状徽标                                                                                        | boolean         | -      | false  | -        |
| max         | 徽标最大值                                                                                          | number          | -      | 99     | -        |
| badge-props | 自定义徽标的属性，传入的对象会被透传给 [Badge 组件的 props](/component/pages-data/badge#attributes) | BadgeProps      | -      | -      | -        |

## TabbarItem Slots

| name | 说明       | 参数              | 最低版本 |
| ---- | ---------- | ----------------- | -------- |
| icon | 自定义图标 | `active: boolean` | -        |

## TabbarItem 外部样式类

| 类名         | 说明         | 最低版本 |
| ------------ | ------------ | -------- |
| custom-class | 根节点样式类 | -        |
| custom-style | 根节点样式   | -        |
