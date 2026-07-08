import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('uk');
  const [translationsMap, setTranslationsMap] = useState({ uk: {}, en: {} });

  const t = (key, variables = {}) => {
    const current = translationsMap[lang] || {};
    let translation = current[key] || key;
    Object.keys(variables).forEach(variable => {
      const regex = new RegExp(`\\{${variable}\\}`, 'g');
      translation = translation.replace(regex, variables[variable]);
    });
    return translation;
  };

  useEffect(() => {
    Promise.all([
      fetch('/locales/uk.json').then(r => r.json()),
      fetch('/locales/en.json').then(r => r.json())
    ]).then(([uk, en]) => {
      setTranslationsMap({ uk, en });
      const savedLang = Cookies.get('language');
      const resolvedLang = savedLang && (savedLang === 'uk' || savedLang === 'en') ? savedLang : 'uk';
      setLang(resolvedLang);
      document.documentElement.setAttribute('lang', resolvedLang);
    });
  }, []);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    Cookies.set('language', newLang);
    document.documentElement.setAttribute('lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
