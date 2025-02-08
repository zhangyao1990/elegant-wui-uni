<frame/>

# Signature 组件

`Signature`组件是一个用于生成手写签名的 Vue 组件。它提供了多种自定义选项，包括签名笔的颜色、宽度以及自定义操作按钮

## 基础用法

```html
<wui-signature @confirm="confirm" />
<wui-img :height="img.height" :width="img.width" :src="img.src" v-if="img.src" />
```

```typescript
const img = ref({
  width: 0,
  height: 0,
  src: ''
})
function confirm(result: FileType) {
  img.value.src = result.tempFilePath
  img.value.height = result.height
  img.value.width = result.width
}
```

## 自定义颜色

`pen-color`设置签名笔的颜色，默认为`黑色`

```html
<wui-signature pen-color="red" />
```

## 自定义宽度

`line-width`设置签名笔的宽度，默认为`2`。

```html
<wui-signature :line-width="6" />
```

## 自定义按钮

通过`footer`插槽可以自定义按钮

```html
<wui-signature :disabled="disabled">
  <template #footer="{ clear, confirm }">
    <wui-button block @click="changeDisabled" v-if="disabled">开始签名</wui-button>
    <wui-button v-if="!disabled" size="small" plain @click="clear">清除</wui-button>
    <wui-button v-if="!disabled" size="small" style="margin-left: 4px" @click="confirm">确认</wui-button>
  </template>
</wui-signature>
```

```typescript
const disabled = ref(true)

function changeDisabled() {
  disabled.value = false
}
```

## Attributes

| 参数        | 说明                                                                                                                                                            | 类型    | 可选值 | 默认值  | 最低版本 |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ | ------- | -------- |
| penColor    | 签名笔颜色                                                                                                                                                      | String  | --     | #000000 | --       |
| lineWidth   | 签名笔宽度                                                                                                                                                      | Number  | --     | 2       | --       |
| height      | 画布的高度                                                                                                                                                      | Number  | --     | 200     | --       |
| width       | 画布的宽度                                                                                                                                                      | Number  | --     | 300     | --       |
| clearText   | 清空按钮的文本                                                                                                                                                  | String  | --     | 清空    | --       |
| confirmText | 确认按钮的文本                                                                                                                                                  | String  | --     | 确认    | --       |
| fileType    | 目标文件的类型，[wx.canvasToTempFilePath 属性介绍](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html#%E5%8F%82%E6%95%B0) | String  | --     | png     | --       |
| quality     | 目标文件的类型，[wx.canvasToTempFilePath 属性介绍](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html#%E5%8F%82%E6%95%B0) | Number  | --     | 1       | --       |
| exportScale | 导出图片的缩放比例                                                                                                                                              | Number  | --     | 1       | --       |
| disabled    | 是否禁用签名板                                                                                                                                                  | Boolean | --     | false   | --       |

## Slot

| name   | 说明          | 参数                 | 最低版本 |
| ------ | ------------- | -------------------- | -------- |
| footer | 自定义 footer | `{ clear, confirm }` | -        |

## Events

| 事件名称   | 说明               | 参数                                                                                        | 最低版本 |
| ---------- | ------------------ | ------------------------------------------------------------------------------------------- | -------- |
| confirm    | 点击确认按钮时触发 | `{tempFilePath, width, height}` 分别为生成文件的临时路径 (本地路径)、生成图片宽、生成图片高 | -        |
| clear      | 点击清空按钮时触发 | -                                                                                           | -        |
| touchstart | 按下时触发         | `event`                                                                                     | -        |
| touchend   | 按下结束时触发     | `event`                                                                                     | -        |

## Methods

对外暴露函数

| 事件名称 | 说明               | 参数                                                                                        | 最低版本 |
| -------- | ------------------ | ------------------------------------------------------------------------------------------- | -------- |
| confirm  | 点击确认按钮时触发 | `{tempFilePath, width, height}` 分别为生成文件的临时路径 (本地路径)、生成图片宽、生成图片高 | -        |
| clear    | 点击清空按钮时触发 | -                                                                                           | -        |
