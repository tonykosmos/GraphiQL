import { languageOptions } from '../../locales';
import { useLanguage } from '../../hooks';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

const idLanguageSelectLabel = 'id-language-select-label';
const idLanguageSelect = 'id-language-select';

export function LanguageSelector() {
  const { dictionary, userLanguage, userLanguageChange } = useLanguage();

  const handleLanguageChange = (e: SelectChangeEvent) =>
    userLanguageChange(e.target.value);
  return (
    <FormControl>
      <InputLabel
        sx={{ color: 'var(--label-font-color)' }}
        id={idLanguageSelectLabel}
      >
        {dictionary.language}
      </InputLabel>
      <Select
        labelId={idLanguageSelectLabel}
        id={idLanguageSelect}
        value={userLanguage}
        label={dictionary.language}
        onChange={handleLanguageChange}
        sx={{ color: 'var(--main-font-color)' }}
      >
        {Object.entries(languageOptions).map(([id, name]) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
