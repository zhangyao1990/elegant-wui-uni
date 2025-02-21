import { ref } from 'vue'
import { onReachBottom } from '@dcloudio/uni-app'

export const useGenerateImageData = () => {
  const images = [
    'https://gips3.baidu.com/it/u=1821127123,1149655687&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280',
    'https://gips0.baidu.com/it/u=1490237218,4115737545&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720',
    'https://gips1.baidu.com/it/u=1647344915,1746921568&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280',
    'https://gips3.baidu.com/it/u=453716532,1843928978&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280',
    'https://gips1.baidu.com/it/u=2205169440,1005663887&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024',
    'https://gips1.baidu.com/it/u=1239311027,2819893885&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024',
    'https://gips2.baidu.com/it/u=4231193786,3187314859&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024',
    'https://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
    'https://gips2.baidu.com/it/u=3944689179,983354166&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024',
    'https://gips3.baidu.com/it/u=1874299413,3253595329&fm=3028&app=3028&f=JPEG&fmt=auto?w=1920&h=2560',
  ]

  const imageData = ref<{ id: number; url: string }[]>([])

  // 生成随机数据
  const generateRandomData = () => {
    const length = imageData.value.length
    const imageLength = images.length
    const data: any[] = []
    for (let i = 0; i < 20; i++) {
      data.push({
        id: length + i + 1,
        url: images[Math.floor(Math.random() * imageLength)],
      })
    }
    imageData.value = imageData.value.concat(data)
  }
  generateRandomData()

  onReachBottom(() => {
    setTimeout(() => {
      generateRandomData()
    },200)
  })

  return {
    imageData,
  }
}