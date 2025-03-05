<frame/>

# CubicBezier 贝塞尔曲线 <el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">$LOWEST_VERSION$</el-tag>

可用于加入购物车动画。

## 左下方动画

通过 `left` 属性设置购物车（终点）中心位置 left 值，`bottom` 属性设置购物车（终点）中心位置 bottom 值，`param` 属性为自定义参数，`@click` 事件为点击目标元素开始执行动画。

```html
<wui-cell title="点击加号加入购物车" center>
  <view class="cubic-bezier-right">
    <wui-cubic-bezier :navbar="false" :left="left" :bottom="bottom" :param="0" @click="handleClick">
      <wui-icon name="add-circle" size="22px"></wui-icon>
      <template v-slot:badge>
        <view class="wui-badge">1</view>
      </template>
    </wui-cubic-bezier>
  </view>
</wui-cell>
```

```js
//data数据
left: 116,
bottom: 140
```

### 右下方动画

通过 `direction` 属性设置动画方向， `right` 属性设置购物车（终点）中心位置 right 值，`bottom` 属性设置购物车（终点）中心位置 bottom 值，`param` 属性为自定义参数，`@click` 事件为点击目标元素开始执行动画。

```html
<wui-cell title="点击加号加入购物车" center>
  <view class="cubic-bezier-right">
    <wui-cubic-bezier direction="rb" :navbar="false" :right="right" :bottom="bottom" :param="0" @click="handleClick">
      <wui-icon name="add-circle" size="22px"></wui-icon>
      <template v-slot:badge>
        <view class="wui-badge">1</view>
      </template>
    </wui-cubic-bezier>
  </view>
</wui-cell>
```

```js
//data数据
right: 100,
bottom: 140
```

## Attributes

| 参数      | 说明                                                                     | 类型            | 可选值                                         | 默认值 | 最低版本         |
| --------- | ------------------------------------------------------------------------ | --------------- | ---------------------------------------------- | ------ | ---------------- |
| direction | 动画方向                                                                 | string          | rt（右上）、rb（右下）、lb（左下）、lt（左上） | lb     | $LOWEST_VERSION$ |
| top       | 购物车（终点）中心位置 top 值，单位 rpx，direction 值为 rt，lt 时传值    | number / string | -                                              | 100    | $LOWEST_VERSION$ |
| bottom    | 购物车（终点）中心位置 bottom 值，单位 rpx，direction 值为 rb，lb 时传值 | number / string | -                                              | 100    | $LOWEST_VERSION$ |
| left      | 购物车（终点）中心位置 left 值，单位 rpx，direction 值为 lb，lt 时传值   | number / string | -                                              | 60     | $LOWEST_VERSION$ |
| right     | 购物车（终点）中心位置 right 值，单位 rpx，direction 值为 rt，rb 时传值  | number / string | -                                              | 60     | $LOWEST_VERSION$ |
| navbar    | 页面是否使用了原生导航栏，使用了自定义导航栏时传 false                   | boolean         | -                                              | true   | $LOWEST_VERSION$ |
| param     | 自定义参数                                                               | number / string | -                                              | 0      | $LOWEST_VERSION$ |

## Events

| 事件名称 | 说明                         | 参数                 | 最低版本         |
| -------- | ---------------------------- | -------------------- | ---------------- |
| click    | 点击目标（加号等）元素时触发 | `{param:自定义参数}` | $LOWEST_VERSION$ |

## Slots

| name    | 说明             | 最低版本         |
| ------- | ---------------- | ---------------- |
| default | 目标（点击）元素 | $LOWEST_VERSION$ |
| badge   | 动画元素         | $LOWEST_VERSION$ |
