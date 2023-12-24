import { useAuthState } from 'react-firebase-hooks/auth';
import { useLanguage } from '../../hooks';
import classes from './welcome.module.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useEffect } from 'react';

export function Welcome() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

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
