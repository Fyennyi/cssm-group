export function useTranslation(lang) {
  const translations = require(`../public/locales/${lang}.json`)

  const t = (key, variables = {}) => {
    let translation = translations[key] || key

    Object.keys(variables).forEach(variable => {
      const regex = new RegExp(`\\{${variable}\\}`, 'g')
      translation = translation.replace(regex, variables[variable])
    })

    return translation
  }

  return { t }
}