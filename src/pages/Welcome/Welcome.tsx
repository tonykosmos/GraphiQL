import { useLanguage } from '../../hooks';
import classes from './Welcome.module.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';
import { Link } from 'react-router-dom';

export function Welcome() {
  const { dictionary } = useLanguage();
  const [user] = useAuthState(auth);

  return (
    <div className={classes.welcomePageContainer}>
      <h1 className={classes.welcomeHeader}>
        {dictionary.welcomeToGraphiqlApp}
      </h1>
      {user && (
        <p className={classes.descriptionLink}>
          {dictionary.descriptionLinkToExplorer}
          <Link className={classes.link} to="/graphiql">
            {dictionary.explorer}
          </Link>
        </p>
      )}
    </div>
  );
}
