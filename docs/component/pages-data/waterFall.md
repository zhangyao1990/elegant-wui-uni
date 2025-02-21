<frame/>

# waterFall 瀑布流

瀑布流组件，用于展示一组等宽不等高的元素。

## 基础用法

通过 data 属性传递数据，组件内部会根据设置的 mode 模式将数据分割成左右两列数据，开发者通过 left 和 right 插槽自定义左右两边的内容样式
当 mode 设置为 normal 时，组件会将数据按照顺序分割成左右两列数据，当 mode 设置为 calc 时，组件会计算左右两列的高度的方式分割成左右两列数据

```html
<template>
  <WuiWaterFall :data="imageData">
    <template #left="{ item }">
      <view class="image-data">
        <image class="image" :src="item.url" mode="widthFix" />
      </view>
    </template>
    <template #right="{ item }">
      <view class="image-data">
        <image class="image" :src="item.url" mode="widthFix" />
      </view>
    </template>
  </WuiWaterFall>
</template>

<style lang="scss">
  .image-data {
    width: calc(100% - 20rpx);
    margin: 10rpx;

    .image {
      width: 100%;
      height: auto;
    }
  }
</style>
```

## Attributes

| 参数   | 说明       | 类型   | 可选值      | 默认值     | 最低版本 |
| ------ | ---------- | ------ | ----------- | ---------- | -------- |
| `data` | 列表数据   | Array  | -           | `''`       | -        |
| `mode` | 瀑布流模式 | String | normal/calc | `'normal'` | -        |

## Slot

| name  | 说明                       | 最低版本 |
| ----- | -------------------------- | -------- |
| left  | 瀑布流左边单个 item 的内容 | -        |
| right | 瀑布流右边单个 item 的内容 | -        |

## Methods

| 方法名 | 说明           | 参数 | 最低版本 |
| ------ | -------------- | ---- | -------- |
| reset  | 重置瀑布流列表 | -    | -        |
