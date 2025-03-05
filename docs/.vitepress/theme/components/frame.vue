<template>
  <iframe v-if="href" ref="iframe" id="demo" class="iframe demo-model" scrolling="auto" frameborder="0" :src="href"></iframe>
</template>

<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import { computed, onMounted, ref, watch } from 'vue'
const locationUrl = 'https://zhangyao1990.github.io/elegant-wui-uni'
const baseUrl = process.env.NODE_ENV === 'production' ? `${locationUrl}/demo/?timestamp=${new Date().getTime()}#/` : 'http://localhost:5174/demo/#/'
const route = useRoute()
const href = computed(() => {
  const path = route.path
  const paths = path ? path.split('.')[0].split('/') : []
  let href = ''
  if (paths.length) {
    href = baseUrl + getPath(paths)
  } else {
    href = baseUrl
  }
  return href
})

const iframe = ref<HTMLIFrameElement | null>(null)

const vitepressData = useData()

onMounted(() => {
  iframe.value &&
    iframe.value.addEventListener('load', () => {
      // 在iframe加载完成后执行发送消息的操作
      ssendMessage()
    })
})

watch(
  () => vitepressData.isDark.value,
  () => {
    ssendMessage()
  }
)

function ssendMessage() {
  if (iframe.value && iframe.value.contentWindow) {
    iframe.value.contentWindow.postMessage(vitepressData.isDark.value, href.value)
  }
}

function kebabToCamel(input: string): string {
  return input.replace(/-([a-z])/g, (match, group) => group.toUpperCase())
}
function getPath(pathList: any) {
  const pathFirst = pathList[pathList.length - 2]
  const pathLast = kebabToCamel(pathList[pathList.length - 1])
  return `${pathFirst}/${pathLast}/Index`
}
</script>
<style scoped>
::-webkit-scrollbar {
  width: 0;
  height: 0;
}

@media screen and (min-width: 1301px) and (max-width: 1449px) {
  .page-demo {
    padding-right: 340px;
  }
}

@media screen and (min-width: 1450px) and (max-width: 1679px) {
  .page-demo {
    padding-right: 350px;
  }
}

@media screen and (min-width: 1680px) {
  .page-demo {
    padding-right: 330px;
  }
}

@media screen and (min-width: 1920px) {
  .page-demo {
    padding-right: 370px;
  }
}

.demo-model {
  font-size: 16px;
  width: 330px;
  position: fixed;
  z-index: 10;
  margin: 0;
  right: 12px;
  top: 0;
  box-sizing: border-box;
  background-size: 100%;
  box-shadow: 0 4px 25px 0 rgba(4, 40, 60, 0.18);
  overflow: hidden;
  background: #eff2f5 no-repeat;
  border-radius: 20px;
}

.iframe {
  height: 100%;
  width: 100%;
  border-radius: 20px;
}

@media screen and (min-width: 1200px) {
  .demo-model {
    width: 310px;
    height: calc(310px * 143.6 / 70.9);
    top: calc((100vh - 310px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
  }
}

@media (max-width: 1300px) {
  .demo-model {
    display: none;
  }
}

@media screen and (min-width: 1366px) {
  .demo-model {
    width: 270px;
    height: calc(270px * 143.6 / 70.9);
    top: calc((100vh - 270px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
  }
}

@media screen and (min-width: 1500px) {
  .demo-model {
    width: 310px;
    height: calc(310px * 143.6 / 70.9);
    top: calc((100vh - 310px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
  }
}

@media screen and (min-width: 1920px) {
  .demo-model {
    width: 360px;
    height: calc(360px * 143.6 / 70.9);
    top: calc((100vh - 350px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
  }
}
</style>
