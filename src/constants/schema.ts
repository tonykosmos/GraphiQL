import * as yup from 'yup';

export const schema = yup.object({
  email: yup.string().required('Required field').email(),
  password: yup
    .string()
    .required('Required field')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Should contain 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character'
    ),
  confirmPassword: yup
    .string()
    .required('Required field')
    .oneOf([yup.ref('password')], 'Passwords doesnt match'),
});

export const logInSchema = yup.object({
  email: yup.string().required('Required field').email(),
  password: yup.string().required('Required field'),
});
