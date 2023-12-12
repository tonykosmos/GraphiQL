import React, { useState } from 'react';
import { dictionaryList } from '../../locales';
import { LanguageContext } from './LanguageContext';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const defaultLanguage = window.localStorage.getItem('language');
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');
  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected: string) => {
      setUserLanguage(selected);
      window.localStorage.setItem('language', selected);
    },
  };
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}
