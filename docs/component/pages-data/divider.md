<frame/>

# Divider 分割线

用于将内容分隔为多个区域。

## 基本使用

默认渲染一条水平分割线。

```html
<wui-divider></wui-divider>
```

## 展示文本

使用默认插槽在分割线中间插入内容。

```html
<wui-divider>展示文本</wui-divider>
```

## 自定义渲染内容

使用默认插槽在分割线中间插入自定义内容。

```html
<wui-divider>
  <wui-icon name="arrow-down" size="20" color="#1989fa" />
</wui-divider>
```

## 内容位置

通过 `content-position` 指定内容所在位置。

```html
<wui-divider>中间</wui-divider>
<wui-divider content-position="left">左侧</wui-divider>
<wui-divider content-position="right">右侧</wui-divider>
```

## 虚线

添加 `dashed` 属性使分割线渲染为虚线。

```html
<wui-divider dashed>虚线分割</wui-divider>
```

## 自定义颜色

设置 `color` 属性。

```html
<wui-divider color="#4D80F0">自定义颜色</wui-divider>
```

## 垂直分割线

添加 `vertical` 属性使分割线渲染为垂直分割线。

```html
<view class="content">
  文本
  <wui-divider vertical />
  文本
  <wui-divider vertical dashed />
  文本
  <wui-divider vertical :hairline="false" />
  文本
  <wui-divider vertical color="#1989fa" />
  文本
</view>
```

```css
.content {
  padding: 12rpx 15px;
}
```

## Attributes

| 参数             | 说明                           | 类型    | 可选值                  | 默认值   | 最低版本 |
| ---------------- | ------------------------------ | ------- | ----------------------- | -------- | -------- |
| color            | 自定义颜色，支持所有颜色的写法 | string  | -                       | -        | -        |
| hairline         | 是否显示边框                   | boolean | -                       | true     | -        |
| dashed           | 是否显示为虚线                 | boolean | -                       | false    | -        |
| content-position | 内容位置                       | string  | `left`/`center`/`right` | `center` | -        |
| vertical         | 是否显示为垂直分割线           | boolean | -                       | false    | -        |

## Slot

| name    | 说明                                    | 最低版本 |
| ------- | --------------------------------------- | -------- |
| default | 内容，仅在 `vertical` 为 `false` 时生效 | -        |

## 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |
