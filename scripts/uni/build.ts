import fs from 'fs-extra'

async function build() {
  const sourceDir = 'src/uni_modules/elegant-wui-uni'
  const destDir:string = 'packages/elegant-wui-uni'

  try {
    console.info('开始构建')

    console.info(`开始清空 ${destDir}`)
    await fs.remove(destDir)
    await fs.ensureDir(destDir)
    console.info('清空完成')

    console.info(`开始复制 ${sourceDir} 至 ${destDir}`)
    await fs.copy(sourceDir, destDir, {
      filter(src) {
        return !src.includes('node_modules')
      }
    })
    console.info('构建完成')
  } catch (error) {
    console.error('构建失败', error)
  }
}

build()
