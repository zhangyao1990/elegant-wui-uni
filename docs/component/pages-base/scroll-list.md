<frame/>

# ScrollList 横向滚动

横向滚动的视图容器，主要用于菜单导航等场景。

## 基本用法

通过 `slot` 传入。

```html
<wui-scroll-list>
  <view>
    <view class="scroll-list-box">
      <template v-for="(item, index) in 14" :key="index">
        <view class="scroll-list-box__item">
          <view class="scroll-list-box__content">
            <view class="scroll-list-box__icon wui-shadow-blur" :class="[getRandomCoolBgClass(index)]">
              <wui-icon name="github-filled" size="22px"></wui-icon>
            </view>
            <view class="scroll-list-box__text">
              <text class="wui-text-ellipsis">汪汪队{{ item }}</text>
            </view>
          </view>
        </view>
      </template>
    </view>
  </view>
</wui-scroll-list>
```

## 隐藏指示器

设置 `indicator` 属性

```html
<wui-scroll-list :indicator="false">
  <view class="scroll-list-box">
    <template v-for="(item, index) in 14" :key="index">
      <view class="scroll-list-box__item">
        <view class="scroll-list-box__content">
          <view class="scroll-list-box__icon wui-shadow-blur" :class="[getRandomCoolBgClass(index)]">
            <wui-icon name="github-filled" size="22px"></wui-icon>
          </view>
          <view class="scroll-list-box__text">
            <text class="wui-text-ellipsis">汪汪队{{ item }}</text>
          </view>
        </view>
      </view>
    </template>
  </view>
</wui-scroll-list>
```

## 自定义指示器样式

通过设置 `indicator-width` 、 `indicator-bar-width` 、 `indicator-color` 和`indicator-active-color` 属性，可以自定义指示器样式。

```html
<wui-scroll-list :indicator-width="100" :indicator-bar-width="30" indicator-color="#D6F4FA" indicator-active-color="#27A1BA">
  <view class="scroll-list-box">
    <template v-for="(item, index) in 14" :key="index">
      <view class="scroll-list-box__item">
        <view class="scroll-list-box__content">
          <view class="scroll-list-box__icon wui-shadow-blur" :class="[getRandomCoolBgClass(index)]">
            <wui-icon name="github-filled" size="22px"></wui-icon>
          </view>
          <view class="scroll-list-box__text">
            <text class="wui-text-ellipsis">汪汪队{{ item }}</text>
          </view>
        </view>
      </view>
    </template>
  </view>
</wui-scroll-list>
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 最低版本 |
| -------------------- | ---------------- | --------------- | ------ | ------ | |
| indicator | 是否显示指示器 | boolean | - | true | - |
| indicatorWidth | 指示器宽度 | string / number | - | 60 | - |
| indicatorBarWidth | 指示器滑块宽度 | string / number | - | 20 | - |
| indicatorColor | 指示器颜色 | string | - | - | - |
| indicatorActiveColor | 指示器滑块颜色 | string | - | - | - |
| indicatorStyle | 指示器自定义样式 | string | - | - | - |

## Slot

| name    | 说明                         | 参数 | 最低版本 |
| ------- | ---------------------------- | ---- | -------- |
| default | 显示的内容，可自定义内容展示 | -    | -        |

## Events

| 事件名称 | 说明               | 参数 | 最低版本 |
| -------- | ------------------ | ---- | -------- |
| left     | 滑动到最左边时触发 | -    | -        |
| right    | 滑动到最右边时触发 | -    | -        |
