import { execSync } from 'child_process'
import * as path from 'path'

// 设置项目根目录
const projectRoot = process.cwd()

// 构建文档
function runBuild() {
  console.log('Running build...')
  execSync('pnpm run build:docs', { stdio: 'inherit' })
}

// 进入构建输出目录
function changeDirectory() {
  const buildDir = path.join(projectRoot, 'docs', '.vitepress', 'dist')
  console.log(`Changing directory to ${buildDir}...`)
  process.chdir(buildDir)
}

// 部署到 GitHub Pages
function deployToGitHub() {
  console.log('Initializing Git repository...')
  execSync('git init', { stdio: 'inherit' })
  execSync('git add -A', { stdio: 'inherit' })
  execSync('git commit -m "deploy"', { stdio: 'inherit' })

  console.log('Pushing to GitHub Pages...')
  execSync('git push -f git@github.com:zhangyao1990/elegant-wui-uni.git main:gh-pages', { stdio: 'inherit' })
}

// 主函数
function main() {
  try {
    runBuild()
    changeDirectory()
    deployToGitHub()
  } catch (error) {
    console.error('Error during deployment:', error)
    process.exit(1) //
  }
}

// 执行主函数
main()
