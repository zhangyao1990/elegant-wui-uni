<template>
  <view>
    <page-wraper>
      <demo-block title="基本用法">
        <view>
          <wui-tag custom-class="space">标签</wui-tag>
          <wui-tag custom-class="space" type="primary">标签</wui-tag>
          <wui-tag custom-class="space" type="danger">标签</wui-tag>
          <wui-tag custom-class="space" type="warning">标签</wui-tag>
          <wui-tag custom-class="space" type="success">标签</wui-tag>
        </view>
      </demo-block>

      <demo-block title="幽灵标签">
        <view>
          <wui-tag custom-class="space" plain>标签</wui-tag>
          <wui-tag custom-class="space" plain type="primary">标签</wui-tag>
          <wui-tag custom-class="space" plain type="danger">标签</wui-tag>
          <wui-tag custom-class="space" plain type="warning">标签</wui-tag>
          <wui-tag custom-class="space" plain type="success">标签</wui-tag>
        </view>
      </demo-block>

      <demo-block title="标记标签">
        <view>
          <wui-tag custom-class="space" mark>标签</wui-tag>
          <wui-tag custom-class="space" type="primary" mark>标签</wui-tag>
          <wui-tag custom-class="space" type="danger" mark>标签</wui-tag>
          <wui-tag custom-class="space" type="warning" mark>标签</wui-tag>
          <wui-tag custom-class="space" type="success" mark>标签</wui-tag>
        </view>
      </demo-block>

      <demo-block title="幽灵标记标签">
        <view>
          <wui-tag custom-class="space" mark plain>标签</wui-tag>
          <wui-tag custom-class="space" type="primary" mark plain>标签</wui-tag>
          <wui-tag custom-class="space" type="danger" mark plain>标签</wui-tag>
          <wui-tag custom-class="space" type="warning" mark plain>标签</wui-tag>
          <wui-tag custom-class="space" type="success" mark plain>标签</wui-tag>
        </view>
      </demo-block>

      <demo-block title="圆角标签">
        <view>
          <wui-tag custom-class="space" round>标签</wui-tag>
          <wui-tag custom-class="space" type="primary" round>标签</wui-tag>
          <wui-tag custom-class="space" type="danger" round>标签</wui-tag>
          <wui-tag custom-class="space" type="warning" round>标签</wui-tag>
          <wui-tag custom-class="space" type="success" round>标签</wui-tag>
        </view>
      </demo-block>

      <demo-block title="设置图标">
        <view>
          <wui-tag custom-class="space" icon="clock" mark>标签</wui-tag>
          <wui-tag custom-class="space" mark use-icon-slot>
            <text>插槽</text>
            <template #icon>
              <wui-icon name="dong" />
            </template>
          </wui-tag>
        </view>
      </demo-block>

      <demo-block title="自定义颜色">
        <view>
          <wui-tag custom-class="space" color="#0083ff" bg-color="#d0e8ff">标签</wui-tag>
          <wui-tag custom-class="space" color="#FAA21E" bg-color="#FAA21E" plain>标签</wui-tag>
        </view>
      </demo-block>

      <demo-block title="可关闭">
        <view>
          <wui-tag
            v-for="(tag, index) in tags"
            :key="index"
            custom-class="space"
            round
            closable
            @click="handleClick(index)"
            @close="handleClose(index)"
          >
            {{ tag.value }}
          </wui-tag>
        </view>
      </demo-block>
      <demo-block title="新增标签">
        <view>
          <wui-tag v-for="(tag, index) in dynamicTags" :key="index" custom-class="space" round closable @close="handleClose1(index)">
            {{ tag }}
          </wui-tag>
          <wui-tag custom-class="space" round dynamic @confirm="handleConfirm"></wui-tag>
          <wui-tag custom-class="space" round dynamic @confirm="handleConfirm">
            <template #add>
              <wui-icon name="pin" size="12px"></wui-icon>
              <text style="margin-left: 4px">自定义</text>
            </template>
          </wui-tag>
        </view>
      </demo-block>
    </page-wraper>
  </view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const tags = ref([
  {
    plain: true,
    closable: true,
    type: 'primary',
    value: '标签一'
  },
  {
    plain: true,
    closable: true,
    type: 'primary',
    value: '标签二'
  },
  {
    plain: true,
    closable: true,
    type: 'primary',
    value: '标签三'
  }
])
const dynamicTags = ref(['标签一', '标签二'])

function handleClick(index: number) {
  console.log('click:index' + index)
}
function handleClose(order: number) {
  tags.value = tags.value.filter((value, index) => index !== order)
  console.log('close:index' + order)
}
function handleClose1(order: number) {
  dynamicTags.value = dynamicTags.value.filter((item, index) => {
    return index !== order
  })
}
function handleConfirm({ value }: any) {
  if (!value) return
  dynamicTags.value = [...dynamicTags.value, value]
}
</script>
<style lang="scss" scoped>
:deep(.space) {
  margin: 0 10px 10px;
}
</style>
