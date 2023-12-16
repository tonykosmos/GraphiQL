import { LanguageDictionary } from '../locales/index';
import { createContext } from 'react';

type LanguageContextType = {
  userLanguage: string;
  userLanguageChange: (userLanguage: string) => void;
  dictionary: LanguageDictionary;
};

export const LanguageContext = createContext<LanguageContextType>({
  userLanguage: 'en',
  userLanguageChange: () => {},
  dictionary: {},
});
