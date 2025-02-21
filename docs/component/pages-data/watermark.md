<frame/>

# Watermark 水印

在页面或组件上添加指定的图片或文字，可用于版权保护、品牌宣传等场景。

## 基础用法

将 WaterMark 组件放在页面中，可以通过`content`字段设置水印显示内容，通过`width`和`height`设置单个水印的高度与宽度，展示一个全屏的水印。

```html
<wui-watermark content="elegant-wui-uni" :width="130" :height="130"></wui-watermark>
```

### 图片水印

通过`image`字段设置网络图片地址或 Base64 图片，通过`image-width`和`image-height`字段设置水印图片的宽高。
**注意：钉钉小程序平台仅支持网络图片。**

```html
<wui-watermark image="https://isdm-public.oss-cn-hangzhou.aliyuncs.com/image/vue-logo.png" :image-width="38" :image-height="38"></wui-watermark>
```

### 局部水印

通过`full-screen`设置是否为全屏水印。

```html
<wui-watermark content="elegant-wui-uni" :full-screen="false"></wui-watermark>
```

### 自定义层级和透明度

通过`opacity`设置透明度、`z-index`设置水印层级。

```html
<wui-watermark content="elegant-wui-uni" :opacity="0.4"></wui-watermark>
```

## Attributes

| 参数          | 说明                                                            | 类型    | 可选值                          | 默认值          | 最低版本 |
| ------------- | --------------------------------------------------------------- | ------- | ------------------------------- | --------------- | -------- |
| `content`     | 显示内容                                                        | string  | -                               | `''`            | -        |
| `image`       | 显示图片的地址，支持网络图片和 base64（钉钉小程序支持网络图片） | string  | -                               | `''`            | -        |
| `imageHeight` | 图片高度                                                        | number  | -                               | `100`           | -        |
| `imageWidth`  | 图片宽度                                                        | number  | -                               | `100`           | -        |
| `gutterX`     | X 轴间距，单位 px                                               | number  | -                               | `0`             | -        |
| `gutterY`     | Y 轴间距，单位 px                                               | number  | -                               | `0`             | -        |
| `width`       | canvas 画布宽度，单位 px                                        | number  | -                               | `100`           | -        |
| `height`      | canvas 画布高度，单位 px                                        | number  | -                               | `100`           | -        |
| `fullScreen`  | 是否为全屏水印                                                  | boolean | -                               | `true`          | -        |
| `color`       | 水印字体颜色                                                    | string  | -                               | `'#8c8c8c'`     | -        |
| `size`        | 水印字体大小，单位 px                                           | number  | -                               | `14`            | -        |
| `fontStyle`   | 水印字体样式（仅微信、支付宝和 h5 支持）                        | string  | `normal` / `italic` / `oblique` | `'normal'`      | -        |
| `fontWeight`  | 水印字体的粗细（仅微信、支付宝和 h5 支持）                      | string  | `normal` / `bold` / `bolder`    | `'normal'`      | -        |
| `fontFamily`  | 水印字体系列（仅微信、支付宝和 h5 支持）                        | string  | -                               | `'PingFang SC'` | -        |
| `rotate`      | 水印旋转角度                                                    | number  | -                               | `-25`           | -        |
| `zIndex`      | 自定义层级                                                      | number  | -                               | `1100`          | -        |
| `opacity`     | 自定义透明度，取值 0~1                                          | number  | -                               | `0.5`           | -        |
