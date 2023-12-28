import { signUpSchema } from '../../constants/schema';
import classes from './SignUpForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks';
import { registerWithEmailAndPassword } from '../../utils/firebase';
import { signUpFields } from './types';

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(signUpSchema), mode: 'onChange' });

  const navigate = useNavigate();
  const { dictionary } = useLanguage();

  const signUp = (values: signUpFields) => {
    registerWithEmailAndPassword(values.email, values.password).then(() => {
      navigate('/');
    });
  };

  function onSubmit(values: signUpFields) {
    if (isValid) {
      signUp(values);
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
          <span className={classes.errorMessage}>
            {errors.email ? errors.email.message : ''}
          </span>
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
          <span className={classes.errorMessage}>
            {errors.password ? errors.password.message : ''}
          </span>
        </label>
        <label htmlFor="confirmPassword">
          {dictionary.confirmPassword}:
          <input
            type="password"
            className={classes.formInput}
            id="confirmPassword"
            {...register('confirmPassword')}
          />
          <span className={classes.errorMessage}>
            {errors.confirmPassword ? errors.confirmPassword.message : ''}
          </span>
        </label>
        <button className={classes.formBtn} type="submit" disabled={!isValid}>
          {dictionary.signUp}
        </button>
      </form>
    </div>
  );
}
