# useMessage

用于便捷地调用 MessageBox 弹框组件。

## Alert 弹框

alert 弹框只有确定按钮，用于强提醒。

```html
<wui-message-box></wui-message-box>
<wui-button @click="alert">alert</wui-button>
```

```ts
import { useMessage } from '@/uni_modules/elegant-wui-uni'
const message = useMessage()

function alert() {
  message.alert('操作成功')
}
```

## Confirm 弹框

用于提示用户操作。

```html
<wui-message-box />
<wui-button @click="confirm">confirm</wui-button>
```

```ts
import { useMessage } from '@/uni_modules/elegant-wui-uni'
const message = useMessage()

function confirm() {
  message
    .confirm({
      msg: '提示文案',
      title: '标题'
    })
    .then(() => {
      console.log('点击了确定按钮')
    })
    .catch(() => {
      console.log('点击了取消按钮')
    })
}
```

## Prompt 弹框

prompt 会展示一个输入框，并可以进行输入校验。

```html
<wui-message-box />
<wui-button @click="prompt">prompt</wui-button>
```

```ts
import { useMessage } from '@/uni_modules/elegant-wui-uni'
const message = useMessage()

function prompt() {
  message
    .prompt({
      title: '请输入邮箱',
      inputPattern: /.+@.+\..+/i,
      inputError: '邮箱格式不正确'
    })
    .then((resp) => {
      console.log(resp)
    })
    .catch((error) => {
      console.log(error)
    })
}
```

## API

### Methods

| 方法名称 | 说明              | 参数    |
| -------- | ----------------- | ------- |
| show     | 展示弹框          | options |
| alert    | 展示 Alert 弹框   | options |
| confirm  | 展示 Confirm 弹框 | options |
| prompt   | 展示 Prompt 弹框  | options |
| close    | 关闭弹框          | -       |

### Options

| 参数              | 说明                                                   | 类型            | 可选值                   | 默认值           |
| ----------------- | ------------------------------------------------------ | --------------- | ------------------------ | ---------------- |
| title             | 标题                                                   | string          | -                        | -                |
| msg               | 消息文案                                               | string          | -                        | -                |
| type              | 弹框类型                                               | string          | alert / confirm / prompt | alert            |
| closeOnClickModal | 是否支持点击蒙层进行关闭                               | boolean         | -                        | true             |
| inputType         | 当 type 为 prompt 时，输入框类型                       | string          | -                        | text             |
| inputValue        | 当 type 为 prompt 时，输入框初始值                     | string / number | -                        | -                |
| inputPlaceholder  | 当 type 为 prompt 时，输入框 placeholder               | string          | -                        | 请输入内容       |
| inputPattern      | 当 type 为 prompt 时，输入框正则校验                   | RegExp          | -                        | -                |
| inputValidate     | 当 type 为 prompt 时，输入框校验函数                   | function        | -                        | -                |
| inputError        | 当 type 为 prompt 时，输入框检验不通过时的错误提示文案 | string          | -                        | 输入的数据不合法 |
| confirmButtonText | 确定按钮文案                                           | string          | -                        | 确定             |
| cancelButtonText  | 取消按钮文案                                           | string          | -                        | 取消             |
| zIndex            | 弹窗层级                                               | number          | -                        | 99               |
| selector          | 指定唯一标识                                           | string          | -                        | ''               |
