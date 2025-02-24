import { execSync } from 'node:child_process'
import { version } from '../package.json'

/**
 * 发布 npm 包
 * @param packagePath 包路径
 * @param registry 自定义私有仓库 URL（可选）
 */
function publishPackage(packagePath: string, registry?: string) {
  // 构建 npm publish 命令
  let publishCommand = `cd ${packagePath} && npm publish`

  // 如果是私有仓库，则指定 registry 参数
  if (registry) {
    publishCommand += ` --registry=${registry}`
  } else {
    // 如果项目名以 @ 开头，添加 --access public
    const packageName = packagePath.split('/').pop()
    if (packageName?.startsWith('@')) {
      publishCommand += ' --access public'
    }
  }

  // 执行 npm publish 命令
  try {
    execSync(publishCommand, { stdio: 'inherit' })
    console.log(`Published npm package version ${version}`)
  } catch (error: any) {
    console.error(`Failed to publish npm package: ${error.message}`)
    process.exit(1) // 出现错误时退出，返回非零状态码
  }
}

// 调用发布函数，传入包路径和私有库地址（如果有）
publishPackage('packages/elegant-wui-uni') // 默认上传至 public 仓库
// 如果需要上传到私有库，取消注释并传入 registry 参数
// publishPackage('packages/elegant-wui-uni', 'https://xxxxxxxxxxxx');
