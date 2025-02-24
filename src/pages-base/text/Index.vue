<template>
  <page-wraper>
    <demo-block title="基本用法">
      <wui-text :text="text"></wui-text>
    </demo-block>

    <demo-block title="设置主题">
      <view style="display: flex">
        <wui-text type="primary" text="主色"></wui-text>
        <wui-text type="error" text="错误"></wui-text>
        <wui-text type="success" text="成功"></wui-text>
        <wui-text type="warning" text="警告"></wui-text>
        <wui-text text="默认"></wui-text>
      </view>
    </demo-block>

    <demo-block title="自定义字体颜色">
      <wui-text :text="text" color="#36B8C2"></wui-text>
    </demo-block>

    <demo-block title="是否粗体">
      <wui-text :text="text" bold></wui-text>
    </demo-block>

    <demo-block title="字体大小">
      <wui-text :text="text" size="16px"></wui-text>
    </demo-block>

    <demo-block title="脱敏">
      <view style="display: flex; align-items: center">
        <wui-text text="张三丰" mode="name" :format="true"></wui-text>
        <wui-text text="15858585858" mode="phone" :format="true"></wui-text>
      </view>
    </demo-block>

    <demo-block title="lines">
      <view>
        <wui-text :text="text" :lines="2" size="16px"></wui-text>
      </view>
    </demo-block>

    <demo-block title="lineHeight">
      <wui-text :text="text" :lines="2" lineHeight="20px"></wui-text>
    </demo-block>

    <demo-block title="mode">
      <view>
        <view><wui-text text="15858585858" mode="phone"></wui-text></view>
        <view><wui-text text="王三" mode="name"></wui-text></view>
        <view><wui-text text="15858585858" mode="date"></wui-text></view>
      </view>
    </demo-block>

    <demo-block title="前后插槽">
      <view>
        <wui-text text="15858585858" mode="phone" format type="primary" prefix="Prefix" suffix="Suffix" />
        <br />
        <wui-text text="15858585858" mode="phone" format type="primary">
          <template #prefix>
            <text>Prefix</text>
          </template>
          <template #suffix>Suffix</template>
        </wui-text>
      </view>
    </demo-block>

    <demo-block title="金额">
      <view>
        <wui-text text="16354.156" mode="price" type="success" decoration="line-through" prefix="￥" />
      </view>
    </demo-block>

    <demo-block title="文字装饰">
      <view>
        <wui-text :text="text" type="warning" decoration="underline" />
      </view>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const text = ref<string>(
  '怒发冲冠，凭阑处、潇潇雨歇。抬望眼，仰天长啸，壮怀激烈。三十功名尘与土，八千里路云和月。莫等闲，白了少年头，空悲切。靖康耻，犹未雪；臣子恨，何时灭？驾长车，踏破贺兰山缺。壮志饥餐胡虏肉，笑谈渴饮匈奴血。待从头，收拾旧山河，朝天阙。'
)
function clickTest() {
  console.log(1)
}
</script>
<style lang="scss" scoped></style>
