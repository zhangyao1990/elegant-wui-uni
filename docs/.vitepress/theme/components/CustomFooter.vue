<!--
 * @Author: Mr zhang
 * @Date: 2024-01-07 00:46:50
 * @LastEditTime: 2024-01-07 01:57:00
 * @LastEditors: Mr zhang
 * @Description: 
 * @FilePath: /elegant-wui-uni/docs/.vitepress/theme/components/CustomFooter.vue
 * 记得注释
-->
<script setup lang="ts">
import { useData } from 'vitepress/dist/client/theme-default/composables/data';
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar';
import { computed, onMounted, ref } from 'vue';


const { theme } = useData()
const { hasSidebar } = useSidebar()

const isNetlify = ref<boolean>(false)

const copyright = computed(()=>{
  if (isNetlify.value) {
    return `${theme.value.footer.copyright} | <a style="text-decoration: none;" href="https://www.netlify.com">This site is powered by Netlify</a>`
  }else{
    return theme.value.footer.copyright
  }
})

onMounted(() => {
  isNetlify.value = typeof window !== 'undefined' ? window.location.href.includes('netlify') : false
})
</script>

<template>
  <footer v-if="theme.footer" class="VPFooter" :class="{ 'has-sidebar': hasSidebar }">
    <div class="container">
      <p v-if="theme.footer.message" class="message" v-html="theme.footer.message"></p>
      <p v-if="copyright" class="copyright" v-html="copyright"></p>
    </div>
  </footer>
</template>

<style scoped>
.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
}

.VPFooter.has-sidebar {
  display: none;
}

.VPFooter :deep(a) {
  text-decoration-line: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

.VPFooter :deep(a:hover) {
  color: var(--vp-c-text-1);
}

@media (min-width: 768px) {
  .VPFooter {
    padding: 32px;
  }
}

.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}

.message,
.copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
