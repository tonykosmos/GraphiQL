import { LanguageDictionary } from '../../locales/index';
import { createContext, useContext } from 'react';

interface LanguageContextType {
  userLanguage: string;
  userLanguageChange: (userLanguage: string) => void;
  dictionary: LanguageDictionary;
}

export const LanguageContext = createContext<LanguageContextType>({
  userLanguage: 'en',
  userLanguageChange: () => {},
  dictionary: {},
});

export const useLanguage = () => useContext(LanguageContext);
