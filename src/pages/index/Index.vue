<template>
  <page-wraper :use-wx-ad="false">
    <view class="page">
      <view class="page__hd">
        <view class="wui-top-bg">
          <image src="https://isdm-public.oss-cn-hangzhou.aliyuncs.com/image/component-home-base-bj.jpg" mode="widthFix" class="wui-bg-image"></image>
        </view>
      </view>
      <view class="page__bd">
        <block v-for="(item, index) in list" :key="index">
          <view class="nav_title--wrap">
            <view class="nav_title">{{ titleFilter(item.name) }}</view>
          </view>
          <view class="nav-list">
            <block v-for="(content_item, content_index) in item.pages" :key="content_index">
              <navigator
                open-type="navigate"
                hover-class="none"
                :url="`/${item.subPackages}/${content_item.id}/Index`"
                class="nav-list-item wui-shadow-blur wui-cool-bg-image"
                :class="[getRandomCoolBgClass(content_index)]"
              >
                <view class="nav-link">
                  <view class="title">{{ content_item.name }}</view>
                </view>
                <view class="icon">
                  <image :src="item.icon" class="nav-link__icon"></image>
                </view>
              </navigator>
            </block>
          </view>
        </block>
      </view>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const imgModules: any = import.meta.glob('../../assets/images/*.png', { eager: true })

const list = ref([
  {
    id: 'widget',
    name: '基础组件',
    subPackages:'pages-base',
    open: false,
    icon: imgModules['../../assets/images/icon_nav_widget.png'].default,
    pages: [
      {
        id: 'button',
        name: 'Button 按钮'
      },
      {
        id: 'icon',
        name: 'Icon 图标'
      },
      {
        id: 'layout',
        name: 'Layout 布局'
      },
      {
        id: 'configProvider',
        name: '全局配置'
      },
      {
        id: 'popup',
        name: 'Popup 弹出层'
      },
      {
        id: 'resize',
        name: '监听元素尺寸变化'
      },
      {
        id: 'transition',
        name: 'Transition 动画'
      },
      {
        id: 'fab',
        name: 'Fab 悬浮按钮'
      },
      {
        id: 'text',
        name: 'Text 文本'
      },
      {
        id: 'scrollList',
        name: 'scrollList 横向滚动'
      }
    ]
  },
  {
    id: 'nav',
    name: '导航',
    subPackages: 'pages-nav',
    open: false,
    icon: imgModules['../../assets/images/icon_nav_nav.png'].default,

    pages: [
      {
        id: 'pagination',
        name: 'Pagination 分页'
      },
      {
        id: 'popover',
        name: 'Popover 气泡'
      },
      {
        id: 'tabs',
        name: 'Tabs 标签页'
      },
      {
        id: 'segmented',
        name: 'Segmented 分段器'
      },
      {
        id: 'tabbar',
        name: 'Tabbar 标签栏'
      },
      {
        id: 'navbar',
        name: 'Navbar 导航栏'
      },
      {
        id: 'sidebar',
        name: 'Sidebar 侧边栏'
      },
      {
        id: 'backtop',
        name: 'Backtop 回到顶部'
      },
      {
        id: 'indexBar',
        name: 'IndexBar 索引栏'
      }
    ]
  },
  {
    id: 'form',
    name: '数据输入',
    subPackages: 'pages-form',
    open: false,
    icon: imgModules['../../assets/images/icon_nav_form.png'].default,
    pages: [
      {
        id: 'calendar',
        name: '日历选择器'
      },
      {
        id: 'calendarView',
        name: '日历面板'
      },
      {
        id: 'checkbox',
        name: 'Checkbox 复选框'
      },
      {
        id: 'colPicker',
        name: 'ColPicker 多列选择器'
      },
      {
        id: 'datetimePicker',
        name: '时间选择器'
      },
      {
        id: 'datetimePickerView',
        name: '时间选择器视图'
      },
      {
        id: 'input',
        name: 'Input 输入框'
      },
      {
        id: 'textarea',
        name: 'Textarea 文本域'
      },
      {
        id: 'inputNumber',
        name: 'InputNumber 计数器'
      },
      {
        id: 'picker',
        name: 'Picker 选择器'
      },
      {
        id: 'pickerView',
        name: 'PickerView 选择器视图'
      },
      {
        id: 'radio',
        name: 'Radio 单选框'
      },
      {
        id: 'rate',
        name: 'Rate 评分'
      },
      {
        id: 'search',
        name: 'Search 搜索'
      },
      {
        id: 'selectPicker',
        name: '单复选选择器'
      },
      {
        id: 'slider',
        name: 'Slider 滑块'
      },
      {
        id: 'switch',
        name: 'Switch 开关'
      },
      {
        id: 'form',
        name: 'Form 表单'
      },
      {
        id: 'upload',
        name: 'Upload 上传'
      },
      {
        id: 'passwordInput',
        name: '密码输入框'
      },
      {
        id: 'signature',
        name: 'Signature 签名'
      }
    ]
  },
  {
    id: 'feedback',
    name: '反馈',
    subPackages: 'pages-operate',
    open: false,
    icon: imgModules['../../assets/images/icon_nav_feedback.png'].default,
    pages: [
      {
        id: 'actionSheet',
        name: '上拉菜单'
      },
      {
        id: 'dropMenu',
        name: 'DropMenu 下拉菜单'
      },
      {
        id: 'floatingPanel',
        name: '浮动面板'
      },
      {
        id: 'loading',
        name: 'Loading 加载指示器'
      },
      {
        id: 'messageBox',
        name: 'MessageBox 弹框'
      },
      {
        id: 'overlay',
        name: 'Overlay 遮罩层'
      },
      {
        id: 'noticeBar',
        name: 'NoticeBar 通知栏'
      },
      {
        id: 'progress',
        name: 'Progress 进度条'
      },
      {
        id: 'circle',
        name: 'Circle 环形进度条'
      },
      {
        id: 'sortButton',
        name: 'SortButton 排序按钮'
      },
      {
        id: 'statusTip',
        name: 'StatusTip 缺省提示'
      },
      {
        id: 'swipeAction',
        name: 'SwipeAction 滑动操作'
      },
      {
        id: 'toast',
        name: 'Toast 轻提示'
      },
      {
        id: 'notify',
        name: 'Notify 消息通知'
      },
      {
        id: 'tooltip',
        name: 'Tooltip 文字提示'
      },
      {
        id: 'countDown',
        name: 'CountDown 倒计时'
      },
      {
        id: 'countTo',
        name: 'CountTo 数字滚动'
      },
      {
        id: 'keyboard',
        name: '虚拟键盘'
      },
      {
        id: 'numberKeyboard',
        name: '数字键盘'
      }
    ]
  },
  {
    id: 'show',
    name: '数据展示',
    subPackages: 'pages-data',
    open: false,
    icon: imgModules['../../assets/images/icon_nav_show.png'].default,
    pages: [
      {
        id: 'badge',
        name: 'Badge 徽标'
      },
      {
        id: 'card',
        name: 'Card 卡片'
      },
      {
        id: 'cell',
        name: 'Cell 单元格'
      },
      {
        id: 'collapse',
        name: 'Collapse 折叠面板'
      },
      {
        id: 'curtain',
        name: 'Curtain 幕帘'
      },
      {
        id: 'divider',
        name: 'Divider 分割线'
      },
      {
        id: 'gap',
        name: 'Gap 间隔槽'
      },
      {
        id: 'img',
        name: 'Img 图片'
      },
      {
        id: 'imgCropper',
        name: 'imgCropper 图片裁剪'
      },
      {
        id: 'grid',
        name: 'Grid 宫格'
      },
      {
        id: 'loadmore',
        name: 'Loadmore 加载更多'
      },
      {
        id: 'skeleton',
        name: 'Skeleton 骨架屏'
      },
      {
        id: 'steps',
        name: 'Steps 步骤条'
      },
      {
        id: 'sticky',
        name: 'Sticky 吸顶布局'
      },
      {
        id: 'tag',
        name: 'Tag 标签'
      },
      {
        id: 'watermark',
        name: 'Watermark 水印'
      },
      {
        id: 'swiper',
        name: 'Swiper 轮播图'
      },
      {
        id: 'table',
        name: 'Table 表格'
      },
      {
        id: 'waterFall',
        name: 'WaterFall 瀑布流'
      }
    ]
  }
])
/**
 * 随机获取酷炫背景对应的类
 */
