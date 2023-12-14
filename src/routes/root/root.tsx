import { Outlet } from 'react-router-dom';
import { useLanguage } from '../../hooks';
import { LanguageSelector } from '../../components/LanguageSelector';

export function Root() {
  const { dictionary } = useLanguage();
  return (
    <div>
      <h1>{dictionary.headerHere}</h1>
      <LanguageSelector />
      <div>
        <Outlet />
      </div>
      <h1>{dictionary.footerHere}</h1>
    </div>
  );
}
