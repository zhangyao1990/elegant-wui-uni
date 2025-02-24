# 快速上手

本节介绍如何在`uni-app`项目中安装、配置并使用 `Eleagnt Wui Uni`。

## 使用之前

使用前，请确保你已经学习过 Vue 官方的 [快速上手](https://cn.vuejs.org/guide/quick-start.html) 和 uni-app 提供的 [学习路线](https://uniapp.dcloud.net.cn/resource.html)。

## 安装

:::warning 关于安装
`Eleagnt Wui Uni`提供了`uni_modules`和`npm`两种安装方式，按需选择。

- 使用`uni_modules`安装无需额外配置，即插即用，但是每次更新组件库需要处理代码差异（一般直接覆盖就可以）。
- 使用`npm`安装需要额外配置，更新组件库时无需处理代码差异。
  :::

### npm 安装

::: code-group

```bash [npm]
npm i elegant-wui-uni
```

```bash [yarn]
yarn add elegant-wui-uni
```

```bash [pnpm]
pnpm add elegant-wui-uni
```

:::

### uni_modules 安装

`Eleagnt Wui Uni` 支持 [uni_modules](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#uni-modules) 规范，已经上架到 uni-app 的插件市场。

在`uni-app插件市场`选择使用`HBuildX`导入，或者选择手动在 src 目录下创建 uni_modules 文件夹并将`Eleagnt Wui Uni`解压到 uni_modules 中，结构如下:

```
- uni_modules
- - - elegant-wui-uni
```

下载地址：<a href="https://github.com/zhangyao1990/elegant-wui-uni"><span >elegant-wui-uni</span></a>

## 配置

### 导入组件

::: tip 提醒
使用 `uni_modules` 安装时`Eleagnt Wui Uni`的组件天然支持`easycom`规范，无需额外配置就可以自动引入组件，而使用 `npm安装 `需按照此步骤配置，以下两种方案二选一即可。
:::

#### 配置 easycom 自动引入组件<el-tag type="primary" style="vertical-align: middle;margin-left:8px;" effect="dark" >方案 1</el-tag>

传统 vue 组件，需要安装、引用、注册，三个步骤后才能使用组件。`easycom`将其精简为一步。  
只要组件路径符合规范（具体见[easycom](https://uniapp.dcloud.net.cn/collocation/pages.html#easycom)），就可以不用引用、注册，直接在页面中使用。

:::tip 提醒

- uni-app 考虑到编译速度，直接在`pages.json`内修改`easycom`不会触发重新编译，需要改动页面内容触发。
- 请确保您的 pages.json 中只有一个 easycom 字段，否则请自行合并多个引入规则。
  :::

```JSON
// pages.json
{
	"easycom": {
		"autoscan": true,
		"custom": {
		  "^wui-(.*)": "elegant-wui-uni/components/wui-$1/wui-$1.vue"
		}
	},

	// 此为本身已有的内容
	"pages": [
		// ......
	]
}
```

#### 基于 vite 配置自动引入组件<el-tag type="primary" style="vertical-align: middle;margin-left:8px;" effect="dark" >方案 2</el-tag>

如果不熟悉`easycom`，也可以通过[@uni-helper/vite-plugin-uni-components](https://github.com/uni-helper/vite-plugin-uni-components)实现组件的自动引入。

:::tip 提醒

- 推荐使用@uni-helper/vite-plugin-uni-components@0.0.9及以上版本，因为在 0.0.9 版本开始其内置了`elegant-wui-uni`的`resolver`。
- 如果使用此方案时控制台打印很多`Sourcemap for  points to missing source files​`，可以尝试将 vite 版本升级至`4.5.x`以上版本。
  :::

::: code-group

```bash [npm]
npm i @uni-helper/vite-plugin-uni-components -D
```

```bash [yarn]
yarn add @uni-helper/vite-plugin-uni-components -D
```

```bash [pnpm]
pnpm add @uni-helper/vite-plugin-uni-components -D
```

:::

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

import Components from '@uni-helper/vite-plugin-uni-components'
export default defineConfig({
  plugins: [Components(), uni()]
})
```

如果你使用 `pnpm` ，请在根目录下创建一个 `.npmrc` 文件，参见[issue](https://github.com/antfu/unplugin-vue-components/issues/389)。

```
// .npmrc
public-hoist-pattern[]=@vue*
// or
// shamefully-hoist = true
```

## Volar 支持

如果您使用 `Volar`，请在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。
:::tip
cli 项目使用`uni_modules`安装无需配置，对`Volar`的支持自动生效，`HbuildX`项目不支持此配置，故此步骤仅在`cli`项目使用`npm`安装时需要配置。
:::

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["elegant-wui-uni/global"]
  }
}
```

## 使用

`Eleagnt Wui Uni`安装、配置完成之后，支持组件自动引入，故可以直接在 SFC 中使用，无需在页面内 import，也不需要在 components 内声明，即可在任意页面使用。值得注意的是，`uni-app`平台不支持全局挂载组件，所以`Message`、`Toast`等组件仍需在 SFC 中显式使用，例如:

```html
<wui-toast></wui-toast>
```
