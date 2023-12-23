import { useLanguage } from '../../hooks';
import { LanguageSelector } from '../LanguageSelector';
import style from './Header.module.css';
import { useScrollPosition } from '../../hooks';

export function Header() {
  const { dictionary } = useLanguage();
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`${style.headerContainer} ${
        scrollPosition > 0 ? style.reducedHeader : ''
      }`}
    >
      {/* TODO: Add link to the Welcome page */}
      <a href="#" className={style.logoContainer}>
        <img
          src="graphql.svg"
          alt={dictionary.logoApp}
          className={style.logo}
        />
        <span className={style.logoText}>GraphQL</span>
      </a>
      <div className={style.controlContainer}>
        <LanguageSelector />
        {/* TODO: Change name button with logic 'Sign In'/'Sign Out' */}
        <button>{dictionary.sign}</button>
      </div>
    </header>
  );
}
