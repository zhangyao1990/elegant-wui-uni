/*
 * @Author: Mr zhang
 * @Date: 2023-07-27 10:26:09
 * @LastEditTime: 2024-11-09 21:52:24
 * @LastEditors: Mr zhang
 * @Description:
 * @FilePath: /elegant-wui-uni/docs/.vitepress/config.mts
 * 记得注释
 */
import { defineConfig } from 'vitepress'
import viteCompression from 'vite-plugin-compression'

import { MarkdownTransform } from './plugins/markdown-transform'

export default defineConfig({
  vite: {
    plugins: [
      MarkdownTransform(),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz'
      })
    ],
    ssr: { noExternal: ['element-plus'] }
  },
  title: `Eleagnt Wui Uni`,
  description: '一个跨端uni-app组件库',
  base: process.env.NODE_ENV === 'production' ? '/elegant-wui-uni/' : '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    [
      'script',
      {},
      `
      !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"3J4q4tM6fN0n1fbZ",ck:"3J4q4tM6fN0n1fbZ"});
   `
    ]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '',
    //     apiKey: '',
    //     indexName: '',
    //   },
    // },
    logo: '/elegant-wui-uni.png',
    lastUpdated: {
      text: '最后更新'
    },
    editLink: {
      pattern: 'https://github.com/zhangyao1990/elegant-wui-uni/edit/master/docs/:path',
      text: '为此页提供修改建议'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/zhangyao1990/elegant-wui-uni' }],
    footer: {
      message: `Released under the MIT License.`,
      copyright: 'Copyright © 2023-present Mr zhang'
    },
    nav: [
      {
        text: '指南',
        activeMatch: '/guide/',
        items: [
          {
            text: '介绍',
            link: '/guide/introduction'
          },
          {
            text: '快速上手',
            link: '/guide/quick-use'
          },
          {
            text: '定制主题',
            link: '/guide/custom-theme'
          },
          {
            text: '常见问题',
            link: '/guide/common-problems'
          },
          {
            text: '国际化',
            link: '/guide/locale'
          }
        ]
      },
      {
        text: '组件',
        activeMatch: '/component/',
        items: [
          {
            text: '基础组件',
            link: '/component/pages-base/button'
          },
          {
            text: '导航组件',
            link: '/component/pages-nav/pagination'
          },
          {
            text: '数据输入',
            link: '/component/pages-form/calendar'
          },
          {
            text: '反馈组件',
            link: '/component/pages-operate/action-sheet'
          },
          {
            text: '数据展示',
            link: '/component/pages-data/badge'
          }
        ]
      },
      { text: '🥤一杯咖啡', link: '/reward/reward', activeMatch: '/reward/' },
      {
        text: '周边生态',
        items: [{ text: 'uniapp文档', link: 'https://zh.uniapp.dcloud.io/component/' }]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          link: '/guide/introduction'
        },
        {
          text: '快速上手',
          link: '/guide/quick-use'
        },
        {
          text: '定制主题',
          link: '/guide/custom-theme'
        },
        {
          text: '国际化',
          link: '/guide/locale'
        },
        {
          text: '常见问题',
          link: '/guide/common-problems'
        }
      ],
      '/reward/': [
        {
          text: '🥤一杯咖啡',
          link: '/reward/reward'
        }
      ],

      '/component/': [
        {
          text: '基础',
          collapsed: false,
          items: [
            {
              link: '/component/pages-base/button',
              text: 'Button 按钮'
            },
            {
              link: '/component/pages-base/icon',
              text: 'Icon 图标'
            },
            {
              link: '/component/pages-base/layout',
              text: 'Layout 布局'
            },
            {
              link: '/component/pages-base/config-provider',
              text: 'ConfigProvider 全局配置'
            },
            {
              link: '/component/pages-base/popup',
              text: 'Popup 弹出层'
            },
            {
              link: '/component/pages-base/resize',
              text: 'Resize 监听元素尺寸变化'
            },
            {
              link: '/component/pages-base/transition',
              text: 'Transition 动画'
            },
            {
              link: '/component/pages-base/fab',
              text: 'Fab 悬浮按钮'
            },
            {
              link: '/component/pages-base/text',
              text: 'Text 文本'
            },
            {
              link: '/component/pages-base/scroll-list',
              text: 'ScrollList 横向滚动'
            }
          ]
        },
        {
          text: '导航',
          collapsed: false,
          items: [
            {
              link: '/component/pages-nav/pagination',
              text: 'Pagination 分页'
            },
            {
              link: '/component/pages-nav/popover',
              text: 'Popover 气泡'
            },
            {
              link: '/component/pages-nav/tabs',
              text: 'Tabs 标签页'
            },
            {
              link: '/component/pages-nav/segmented',
              text: 'Segmented 分段器'
            },
            {
              link: '/component/pages-nav/tabbar',
              text: 'Tabbar 标签栏'
            },
            {
              link: '/component/pages-nav/navbar',
              text: 'Navbar 导航栏'
            },
            {
              link: '/component/pages-nav/sidebar',
              text: 'Sidebar 侧边栏'
            },
            {
              link: '/component/pages-nav/backtop',
              text: 'Backtop 回到顶部'
            },
            {
              link: '/component/pages-nav/index-bar',
              text: 'IndexBar 索引栏'
            }
          ]
        },
        {
          text: '数据输入',
          collapsed: false,
          items: [
            {
              link: '/component/pages-form/calendar',
              text: 'Calendar 日历选择器'
            },
            {
              link: '/component/pages-form/calendar-view',
              text: 'CalendarView 日历面板'
            },
            {
              link: '/component/pages-form/checkbox',
              text: 'Checkbox 复选框'
            },
            {
              link: '/component/pages-form/col-picker',
              text: 'ColPicker 多列选择器'
            },
            {
              link: '/component/pages-form/datetime-picker',
              text: 'DatetimePicker 时间选择器'
            },
            {
              link: '/component/pages-form/datetime-picker-view',
              text: 'DatetimePickerView 时间选择器视图'
            },
            {
              link: '/component/pages-form/form',
              text: 'Form 表单'
            },
            {
              link: '/component/pages-form/input',
              text: 'Input 输入框'
            },
            {
              link: '/component/pages-form/textarea',
              text: 'Textarea 文本域'
            },
            {
              link: '/component/pages-form/input-number',
              text: 'InputNumber 计数器'
            },
            {
              link: '/component/pages-form/picker',
              text: 'Picker 选择器'
            },
            {
              link: '/component/pages-form/picker-view',
              text: 'PickerView 选择器视图'
            },
            {
              link: '/component/pages-form/radio',
              text: 'Radio 单选框'
            },
            {
              link: '/component/pages-form/rate',
              text: 'Rate 评分'
            },
            {
              link: '/component/pages-form/search',
              text: 'Search 搜索框'
            },
            {
              link: '/component/pages-form/select-picker',
              text: 'SelectPicker 单复选选择器'
            },
            {
              link: '/component/pages-form/slider',
              text: 'Slider 滑块'
            },
            {
              link: '/component/pages-form/switch',
              text: 'Switch 开关'
            },
            {
              link: '/component/pages-form/upload',
              text: 'Upload 上传'
            },
            {
              link: '/component/pages-form/password-input',
              text: 'PasswordInput 密码输入框'
            },
            {
              link: '/component/pages-form/signature',
              text: 'Signature 签名'
            }
          ]
        },
        {
          text: '反馈',
          collapsed: false,
          items: [
            {
              link: '/component/pages-operate/action-sheet',
              text: 'ActionSheet 动作面板'
            },
            {
              link: '/component/pages-operate/drop-menu',
              text: 'DropMenu 下拉菜单'
            },
            {
              link: '/component/pages-operate/floating-panel',
              text: 'FloatingPanel 浮动面板'
            },
            {
              link: '/component/pages-operate/loading',
              text: 'Loading 加载'
            },
            {
              link: '/component/pages-operate/message-box',
              text: 'MessageBox 弹框'
            },
            {
              link: '/component/pages-operate/notice-bar',
              text: 'NoticeBar 通知栏'
            },
            {
              link: '/component/pages-operate/overlay',
              text: 'Overlay 遮罩层'
            },
            {
              link: '/component/pages-operate/progress',
              text: 'Progress 进度条'
            },
            {
              link: '/component/pages-operate/circle',
              text: 'Circle 环形进度条'
            },
            {
              link: '/component/pages-operate/sort-button',
              text: 'SortButton 排序按钮'
            },
            {
              link: '/component/pages-operate/status-tip',
              text: 'StatusTip 缺省提示'
            },
            {
              link: '/component/pages-operate/swipe-action',
              text: 'SwipeAction 滑动操作'
            },
            {
              link: '/component/pages-operate/toast',
              text: 'Toast 轻提示'
            },
            {
              link: '/component/pages-operate/notify',
              text: 'Notify 消息通知'
            },
            {
              link: '/component/pages-operate/tooltip',
              text: 'Tooltip 文字提示'
            },
            {
              link: '/component/pages-operate/count-down',
              text: 'CountDown 倒计时'
            },
            {
              link: '/component/pages-operate/count-to',
              text: 'CountTo 数字滚动'
            },
            {
              link: '/component/pages-operate/keyboard',
              text: 'Keyboard 虚拟键盘'
            },
            {
              link: '/component/pages-operate/number-keyboard',
              text: 'NumberKeyboard 数字键盘'
            }
          ]
        },
        {
          text: '数据展示',
          collapsed: false,
          items: [
            {
              link: '/component/pages-data/badge',
              text: 'Badge 徽标'
            },
            {
              link: '/component/pages-data/card',
              text: 'Card 卡片'
            },
            {
              link: '/component/pages-data/cell',
              text: 'Cell 单元格'
            },
            {
              link: '/component/pages-data/collapse',
              text: 'Collapse 折叠面板'
            },
            {
              link: '/component/pages-data/curtain',
              text: 'Curtain 幕帘'
            },
            {
              link: '/component/pages-data/divider',
              text: 'Divider 分割线'
            },
            {
              link: '/component/pages-data/gap',
              text: 'Gap 间隔槽'
            },
            {
              link: '/component/pages-data/img',
              text: 'Img 图片'
            },
            {
              link: '/component/pages-data/img-cropper',
              text: 'ImgCropper 图片裁剪'
            },
            {
              link: '/component/pages-data/grid',
              text: 'Grid 宫格'
            },
            {
              link: '/component/pages-data/loadmore',
              text: 'Loadmore 加载更多'
            },
            {
              link: '/component/pages-data/skeleton',
              text: 'Skeleton 骨架屏'
            },
            {
              link: '/component/pages-data/steps',
              text: 'Steps 步骤条'
            },
            {
              link: '/component/pages-data/sticky',
              text: 'Sticky 粘性布局'
            },
            {
              link: '/component/pages-data/tag',
              text: 'Tag 标签'
            },
            {
              link: '/component/pages-data/watermark',
              text: 'Watermark 水印'
            },
            {
              link: '/component/pages-data/swiper',
              text: 'Swiper 轮播图'
            },
            {
              link: '/component/pages-data/waterFall',
              text: 'WaterFall 瀑布流'
            },
            {
              link: '/component/pages-data/table',
              text: 'Table 表格'
            }
          ]
        }
      ]
    }
  }
})
