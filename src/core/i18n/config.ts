export const defaultLocale = 'en'

// utc+0
export const timeZone = 'Europe/London'

export const locales = [defaultLocale, 'zh-CN'] as const

export const localesMap = [
  { key: 'en', title: 'English' },
  { key: 'zh-CN', title: '简体中文' },
]
