import { logInSchema } from '../../constants/schema';
import classes from './AuthForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks';
import { auth } from '../../firebase';
import { logInFields } from './types';
import { signInWithEmailAndPassword } from 'firebase/auth';

export function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(logInSchema), mode: 'onChange' });

  const navigate = useNavigate();
  const { dictionary } = useLanguage();

  const LogIn = (values: logInFields) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        if (res.user) {
          navigate('/');
        }
      })
      .catch((err) => {
        if (err.message === 'Firebase: Error (auth/invalid-credential).') {
          alert(dictionary.invalidCredentials);
        }
      });
  };

  function onSubmit(values: logInFields) {
    if (isValid) {
      LogIn(values);
    }
  }

  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          {dictionary.email}:
          <input
            type="text"
            className={classes.formInput}
            id="email"
            {...register('email')}
          />
          {errors.email ? (
            <span className={classes.errorMessage}>{errors.email.message}</span>
          ) : (
            <span className={classes.errorMessage}></span>
          )}
        </label>
        <label htmlFor="password">
          <div className={classes.spaceBetween}>
            <div>{dictionary.password}</div>
          </div>
          <input
            type="password"
            className={classes.formInput}
            id="password"
            {...register('password')}
          />
        </label>
        <button className={classes.formBtn} type="submit" disabled={!isValid}>
          {dictionary.logIn}
        </button>
      </form>
    </div>
  );
}