function getRandomCoolBgClass(idx?: number) {
  const COOL_BG_COLOR_COUNT = 16
  const index = Math.random() * COOL_BG_COLOR_COUNT + 1
  return 'wui-cool-bg-color-' + Math.floor(index)
}
const titleFilter = (value: string) => {
  if (value.length === 0) {
    return ''
  }
  let newString = ''
  for (let i = 0; i < value.length; i++) {
    if (i !== 0) {
      newString += ' / '
    }
    newString += value[i]
  }
  return newString
}
</script>

<style lang="scss" scoped>
.page-wraper {
  background: #ffffff;
}
.page__hd {
  .wui-top-bg {
    height: 450rpx;
    z-index: -1;

    .wui-bg-image {
      width: 100%;
      height: 667rpx;
    }
  }
}

.page__bd {
  user-select: none;
  .nav_title {
    -webkit-background-clip: text;
    color: transparent;
    background-image: repeating-linear-gradient(45deg, #ff3181, #ff8331);

    &--wrap {
      position: relative;
      display: flex;
      height: 120rpx;
      font-size: 46rpx;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      background-image: url(https://isdm-public.oss-cn-hangzhou.aliyuncs.com/image/component-title.png);
      background-size: cover;
      margin-bottom: 20rpx;
    }
  }
  .nav-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 12rpx 0;
    justify-content: space-between;

    /* 列表元素 start */
    .nav-list-item {
      padding: 30rpx 30rpx 20rpx 30rpx;
      border-radius: 12rpx;
      width: 36%;
      margin: 0 18rpx 40rpx;
      background-size: cover;
      background-position: 50%;
      position: relative;
      z-index: 99;
      display: flex;
      justify-content: space-between;
      align-items: center;
      :deep(.navigator-wrap) {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .nav-link {
        font-size: 32rpx;
        line-height: 1.2;
        text-transform: capitalize;
        padding: 0 10rpx 0 0;
        position: relative;
        flex: 1;
        min-width: 0;

        .title {
          color: #ffffff;
          text-align: left;
        }
      }
      .icon {
        font-variant: small-caps;
        width: 70rpx;
        height: 70rpx;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        opacity: 0.9;
        background-color: rgba(0, 0, 0, 0.15);
        background-size: cover;
        background-position: 50%;
        border-radius: 5000rpx;
        .nav-link__icon {
          width: 35rpx;
          height: 35rpx;
        }
      }
    }
  }
}

.wui-shadow-blur {
  position: relative;
}

.wui-shadow-blur::before {
  content: ' ';
  display: block;
  background: inherit;
  filter: blur(10rpx);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 10rpx;
  left: 10rpx;
  z-index: -1;
  opacity: 0.4;
  transform-origin: 0 0;
  border-radius: inherit;
  transform: scale(1, 1);
}
</style>
