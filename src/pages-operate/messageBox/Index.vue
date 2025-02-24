<template>
  <view class="page-message-box">
    <page-wraper>
      <wui-message-box></wui-message-box>
      <wui-message-box selector="wui-message-box-slot">
        <wui-rate v-model="rate" />
      </wui-message-box>
      <demo-block title="alert">
        <wui-button @click="alert">alert</wui-button>
      </demo-block>

      <demo-block title="显示标题">
        <wui-button @click="alertWithTitle">alert</wui-button>
      </demo-block>

      <demo-block title="confirm">
        <wui-button @click="confirm">confirm</wui-button>
      </demo-block>

      <demo-block title="prompt">
        <wui-button @click="prompt">prompt</wui-button>
      </demo-block>

      <demo-block title="当文案过长时，弹框的高度不再增加，而是将文案内容设置成滚动">
        <wui-button @click="alertWithLongChar">alert</wui-button>
      </demo-block>

      <demo-block title="使用wui-message-box组件，通过slot插入其他组件内容">
        <wui-button @click="withSlot">custom</wui-button>
      </demo-block>

      <demo-block title="使用beforeConfirm钩子，在弹框确认前，可以进行一些操作">
        <wui-button @click="beforeConfirm">beforeConfirm</wui-button>
      </demo-block>

      <demo-block title="通过button-props自定义按钮">
        <wui-button @click="withButtonProps">withButtonProps</wui-button>
      </demo-block>
    </page-wraper>
  </view>
</template>
<script lang="ts" setup>
import { useMessage, useToast } from '@/uni_modules/elegant-wui-uni'
import { ref } from 'vue'
const rate = ref<number>(1)
const value1 = ref<string>('')

const toast = useToast()
const message = useMessage()
const message1 = useMessage('wui-message-box-slot')

function alert() {
  message.alert('操作成功')
}
function alertWithTitle() {
  message.alert({
    msg: '提示文案',
    title: '标题'
  })
}
function confirm() {
  message
    .confirm({
      msg: '是否删除',
      title: '提示'
    })
    .catch((error) => {
      console.log(error)
    })
}
function prompt() {
  message
    .prompt({
      title: '请输入邮箱',
      inputValue: value1.value,
      inputPattern: /.+@.+\..+/i
    })
    .then((resp) => {
      console.log(resp)
    })
    .catch((error) => {
      console.log(error)
    })
}
function alertWithLongChar() {
  message.alert({
    msg: '以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文',
    title: '标题'
  })
}

function beforeConfirm() {
  message
    .confirm({
      msg: '是否删除',
      title: '提示',
      beforeConfirm: ({ resolve }) => {
        toast.loading('删除中...')
        setTimeout(() => {
          toast.close()
          resolve(true)
          toast.success('删除成功')
        }, 3000)
      }
    })
    .then(() => {})
    .catch((error) => {
      console.log(error)
    })
}

function withButtonProps() {
  message
    .confirm({
      msg: '自定义按钮样式',
      title: '提示',
      cancelButtonProps: {
        round: false,
        type: 'error',
        customClass: 'custom-shadow'
      },
      confirmButtonProps: {
        round: false,
        type: 'success',
        customClass: 'custom-shadow'
      }
    })
    .then(() => {})
    .catch((error) => {
      console.log(error)
    })
}

function withSlot() {
  message1
    .confirm({
      title: '评分'
    })
    .then(() => {
      message.alert(`你的评分为：${rate.value}分`)
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>
<style lang="scss" scoped>
.page-message-box {
  :deep() {
    .custom-shadow {
      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    }
  }
}
</style>
