import React, { useState } from 'react';
import { dictionaryList } from '../locales';
import { LanguageContext } from '../context/LanguageContext';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const defaultLanguage = localStorage.getItem('language');
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');
  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected: string) => {
      setUserLanguage(selected);
      localStorage.setItem('language', selected);
    },
  };
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}
