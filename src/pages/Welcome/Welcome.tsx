import { useLanguage } from '../../hooks';
import classes from './welcome.module.css';

export function Welcome() {
  const { dictionary } = useLanguage();

  return (
    <div className={classes.welcomePageRoot}>
      <div className={classes.welcomePageContainer}>
        <h1 className={classes.welcomeHeader}>
          {dictionary.welcomeToGraphiqlApp}
        </h1>
      </div>
    </div>
  );
}
