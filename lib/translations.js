import fs from 'fs';
import path from 'path';

export function useTranslation(lang) {
  const translations = JSON.parse(fs.readFileSync(path.join(process.cwd(), `public/locales/${lang}.json`), 'utf8'));

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