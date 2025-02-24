<frame/>

# Skeleton 骨架屏

用于等待加载内容所展示的占位图形组合，有动态效果加载效果，减少用户等待焦虑。

## 骨架图风格

支持 `avatar`、`image`、`text`、`paragraph` 四种类型。

```html
// 头像骨架屏
<wui-skeleton theme="avatar" />
// 图片骨架屏
<wui-skeleton theme="image" />
// 文本骨架屏
<wui-skeleton theme="text" />
// 段落骨架屏
<wui-skeleton theme="paragraph" />
```

## 宫格骨架屏

```html
<wui-skeleton :row-col="grid" />
```

```ts
const grid = [
  [
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' },
    { width: '48px', height: '48px' }
  ],
  [
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' },
    { width: '48px', height: '16px' }
  ]
]
```

## 单元格骨架屏

```html
<view style="display: flex">
  <wui-skeleton :row-col="[{ size: '48px', type: 'circle' }]" />
  <wui-skeleton :custom-style="{ width: '100%', marginLeft: '12px' }" :row-col="[{ width: '50%' }, { width: '100%' }]" />
</view>
<view style="display: flex; margin-top: 20px">
  <wui-skeleton :row-col="[{ size: '48px', type: 'rect' }]" />
  <wui-skeleton :custom-style="{ width: '100%', marginLeft: '12px' }" :row-col="[{ width: '50%' }, { width: '100%' }]" />
</view>
```

## 图片组合骨架屏

```html
<view>
  <wui-skeleton :row-col="imageGroup" />
  <wui-skeleton :custom-style="{ marginTop: '20px' }" :row-col="imageGroup" />
</view>
```

```ts
const imageGroup = [{ height: '171px' }, 1, { width: '107px' }, [{ width: '93px' }, { width: '32px', marginLeft: '41px' }]]
```

## 加载动画

支持 `gradient`、`flashed`

```html
<wui-skeleton animation="gradient" theme="paragraph" />
<view style="display: flex">
  <wui-skeleton :row-col="[{ size: '48px', type: 'circle' }]" />
  <wui-skeleton :custom-style="{ width: '100%', marginLeft: '12px' }" animation="flashed" theme="paragraph" />
</view>
```

## 插槽内容

可以通过插槽写入展示的内容，当请求结束，将 loading 设置为 false，此时会隐藏骨架组件，同时展示插槽内容。

```html
<wui-skeleton
  :row-col="[
    [
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' },
      { width: '48px', height: '48px' }
    ],
    [
      { width: '48px', height: '16px' },
      { width: '48px', height: '16px' },
      { width: '48px', height: '16px' },
      { width: '48px', height: '16px' },
      { width: '48px', height: '16px' }
    ]
  ]"
  :loading="showContent"
>
  <wui-grid>
    <wui-grid-item icon-size="32px" icon="picture" text="文字" />
    <wui-grid-item icon-size="32px" icon="picture" text="文字" />
    <wui-grid-item icon-size="32px" icon="picture" text="文字" />
    <wui-grid-item icon-size="32px" icon="picture" text="文字" />
    <wui-grid-item icon-size="32px" icon="picture" text="文字" />
  </wui-grid>
</wui-skeleton>
```

```js
const showContent = ref(true)
```

## Attributes

| 参数      | 说明                                                                                                                                                                                                                                                                                                                           | 类型              | 可选值                              | 默认值 | 最低版本 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- | ----------------------------------- | ------ | -------- |
| theme     | 骨架图风格                                                                                                                                                                                                                                                                                                                     | SkeletonTheme     | `text` `avatar` `paragraph` `image` | -      | -        |
| rowCol    | 用于设置行列数量、宽度高度、间距等<br />【示例一】`[1, 1, 2]` 表示输出三行骨架图，第一行一列，第二行一列，第三行两列。 <br />【示例二】`[1, 1, { width: '100px' }]` 表示自定义第三行的宽度为 `100px`。 <br />【示例三】`[1, 2, [{ width, height }, { width, height, marginLeft }]]` 表示第三行有两列，且自定义宽度、高度和间距 | SkeletonRowCol    | -                                   | -      | -        |
| loading   | 是否为加载状态，如果是则显示骨架图，如果不是则显示加载完成的内容                                                                                                                                                                                                                                                               | boolean           | -                                   | true   | -        |
| animation | 动画效果                                                                                                                                                                                                                                                                                                                       | SkeletonAnimation | `gradient` `flashed`                | -      | -        |

## Slots

| name    | 说明                   | 最低版本 |
| ------- | ---------------------- | -------- |
| default | loading 结束后展示内容 | -        |
