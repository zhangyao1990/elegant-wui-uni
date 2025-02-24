<frame/>

# Text 文本

文本组件，用于展示文本信息。

## 基本用法

设置 `text` 设置文本内容。推荐您使用<code>:text='value'</code>的形式。

```html
<wui-text
  text="芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。黄鹤断矶头，故人曾到否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。"
></wui-text>
```

## 设置主题

通过<code>type</code>参数设置文本主题，我们提供了五类属性：<code>primary</code> <code>error</code> <code>success</code> <code>warning</code> <code>default-默认</code>。

```html
<wui-text type="primary" text="主色"></wui-text>
<wui-text type="error" text="错误"></wui-text>
<wui-text type="success" text="成功"></wui-text>
<wui-text type="warning" text="警告"></wui-text>
<wui-text text="默认"></wui-text>
```

## 自定义字体颜色

设置 `color` 属性。

```html
<wui-text
  text="芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。黄鹤断矶头，故人曾到否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。"
  color="#36B8C2"
></wui-text>
```

## 是否粗体

设置 `bold` 属性。

```html
<wui-text
  text="芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。黄鹤断矶头，故人曾到否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。"
  bold
></wui-text>
```

## 字体大小

设置 `size` 属性。

```html
<wui-text
  text="芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。黄鹤断矶头，故人曾到否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。"
  size="16px"
></wui-text>
```

## 脱敏

设置 `format` 属性,当 `mode` 为 ` phone``name `时生效。

```html
<wui-text text="李四" mode="name" :format="true"></wui-text>
<wui-text text="张长三" mode="name" :format="true"></wui-text>
<wui-text text="18888888888" mode="phone" :format="true"></wui-text>
```

## lines

设置 `lines` 属性,文本显示的行数，如果设置，超出此行数，将会显示省略号。最大值为 5。

```html
<wui-text :text="text" :lines="2" size="16px"></wui-text>
```

## lineHeight

设置 `lineHeight` 文本行高。

```html
<wui-text :text="text" lineHeight="20px"></wui-text>
```

## 前后插槽

设置 `prefix` `suffix` 插槽。

```html
<wui-text text="12345678901" mode="phone" format type="primary" prefix="Prefix" suffix="Suffix" />

<wui-text text="12345678901" mode="phone" format type="primary">
  <template #prefix>
    <text>Prefix</text>
  </template>
  <template #suffix>Suffix</template>
</wui-text>
```

## 金额

设置 `mode="price"` 。

```html
<wui-text text="16354.156" mode="price" type="success" decoration="line-through" prefix="￥" />
```

## 文字装饰

设置 `decoration` 文字装饰，下划线，中划线等。

```html
<wui-text :text="text" type="warning" decoration="underline" />
```

## 事件

```html
<wui-text
  text="芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。黄鹤断矶头，故人曾到否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。"
  @click="clickTest"
></wui-text>
```

```typescript
function clickTest() {
  console.log(1)
}
```

## Attributes

| 参数       | 说明                                                               | 类型            | 可选值                                                                              | 默认值  | 最低版本 |
| ---------- | ------------------------------------------------------------------ | --------------- | ----------------------------------------------------------------------------------- | ------- | -------- |
| type       | 主题类型                                                           | string          | 'primary' / 'error' / 'warning' / 'success'                                         | default | -        |
| text       | 文字                                                               | string / number | -                                                                                   |         | -        |
| size       | 字体大小                                                           | string          | -                                                                                   | -       | -        |
| mode       | 文本处理的匹配模式                                                 | string          | 'text-普通文本' / 'date - 日期' / 'phone - 手机号' / 'name - 姓名' / 'price - 金额' | text    | -+       |
| bold       | 是否粗体，默认 normal                                              | boolean         | -                                                                                   | false   | -        |
| format     | 是否脱敏                                                           | boolean         | 当 mode 为 phone 和 name 时生效                                                     | false   | -        |
| color      | 文字颜色                                                           | string          | -                                                                                   | -       | -        |
| lines      | 文本显示的行数，如果设置，超出此行数，将会显示省略号。最大值为 5。 | Number          | -                                                                                   | -       | -        |
| lineHeight | 文本行高                                                           | string          | -                                                                                   |         | -        |
| decoration | 文字装饰，下划线，中划线等                                         | string          | underline/line-through/overline                                                     |         | -+       |
| prefix     | 前置插槽                                                           | string          | -                                                                                   |         | -+       |
| suffix     | 后置插槽                                                           | string          | -                                                                                   |         | -+       |

## Events

| 事件名称 | 说明           | 参数  | 最低版本 |
| -------- | -------------- | ----- | -------- |
| click    | 标签点击时触发 | event | -        |

## 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |
| custom-style | 根节点样式 | -        |
