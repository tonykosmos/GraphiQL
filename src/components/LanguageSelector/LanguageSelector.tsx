import { languageOptions } from '../../locales';
import { useLanguage } from '../../utils/context';

export function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    userLanguageChange(e.target.value);
  return (
    <select onChange={handleLanguageChange} value={userLanguage}>
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}
