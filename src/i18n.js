import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from './locales/en.json'

export const SUPPORT_LOCALES = ['en', 'th']


export const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: { 'en': messages }
})


export function setI18nLanguage(i18n, locale) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }

  document.querySelector('html').setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n, locale) {
  const messages = await import(
    `./locales/${locale}.json`
  )

  i18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}