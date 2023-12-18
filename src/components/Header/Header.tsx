import { useLanguage } from '../../hooks';
import { LanguageSelector } from '../LanguageSelector';
import style from './Header.module.css';
import { useClientRect } from '../../hooks';
import { useLayoutEffect, useRef, useState } from 'react';

export function Header() {
  const { dictionary } = useLanguage();

  const headerRef = useRef<HTMLElement>(null);
  const rect = useClientRect<HTMLElement>(headerRef);
  const [stickyHeader, setStickyHeader] = useState<boolean>(false);

  const handleStickyHeader = (elHeight: number) => {
    if (window.scrollY > elHeight) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  };

  useLayoutEffect(() => {
    handleStickyHeader(rect.height);
  }, [rect]);

  return (
    <header
      className={`${style.headerContainer} ${stickyHeader ? style.sticky : ''}`}
      ref={headerRef}
    >
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
        <button>{dictionary.sign}</button>
      </div>
    </header>
  );
}
