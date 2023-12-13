import { useLanguage } from '../../hooks';
import style from './Footer.module.css';

export function Footer() {
  const { dictionary } = useLanguage();
  return (
    <footer className={style.footerContainer}>
      <div className={style.logo}>
        <a className={style.link} href="https://rs.school/react" target="blank">
          <img
            src="https://rs.school/images/rs_school_js.svg"
            alt={dictionary.logoCourse}
          />
        </a>
      </div>
      <div className={style.year}>2023</div>
      <div className={style.authorsContainer}>
        {dictionary.authors}:
        <a
          className={style.link}
          href="https://github.com/tonykosmos"
          target="blank"
        >
          {dictionary.kosmovsky}
        </a>
        <a
          className={style.link}
          href="https://github.com/oleg-gobrik"
          target="blank"
        >
          {dictionary.gobrik}
        </a>
      </div>
    </footer>
  );
}
