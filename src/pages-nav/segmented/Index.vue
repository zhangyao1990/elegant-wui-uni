<template>
  <view>
    <wui-toast />
    <page-wraper>
      <demo-block title="大型分段器" transparent>
        <view class="section">
          <wui-segmented :options="list" v-model:value="current" size="large" @change="handleChange"></wui-segmented>
        </view>
      </demo-block>
      <demo-block title="默认分段器" transparent>
        <view class="section">
          <wui-segmented :options="list" v-model:value="current1"></wui-segmented>
        </view>
      </demo-block>

      <demo-block title="小型分段器" transparent>
        <view class="section">
          <wui-segmented :options="list" v-model:value="current2" size="small"></wui-segmented>
        </view>
      </demo-block>

      <demo-block title="带振动效果的分段器" transparent>
        <view class="section">
          <wui-segmented :options="list" v-model:value="current3" :vibrate-short="true"></wui-segmented>
        </view>
      </demo-block>

      <demo-block title="禁用分段器" transparent>
        <view class="section">
          <wui-segmented :options="list" v-model:value="current5" disabled></wui-segmented>
        </view>
      </demo-block>

      <demo-block title="自定义渲染分段器标签" transparent>
        <view class="section">
          <wui-segmented :options="list1" v-model:value="current4" :vibrate-short="true" @change="handleChange">
            <template #label="{ option }">
              <view class="section-slot">
                <image style="border-radius: 50%; width: 32px; height: 32px" :src="option.payload.avatar" />

                <view class="name">
                  {{ option.value }}
                </view>
              </view>
            </template>
          </wui-segmented>
        </view>
      </demo-block>
      <demo-block title="在弹出框中使用" transparent>
        <view class="section">
          <wui-button @click="handleClick">打开弹窗</wui-button>
        </view>
      </demo-block>
      <wui-popup v-model="showPopup" position="bottom" @after-enter="handlePopupShow" closable custom-style="height: 300px;padding: 0 24rpx;">
        <view class="title">在弹出框中使用</view>
        <wui-segmented :options="list" v-model:value="current6" @change="handleChange" ref="segmentedRef"></wui-segmented>
      </wui-popup>
    </page-wraper>
  </view>
</template>
<script lang="ts" setup>
import type { SegmentedInstance, SegmentedOption } from '@/uni_modules/elegant-wui-uni/components/wui-segmented/types'
import { ref } from 'vue'

const list = ref<string[]>(['评论', '点赞', '贡献', '打赏'])

const list1 = ref([
  {
    value: '李雷',
    disabled: false,
    payload: {
      avatar: 'https://cdn.pixabay.com/photo/2023/03/13/23/48/woman-7851025_960_720.jpg'
    }
  },
  {
    value: '韩梅梅',
    disabled: false,
    payload: {
      avatar: 'https://cdn.pixabay.com/photo/2022/06/26/12/48/animal-7285346_960_720.jpg'
    }
  },
  {
    value: '林涛',
    disabled: true,
    payload: {
      avatar: 'https://cdn.pixabay.com/photo/2024/11/24/06/33/fireworks-9220290_960_720.jpg'
    }
  },
  {
    value: 'Tom',
    disabled: false,
    payload: {
      avatar: 'https://cdn.pixabay.com/photo/2022/10/02/06/12/dent-blanche-7492786_960_720.jpg'
    }
  }
])

const current = ref('简介')

const current1 = ref('详情')

const current2 = ref('评论')

const current3 = ref('打赏')

const current4 = ref('韩梅梅')

const current5 = ref('评论')

function handleChange(option: SegmentedOption) {
  console.log(option)
}
const current6 = ref('点赞')
const segmentedRef = ref<SegmentedInstance>()
const showPopup = ref(false)
function handleClick() {
  showPopup.value = true
}
function handlePopupShow() {
  segmentedRef.value?.updateActiveStyle()
}
</script>
<style lang="scss" scoped>
.section {
  width: 100%;
  padding: 0 24rpx;
  box-sizing: border-box;
  &-slot {
    padding: 4px;
  }
}

.title {
  display: flex;
  font-size: 32rpx;
  align-items: center;
  justify-content: center;
  padding: 24rpx 0;
}
</style>
