import { useLanguage } from '../../hooks';
import { LanguageSelector } from '../LanguageSelector';
import style from './Header.module.css';
import { useScrollPosition } from '../../hooks';
import { auth, logout } from '../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { dictionary } = useLanguage();
  const scrollPosition = useScrollPosition();
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const doLogOut = () => {
    logout();
  };

  const goToLogInPage = () => {
    navigate('/logIn');
  };

  const goToSignUpPage = () => {
    navigate('/signUp');
  };

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
        {loading ? (
          ''
        ) : user ? (
          <button onClick={doLogOut}>{dictionary.logOut}</button>
        ) : (
          <div className="flex">
            <button onClick={goToLogInPage}>{dictionary.logIn}</button>
            <button onClick={goToSignUpPage}>{dictionary.signUp}</button>
          </div>
        )}
      </div>
    </header>
  );
}
