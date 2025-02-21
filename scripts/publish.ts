import { execSync } from 'node:child_process'
import { version } from '../package.json'

function publish() {
  // 如果项目名是以@开头，要添加参数 --access public，不然npm会认为是私包，需要你充值付费才能上传
  execSync('cd packages/elegant-wui-uni && npm publish --access public', { stdio: 'inherit' })
  // 如果是上传公司私库
  // execSync('cd packages/elegant-wui-uni && npm publish --registry=https://xxxxxxxxxxxx', { stdio: 'inherit' })
  console.log(`Published npm package version ${version}`)
}
publish()
