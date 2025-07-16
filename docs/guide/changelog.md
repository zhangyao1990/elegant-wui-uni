# 更新日志 


### [0.4.3](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.4.2...v0.4.3) (2025-07-16)


### 🐛 Bug Fixes | Bug 修复

* 🐛 Slider按钮插槽放入非双滑块模式 ([da8dc2e](https://github.com/zhangyao1990/elegant-wui-uni/commit/da8dc2eedc711d813f6a00ada719a730067ebd9e))

### [0.4.2](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.4.1...v0.4.2) (2025-07-16)


### ✨ Features | 新功能

* ✨ DatetimePicker 支持time和date-time类型下配置选择到秒 ([02bbb2e](https://github.com/zhangyao1990/elegant-wui-uni/commit/02bbb2ecacf6ccd97e5c7c88cfc2b289ee45977d))


### 🐛 Bug Fixes | Bug 修复

* 🐛 优化 InputNumbe 处理中间状态值的逻辑，支持配置不立即响应输入变化 ([00e1748](https://github.com/zhangyao1990/elegant-wui-uni/commit/00e17484405ac2df0a9c4d551af4fb513def73bd))
* 🐛 修复 DropDownItem 自定义样式类 CustomIcon 无效的问题 ([380b9aa](https://github.com/zhangyao1990/elegant-wui-uni/commit/380b9aaa77d5119547427c0d6a2ef2a22e5c718f))
* 🐛 修复 DropMenu 设置 Modal 无效的问题 ([98847e9](https://github.com/zhangyao1990/elegant-wui-uni/commit/98847e96078c9d56bd8e80d34d66c1ce32dd96d7))
* 🐛 修复 Input、Textarea、Search 组件设置清空后不聚焦时无法触发失焦事件的问题 ([8b4b0e9](https://github.com/zhangyao1990/elegant-wui-uni/commit/8b4b0e901a58aea9d215bb8f79acedce96b94376))
* 🐛 修复 Overlay 组件锁定背景滚动属性 lock-scroll 无法取消的问题 ([5eada49](https://github.com/zhangyao1990/elegant-wui-uni/commit/5eada49fb23fa890503c5c26593dab4a7a11fc09))
* 🐛 修复 Slider 处理边界值异常的问题，优化样式和事件处理逻辑 ([9d7f115](https://github.com/zhangyao1990/elegant-wui-uni/commit/9d7f115b49358d2730586c1c2c640efa8cc8d0a2))
* 🐛 修复 Toast 断行样式错误问题 ([00a80a8](https://github.com/zhangyao1990/elegant-wui-uni/commit/00a80a8b0fdff022dba84a511e03fbd5d8066fde))
* 🐛 修复 wui-slider 滑块不跟手的问题、新增自定义滑块按钮 ([21baead](https://github.com/zhangyao1990/elegant-wui-uni/commit/21baeadd0154d6ab1f61923420b7272156ebbaa3))
* 🐛 修复 wui-upload 组件的 formData 属性的 ts 类型为 void 的问题 ([ff03641](https://github.com/zhangyao1990/elegant-wui-uni/commit/ff036418213c49894925a6c56429ee8c0bc5efb8))
* 🐛 修复NumberKeyboard组件使用 title 插槽未传入关闭文本时不展示头部的问题 ([d9d4a47](https://github.com/zhangyao1990/elegant-wui-uni/commit/d9d4a47e31ce2b9687ff81b02707ab657a9db9e4))
* 🐛 单词拼错 ([49925f9](https://github.com/zhangyao1990/elegant-wui-uni/commit/49925f93518b0e99e5836aeae8c757cc47767512))
* 🐛 去掉upload util文件 ([214d777](https://github.com/zhangyao1990/elegant-wui-uni/commit/214d7772de023b2a45d01ddfc44bbb19225f8e65))

### [0.4.1](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.4.0...v0.4.1) (2025-07-14)


### ✏️ Documentation | 文档

* ✏️  icon地址调整 ([f519cac](https://github.com/zhangyao1990/elegant-wui-uni/commit/f519cac926abf3bf1cbdf78111cbe81a6b468544))


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Upload 开启 multiple 后只能成功上传最后一个文件的问题 ([027a649](https://github.com/zhangyao1990/elegant-wui-uni/commit/027a649ee0b9d36220587f74af45cdd8085f566d))

## [0.4.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.3.5...v0.4.0) (2025-07-14)


### ⚡ Performance Improvements | 性能优化

* ⚡ 增强 wui-drop-menu 组件，优化遮罩层闪烁 ([57fe9a9](https://github.com/zhangyao1990/elegant-wui-uni/commit/57fe9a9f5baf8ac18fd75e8310d26655772e4296))


### ✏️ Documentation | 文档

* ✏️  badge-props跳转调整 ([81ebcba](https://github.com/zhangyao1990/elegant-wui-uni/commit/81ebcba76966b4e8520106e351069c7aea9726b8))
* ✏️  优化 WuiConfigProvider 文档，解决组件命名风格问题导致失效问题 ([70c44e8](https://github.com/zhangyao1990/elegant-wui-uni/commit/70c44e81df23e8b76616673ae8667b82d6020bdd))


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Curtain 幕帘组件 close 事件触发2次的问题 ([70eabcd](https://github.com/zhangyao1990/elegant-wui-uni/commit/70eabcd036003929084de1a892a0ddf158aaba78))
* 🐛 修复 message-box 配合 layouts 使用全局 message-box 时，切换页面可能会显示上一 ([5c1f3f9](https://github.com/zhangyao1990/elegant-wui-uni/commit/5c1f3f9a035cd84079b28513ff684d3de8e1f955))
* 🐛 修复 Textarea 设置为 null 时，显示字数限制显示错误问题 ([cfd0809](https://github.com/zhangyao1990/elegant-wui-uni/commit/cfd08094c8ca5b455697b5043352ffdb7dc52db9))
* 🐛 修复多个 ImgCropper 存在时生成图片异常的问题 ([d522084](https://github.com/zhangyao1990/elegant-wui-uni/commit/d522084f6803b13e57f895d14026de696e9b07de))
* 🐛 修复部分国际化文本不正确的问题 ([bddbae7](https://github.com/zhangyao1990/elegant-wui-uni/commit/bddbae77b23a22c0a65bfe461df59a326e49f021))


### ✨ Features | 新功能

* ✨ grid-item添加hover-class ([2e6fcac](https://github.com/zhangyao1990/elegant-wui-uni/commit/2e6fcac42341a17bafd9020d67a2cbc8a11cd046))
* ✨ ImgCropper 图片剪裁支持设置裁剪框宽高比 ([5497b26](https://github.com/zhangyao1990/elegant-wui-uni/commit/5497b269a2765d51fccbfd9fb5dede613858b121))
* ✨ Upload 上传组件支持根据扩展名过滤文件 ([cdb0ecc](https://github.com/zhangyao1990/elegant-wui-uni/commit/cdb0eccbf73f2cd545c769674d9634560e0895e8))
* ✨ useUpload 添加选择文件的api ([a970641](https://github.com/zhangyao1990/elegant-wui-uni/commit/a970641bfd4b58163a8555f49c7df6a805d04966))
* ✨ 将 Tabbar 和 Badge 设置为标准盒子模型 ([89ec1f3](https://github.com/zhangyao1990/elegant-wui-uni/commit/89ec1f3d8a768523d2af5346d7111f0d66614d60))
* ✨ 提供 useUpload hooks 用于便捷上传 ([1912449](https://github.com/zhangyao1990/elegant-wui-uni/commit/1912449d2d7b274f13562386f3f3bda4668b4f18))
* ✨ 添加input props.type可选类型 ([880c41f](https://github.com/zhangyao1990/elegant-wui-uni/commit/880c41fdde78d47e94d5b1c362bdca2a99cf6664))
* ✨ 添加组合式API文档并提供相关API ([40141bf](https://github.com/zhangyao1990/elegant-wui-uni/commit/40141bfdaee4638df9ae34d8f60944ed7aa3fcee))
* ✨ 移除 keyboard 虚拟键盘车牌号模式下不可用的 I、O 键 ([164e09c](https://github.com/zhangyao1990/elegant-wui-uni/commit/164e09c1896365ff57cb70363ea2ec2b74212eb6))

### [0.3.5](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.3.4...v0.3.5) (2025-07-14)


### ⚠ BREAKING CHANGES

* 🧨 更新了wui-picker，当列为空时重置pickerValue和showValue、更新了wui-
pickerview，当列为空时清除formatColumns和selectedIndex、-增强selectWithValue处理空列的情况

### ✏️ Documentation | 文档

* ✏️  drop-menu 文档类型调整 ([99b8f06](https://github.com/zhangyao1990/elegant-wui-uni/commit/99b8f06a138aa3db01c2e994f18c0ad2661b5eca))
* ✏️  修复部分文档拼写错误 ([c75b896](https://github.com/zhangyao1990/elegant-wui-uni/commit/c75b89602fdb68e37e20c73b7690180b45be276f))


### ✨ Features | 新功能

* ✨ img 组件添加 preview-src 属性 ([56214e0](https://github.com/zhangyao1990/elegant-wui-uni/commit/56214e0c5cc29aa889893e6058b5e0c655374d7f))
* ✨ 废弃 DateTimePicker 开启插槽开关use-label-slot和use-default-slot ([5e4c305](https://github.com/zhangyao1990/elegant-wui-uni/commit/5e4c3053acdd5f14ed61e71438813dee7aea2ded))
* ✨ 扩展wui-fab组件，增加4个新位置并更新文档 ([dae9783](https://github.com/zhangyao1990/elegant-wui-uni/commit/dae978363c7a628818a05143b210938dd3826077))
* ✨ 新增 InputNumber 组件支持长按加减功能 ([9d5c115](https://github.com/zhangyao1990/elegant-wui-uni/commit/9d5c115e914f5a4f7565533b17f229695ae8b558))


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 DateTimePicker 区域选择时边界值处理错误的问题 ([9c2cb28](https://github.com/zhangyao1990/elegant-wui-uni/commit/9c2cb28fb229f70e0f56d6bd7268652d7b43eb23))
* 🐛 修复 drop-menu-item 有选项值为空字符串时导致新值错误并触发组件内部警告的问题 ([368b265](https://github.com/zhangyao1990/elegant-wui-uni/commit/368b265b2500720093f5a2199e4b203c64b1d2fe))
* 🐛 修复 Navbar 文档部分标题显示 Tabbar 的问题 ([796bbc4](https://github.com/zhangyao1990/elegant-wui-uni/commit/796bbc49a39ac4b7fb7500545ac887efa4a34f05))
* 🐛 修复input、textarea组件placeholder样式在微信小程序无效的问题 ([5aec77a](https://github.com/zhangyao1990/elegant-wui-uni/commit/5aec77a8f66d2941b3819e5685bfe4563f620b04))
* 🐛 修复textarea统计多码元字符长度错误的问题 ([4780043](https://github.com/zhangyao1990/elegant-wui-uni/commit/478004365c153e9198dfed579d93fcb7ea58b023))
* 🐛 清空列时清除选定的值和选项 ([4e134a5](https://github.com/zhangyao1990/elegant-wui-uni/commit/4e134a5f26a93fe18e2e7e2cf069d8dfef512acd))

### [0.3.4](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.3.3...v0.3.4) (2025-04-08)

### [0.3.3](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.3.2...v0.3.3) (2025-04-07)


### ✨ Features | 新功能

* ✨ 新增Gallery画廊组件 ([0fa896f](https://github.com/zhangyao1990/elegant-wui-uni/commit/0fa896f7266644573ecff341ec5bb6ac0663389d))

### [0.3.2](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.3.1...v0.3.2) (2025-03-10)

### [0.3.1](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.3.0...v0.3.1) (2025-03-10)


### 🐛 Bug Fixes | Bug 修复

* 修复在template中使用readonly无法通过vue-ts校验的问题 ([4313b50](https://github.com/zhangyao1990/elegant-wui-uni/commit/4313b50910103b9659754dd9d035e8378304e670))


### ⚡ Performance Improvements | 性能优化

* ⚡ wui-icon组件图标地址修改 ([19d3703](https://github.com/zhangyao1990/elegant-wui-uni/commit/19d37031fb00bd46815f3fb91ef149e4b45fea4b))

## [0.3.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.0...v0.3.0) (2025-03-05)


### ✨ Features | 新功能

* ✨ 新增 CubicBezier 贝塞尔曲线组件 ([1982427](https://github.com/zhangyao1990/elegant-wui-uni/commit/1982427842280fce037a169e80eecdce8efa7d59))


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复在template中使用readonly无法通过vue-ts校验的问题 ([121fa80](https://github.com/zhangyao1990/elegant-wui-uni/commit/121fa801bbc859db358136a465c87db42439353f))
* 🐛 添加WuiKeyboard的类型声明 ([40974a6](https://github.com/zhangyao1990/elegant-wui-uni/commit/40974a65195f128b6b236c349c48fad311bcad3f))

## [0.2.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.0...v0.2.0) (2025-02-28)


### ✨ Features | 新功能

* ✨ waterFall组件图片替换，方便微信小程序提审 ([6d980ed](https://github.com/zhangyao1990/elegant-wui-uni/commit/6d980ed721bc0ce42da1bd8eb567d07b0554bc3b))


### 🐛 Bug Fixes | Bug 修复

* 🐛 引入组路径调整 ([e7b201d](https://github.com/zhangyao1990/elegant-wui-uni/commit/e7b201d3ac94646a2742d019dd8a3926d71e7059))

## [0.1.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.2...v0.1.0) (2025-02-26)


### ✨ Features | 新功能

* ✨ Signature生成签名图片支持旋转 ([abc0158](https://github.com/zhangyao1990/elegant-wui-uni/commit/abc0158119bfa3997870758bb5d69d87e9396787))


### 🐛 Bug Fixes | Bug 修复

* 🐛 loadmore示例文案调整、文档文案调整、npm包打包命令调整、signature组件去掉console ([a1544ec](https://github.com/zhangyao1990/elegant-wui-uni/commit/a1544eccdb5d096af892469021b245905c5516e0))
* 🐛 修复生成npm包版本号不同步更新问题 ([0eb54fc](https://github.com/zhangyao1990/elegant-wui-uni/commit/0eb54fc26012754574bf988c76d40bf5f69fea64))

### [0.0.2](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.1...v0.0.2) (2025-02-25)


### ✨ Features | 新功能

* ✨ indexBar组件新增气泡提示框 ([6fb484c](https://github.com/zhangyao1990/elegant-wui-uni/commit/6fb484cd8901b70196751f7c1ea9821b88bbe32e))
* ✨ 首页新增分享功能 ([9ef8efa](https://github.com/zhangyao1990/elegant-wui-uni/commit/9ef8efac44cb4050d7e2136086ef6e8f0a19246d))

### 0.0.1 (2025-02-24)


### ✨ Features | 新功能

* 新增 70+ 组件 ([11f3d0a](https://github.com/zhangyao1990/elegant-wui-uni/commit/11f3d0acd34da4e4ba0a513ec2be1f88cbfd8458))
