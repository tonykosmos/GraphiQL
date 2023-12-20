import { Outlet } from 'react-router-dom';
import { useLanguage } from '../../hooks';
import { LanguageSelector } from '../../components/LanguageSelector';
import { Footer } from '../../components/Footer';

export function Root() {
  const { dictionary } = useLanguage();
  return (
    <div>
      <h1>{dictionary.headerHere}</h1>
      <LanguageSelector />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
