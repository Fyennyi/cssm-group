import React, { createContext, useContext } from 'react';
import translations from '../translations';

const TranslationContext = createContext();

export const useTranslation = () => useContext(TranslationContext);

export const TranslationProvider = ({ children, language }) => {
  const translate = (key) => translations[language][key] || key;

  return (
    <TranslationContext.Provider value={{ translate, language }}>
      {children}
    </TranslationContext.Provider>
  );
};