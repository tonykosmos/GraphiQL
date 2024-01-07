import { useLanguage } from '../../hooks';
import styles from './ErrorPage.module.css';

export function ErrorPage() {
  const { dictionary } = useLanguage();
  return (
    <div className={styles.errorTextContainer}>
      <h1>{dictionary.titleErrorPage}</h1>
      <h3>{dictionary.textErrorPage}</h3>
    </div>
  );
}
