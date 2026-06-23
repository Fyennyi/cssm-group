import fs from 'node:fs';
import path from 'node:path';

export function getTranslations(lang) {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), `public/locales/${lang}.json`), 'utf8'));
}