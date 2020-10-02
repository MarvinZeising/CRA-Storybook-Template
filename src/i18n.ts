import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import de from './locales/de.json'

const _window: any = window
const availableResources = { en, de }

export const availableLanguages = Object.keys(availableResources)

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: availableResources,
    supportedLngs: availableLanguages,
    fallbackLng: getSlugLanguage() || 'en',
    detection: {
      order: ['navigator'],
      caches: [], // don't cache language
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .then(setStaffbaseUserLanguageIfAvailable)

export default i18n

function setStaffbaseUserLanguageIfAvailable() {
  const userLocale = _window.we?.authMgr?._sessionInfo?.user?.config?.locale?.slice(0, 2)
  if (userLocale && availableLanguages.includes(userLocale)) {
    i18n.changeLanguage(userLocale)
  }
}

function getSlugLanguage() {
  if (_window.we?.authMgr?.getBranchConfig) {
    const slugLanguage = _window.we?.authMgr?.getBranchConfig()?.defaultLocale?.substring(0, 2)
    if (Object.keys(availableResources).includes(slugLanguage)) {
      return slugLanguage
    }
  }
  return null
}
