import { useRouter } from 'next/router'

export function useTranslation(lang) {
  const router = useRouter()
  const t = (key) => {
    const translations = require(`../public/locales/${lang}.json`)
    return translations[key] || key
  }
  return { t }
}