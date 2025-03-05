import type { Plugin } from 'vite'
import { camelCase } from '../../../src/uni_modules/elegant-wui-uni/components/common/util'
import path from 'path'
export function MarkdownTransform(): Plugin {
  return {
    name: 'md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md')) return
      if (!code.includes('<frame/>')) return
      const pathList = id ? id.split('.')[0].split('/') : []
      const pathModule = pathList[pathList.length - 2]
      const GITHUB_URL = 'https://github.com/zhangyao1990/elegant-wui-uni/tree/master'
      const componentId = path.basename(id, '.md')
      const componentName = `wui-${componentId}`
      const camelComponentId = camelCase(componentId)
      const demoUrl = `${GITHUB_URL}/src/${pathModule}/${camelComponentId}`
      const componentUrl = `${GITHUB_URL}/src/uni_modules/elegant-wui-uni/components/${componentName}`
      return {
        code: `${code}\n## 源代码\n<ExternalLink href=${demoUrl}>文档</ExternalLink> • <ExternalLink href=${componentUrl}>组件</ExternalLink>`
      }
    }
  }
}
