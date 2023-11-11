export const i18n = {
  defaultLocale: 'az',
  locales: ['az', 'en'],
} as const

export type Locale = (typeof i18n)['locales'][number]
