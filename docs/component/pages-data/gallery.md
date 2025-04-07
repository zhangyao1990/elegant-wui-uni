<frame/>

# Gallery 画廊

一般用于图片预览。

## 基本用法

通过 `v-model` 属性设置显示隐藏，必填项。

`src` 为幕帘图片地址（只支持在线地址），值为 `string` 类型，必填项。

`to` 为幕帘点击访问链接，值为 `string` 类型，非必填项。

```html
<page-wraper>
  <demo-block title="基本用法" transparent>
    <wui-button type="success" @click="showGallery">基础用法</wui-button>
  </demo-block>
  <wui-gallery :urls="urls" :show="show" @hide="hideGallery"></wui-gallery>
</page-wraper>
```

```typescript
const show = ref<any>(false)

const urls = ref([
  'https://gips3.baidu.com/it/u=1821127123,1149655687&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280',
  'https://gips0.baidu.com/it/u=1490237218,4115737545&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720',
  'https://gips1.baidu.com/it/u=1647344915,1746921568&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280'
])
function showGallery() {
  show.value = true
}
function hideGallery() {
  show.value = false
}
```
```js
// urls 数据格式说明

//第一种格式，字符串数组
urls:['https://specialdisease-oss.gjwlyy.com/prileImg/1654065014280_.jpg']

//第二种格式，以下为约定属性，其他属性值可自行扩展
urls:[{
	//图片链接地址
	src: 'https://specialdisease-oss.gjwlyy.com/prileImg/1654065014280_.jpg',
	//文字描述，可选
	descr: 'wlyyui 是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。'
}]

```
## Attributes

| 参数     | 说明                         | 类型           | 可选值 | 默认值 | 最低版本 |
| -------- | ---------------------------- | -------------- | ------ | ------ | -------- |
| urls     | 图片数据                     | array          | -      | [ ]    | -        |
| show     | 是否显示预览                 | boolean        | -      | false  | -        |
| current  | 当前所在滑块的索引值         | number, string | -      | 0      | -        |
| ellipsis | 文字描述超出一行是否隐藏省略 | boolean        | -      | false  | -        |
| zIndex   | 层级 z-index 值              | number, string | -      | 1001   | -        |
| safeArea | 是否适配底部安全区           | boolean        | -      | true   | -        |

## Events

| 事件名称 | 说明                                             | 参数 | 最低版本 |
| -------- | ------------------------------------------------ | ---- | -------- |
| change   | 图片左右切换时触发                               | -    | -        |
| hide     | 点击图片或滑块时触发，通过控制属性 show 关闭预览 | -    | -        |

## Slots

| name | 说明 | 最低版本 |
| ---- | ---- | -------- |
| -    | -    | -        |
