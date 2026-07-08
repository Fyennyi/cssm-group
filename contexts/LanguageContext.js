import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const LanguageContext = createContext();

export function LanguageProvider({ children, initialTranslations }) {
  const [lang, setLang] = useState('uk');
  const [translationsMap, setTranslationsMap] = useState({
    uk: initialTranslations?.uk || {},
    en: initialTranslations?.en || {}
  });

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
    const savedLang = Cookies.get('language');
    if (savedLang && translationsMap[savedLang]) {
      setLang(savedLang);
      document.documentElement.setAttribute('lang', savedLang);
    }
  }, []);

  const changeLanguage = (newLang) => {
    if (!translationsMap[newLang]) return;
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
