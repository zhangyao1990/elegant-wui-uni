<template>
  <page-wraper>
    <wui-toast />

    <view @click="closeOutside" class="wrapper">
      <demo-block title="位置">
        <wui-radio-group v-model="placement" inline shape="dot">
          <wui-radio value="bottom" custom-class="custom-radio">bottom</wui-radio>
          <wui-radio value="bottom-start" custom-class="custom-radio">bottom-start</wui-radio>
          <wui-radio value="bottom-end" custom-class="custom-radio">bottom-end</wui-radio>
          <wui-radio value="top" custom-class="custom-radio">top</wui-radio>
          <wui-radio value="top-start" custom-class="custom-radio">top-start</wui-radio>
          <wui-radio value="top-end" custom-class="custom-radio">top-end</wui-radio>
          <wui-radio value="left" custom-class="custom-radio">left</wui-radio>
          <wui-radio value="left-start" custom-class="custom-radio">left-start</wui-radio>
          <wui-radio value="left-end" custom-class="custom-radio">left-end</wui-radio>
          <wui-radio value="right" custom-class="custom-radio">right</wui-radio>
          <wui-radio value="right-start" custom-class="custom-radio">right-start</wui-radio>
          <wui-radio value="right-end" custom-class="custom-radio">right-end</wui-radio>
        </wui-radio-group>
      </demo-block>
      <demo-block custom-class="pop" title="基本用法">
        <view class="center">
          <wui-popover id="pop1" content="这是一段内容。" :placement="placement" v-model="show1" @change="handleChange1">
            <wui-button data-id="pop1">点击展示</wui-button>
          </wui-popover>
        </view>
      </demo-block>

      <demo-block custom-class="pop" title="嵌套信息">
        <view class="center list">
          <wui-popover v-model="show2" use-content-slot :placement="placement" @change="handleChange2">
            <template #content>
              <view class="pop-content">这是一段自定义样式的内容。</view>
            </template>
            <wui-button>点击展示</wui-button>
          </wui-popover>
        </view>
      </demo-block>

      <demo-block custom-class="pop" title="列表展示">
        <view class="center list">
          <wui-popover v-model="show3" mode="menu" :placement="placement" :content="menu" @menuclick="link" @change="handleChange3">
            <wui-button>列表</wui-button>
          </wui-popover>
        </view>
      </demo-block>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/elegant-wui-uni'
import { ref } from 'vue'
import { useQueue } from '@/uni_modules/elegant-wui-uni'
import type { PlacementType } from '@/uni_modules/elegant-wui-uni/components/wui-popover/types'

const { closeOutside } = useQueue()
const toast = useToast()

const placement = ref<PlacementType>('bottom')

const show1 = ref<boolean>(false)
const show2 = ref<boolean>(false)
const show3 = ref<boolean>(false)

const menu = ref<Array<Record<string, any>>>([
  {
    iconClass: 'read',
    content: '全部标记已读'
  },
  {
    iconClass: 'delete',
    content: '清空最近会话'
  },
  {
    iconClass: 'detection',
    content: '消息订阅设置'
  },
  {
    iconClass: 'subscribe',
    content: '消息异常检测'
  }
])

function link(e: any) {
  toast.show('选择了' + e.item.content)
}

function showPop(index: number) {
  // if (pop && pop.id !== id) {
  //   closeOtherPop()
  // }
  // pop = selectComponent('#' + id)
}

function handleChange1() {
  // show1.value = event.detail.show
}

function handleChange2() {
  // show2.value = event.detail.show
}
function handleChange3() {
  // show3.value = event.detail.show
}
</script>
<style lang="scss" scoped>
.center {
  text-align: center;
  padding-bottom: 20px;
}
:deep(.pop) {
  overflow: visible !important;
  padding: 10px;
}
:deep(.custom-radio) {
  height: 32px !important;
  line-height: 32px !important;
}
.wrapper {
  width: 100%;
  height: 100vh;
}
.pop-content {
  /* 必填 开始 */
  position: relative;
  z-index: 500;
  border-radius: 4px;
  /* 必填 结束 */
  background: #fff;
  color: #8268de;
  font-weight: bolder;
  padding: 10px;
  width: 150px;
}
</style>
