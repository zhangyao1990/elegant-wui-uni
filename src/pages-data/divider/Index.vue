<template>
  <page-wraper>
    <demo-block title="基本用法" transparent>
      <wui-divider></wui-divider>
    </demo-block>
    <demo-block title="展示文本" transparent>
      <wui-divider>展示文本</wui-divider>
    </demo-block>
    <demo-block title="自定义渲染内容" transparent>
      <wui-divider>
        <wui-icon name="arrow-down" size="20" />
      </wui-divider>
    </demo-block>
    <demo-block title="内容位置" transparent>
      <wui-divider>中间</wui-divider>
      <wui-divider content-position="left">左侧</wui-divider>
      <wui-divider content-position="right">右侧</wui-divider>
    </demo-block>
    <demo-block title="虚线" transparent>
      <wui-divider dashed>虚线分割</wui-divider>
    </demo-block>
    <demo-block title="自定义颜色" transparent>
      <wui-divider color="#4D80F0">自定义颜色</wui-divider>
    </demo-block>
    <demo-block title="customClass" transparent>
      <wui-divider customClass="custom-class">customClass</wui-divider>
    </demo-block>
    <demo-block title="垂直分割线" transparent>
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
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.content {
  padding: 12rpx 15rpx;
}
.custom-class {
  margin: 0 auto;
  width: 375rpx;
}
</style>
