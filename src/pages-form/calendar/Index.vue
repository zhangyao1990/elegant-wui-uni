<template>
  <page-wraper>
    <wui-toast />
    <view style="margin: 20px 0">
      <wui-cell-group border>
        <wui-calendar label="单个日期选择" v-model="value1" @confirm="handleConfirm1" />
        <wui-calendar label="多个日期选择" type="dates" v-model="value2" @confirm="handleConfirm2" />
        <wui-calendar label="日期范围选择" type="daterange" v-model="value3" />
        <wui-calendar label="日期时间选择" type="datetime" v-model="value4" />
        <wui-calendar label="日期时间范围选择" type="datetimerange" v-model="value5" />
        <wui-calendar label="周选择" type="week" v-model="value6" />
        <wui-calendar label="月选择" type="month" :min-date="minDate" v-model="value7" />
        <wui-calendar label="周范围选择" :first-day-of-week="1" type="weekrange" v-model="value8" />
        <wui-calendar label="月范围选择" type="monthrange" v-model="value9" />
        <wui-calendar label="日周月切换" :first-day-of-week="1" show-type-switch v-model="value10" />
        <wui-calendar label="快捷操作" v-model="value16" :show-confirm="false" />
        <wui-calendar label="日期格式化" type="daterange" v-model="value11" :formatter="formatter" />
        <wui-calendar
          label="快捷选项"
          :shortcuts="shortcuts"
          :on-shortcuts-click="onShortcutsClick"
          type="daterange"
          const
          v-model="value12"
          @confirm="handleConfirm3"
        />
        <wui-calendar
          label="自定义展示"
          type="daterange"
          const
          v-model="value13"
          :display-format="displayFormat"
          :inner-display-format="innerDisplayFormat"
        />
        <wui-calendar label="before-confirm" v-model="value14" :before-confirm="beforeConfirm" />
      </wui-cell-group>
    </view>

    <demo-block transparent title="自定义选择器">
      <view style="margin: 0 15px">
        <view style="margin-bottom: 10px">当前选中日期：{{ formatValue }}</view>
        <wui-calendar v-model="value15" use-default-slot @confirm="handleConfirm4">
          <wui-button>选择日期</wui-button>
        </wui-calendar>
      </view>
    </demo-block>
    <demo-block title="组件实例事件">
      <wui-button @click="openCalendar">打开日历</wui-button>
      <wui-calendar ref="calendarRef" v-model="value17" :with-cell="false" @confirm="handleConfirm5" />
    </demo-block>
  </page-wraper>
  <wui-message-box />
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/elegant-wui-uni'
import { dayjs } from '@/uni_modules/elegant-wui-uni'
import type { CalendarDayItem, CalendarFormatter } from '@/uni_modules/elegant-wui-uni/components/wui-calendar-view/types'
import type { CalendarInstance, CalendarOnShortcutsClickOption } from '@/uni_modules/elegant-wui-uni/components/wui-calendar/types'
import { ref } from 'vue'

const minDate = ref<number>(new Date(new Date().getFullYear() - 20, new Date().getMonth() - 6, new Date().getDate()).getTime())

const value1 = ref<number>(Date.now())
const value2 = ref<number[]>([Date.now() - 24 * 60 * 60 * 1000 * 3, Date.now()])
const value3 = ref<number[]>([])
const value4 = ref<number>(Date.now())
const value5 = ref<number[]>([Date.now() - 24 * 60 * 60 * 1000 * 3, Date.now() - 24 * 60 * 60 * 1000])
const value6 = ref<number>(Date.now())
const value7 = ref<number>(Date.now())
const value8 = ref<number[]>([Date.now() - 24 * 60 * 60 * 1000 * 14, Date.now()])
const value9 = ref<number[]>([Date.now() - 24 * 60 * 60 * 1000 * 33, Date.now()])
const value10 = ref<number>(Date.now())
const value11 = ref<number[]>([Date.now() - 24 * 60 * 60 * 1000 * 3, Date.now()])
const value12 = ref<number[]>([])
const value13 = ref<number[]>([Date.now() - 24 * 60 * 60 * 1000 * 3, Date.now()])
const value14 = ref<number | null>(null)
const value15 = ref<number | null>(null)
const value16 = ref<number>(Date.now())
const value17 = ref<number>(Date.now())

const calendarRef = ref<CalendarInstance>()

function openCalendar() {
  calendarRef.value?.open()
}

const formatValue = ref<string>('')
const formatter: CalendarFormatter = (day: CalendarDayItem) => {
  const date = new Date(day.date)
  const now = new Date()

  const year = date.getFullYear()
  const month = date.getMonth()
  const da = date.getDate()
  const nowYear = now.getFullYear()
  const nowMonth = now.getMonth()
  const nowDa = now.getDate()

  if (year === nowYear && month === nowMonth && da === nowDa) {
    day.topInfo = '今天'
  }

  if (month === 5 && da === 18) {
    day.topInfo = '618大促'
  }

  if (month === 10 && da === 11) {
    day.topInfo = '京东双11'
  }

  if (day.type === 'start') {
    day.bottomInfo = '开始'
  }

  if (day.type === 'end') {
    day.bottomInfo = '结束'
  }

  if (day.type === 'same') {
    day.bottomInfo = '开始/结束'
  }

  return day
}
const shortcuts = ref<Record<string, any>[]>([
  {
    text: '近7天',
    id: 7
  },
  {
    text: '近15天',
    id: 15
  },
  {
    text: '近30天',
    id: 30
  }
])

const toast = useToast()
const onShortcutsClick = ({ item }: CalendarOnShortcutsClickOption) => {
  const dayDiff = item.id
  const endDate = Date.now() - 24 * 60 * 60 * 1000
  const startDate = endDate - dayDiff * 24 * 60 * 60 * 1000

  return [startDate, endDate]
}
const displayFormat = (value: any) => {
  return dayjs(value[0]).format('YY年MM月DD日') + ' - ' + dayjs(value[1]).format('YY年MM月DD日')
}
const innerDisplayFormat = (value: string | number | Date | undefined, rangeType: string) => {
  if (!value) {
    return rangeType === 'start' ? '活动开始时间' : '活动结束时间'
  }

  return dayjs(value).format('YY年MM月DD日')
}
const beforeConfirm = ({ value, resolve }: any) => {
  if (value > Date.now()) {
    toast.error('该日期暂无数据')
    resolve(false)
  } else {
    resolve(true)
  }
}

function handleConfirm1({ value }: any) {
  console.log(value)
}
function handleConfirm2({ value }: any) {
  console.log(value)
}
function handleConfirm3({ value }: any) {
  console.log(value)
}
function handleConfirm4({ value }: any) {
  console.log(new Date(value).toString())
  formatValue.value = new Date(value).toString()
}
function handleConfirm5({ value }: any) {
  toast.success('已选择' + dayjs(value).format('YYYY年MM月DD日'))
}
</script>
<style lang="scss" scoped></style>
