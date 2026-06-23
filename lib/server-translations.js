import fs from 'fs';
import path from 'path';

export function getTranslations(lang) {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), `public/locales/${lang}.json`), 'utf8'));
}