import type { ConfigProviderThemeVars } from '@/uni_modules/elegant-wui-uni'
import { ref } from 'vue'
const theme = ref<'light' | 'dark'>('light')
const themeVars = ref<ConfigProviderThemeVars>()
export function useTheme(vars?: ConfigProviderThemeVars) {
  vars && (themeVars.value = vars)
  function toggleTheme(mode?: 'light' | 'dark') {
    theme.value = mode || (theme.value === 'light' ? 'dark' : 'light')
  }
  return {
    theme,
    themeVars,
    toggleTheme
  }
}
