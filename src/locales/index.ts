import ru from './ru.json';
import en from './en.json';

export type LanguageDictionary = {
  [key: string]: string;
};

export const dictionaryList: { [key: string]: LanguageDictionary } = { en, ru };
export const languageOptions = {
  en: 'English',
  ru: 'Русский',
};
