import { Welcome } from '../pages/Welcome';
import { SignUp } from '../pages/SignUp';
import { LogIn } from '../pages/LogIn';
import { AppLayout, AuthLayout } from './layouts';
import { ErrorPage } from '../pages/ErrorPage';
import { GraphiQLPage } from '../pages/GraphiQLPage';

export const routerConfig = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Welcome /> },
      { path: '/signUp', element: <SignUp /> },
      { path: '/logIn', element: <LogIn /> },
    ],
  },
  {
    path: '/graphiql',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: '', element: <GraphiQLPage /> }],
  },
];
