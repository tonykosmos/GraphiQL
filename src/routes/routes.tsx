import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './root';
import { ErrorRoute } from './ErrorRoute';
import { Main } from './main';
import { Welcome } from '../pages/Welcome';
import { SignUp } from '../pages/SignUp';
import { LogIn } from '../pages/LogIn';

const routerConfig = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorRoute />,
    children: [
      { path: '', element: <Main /> },
      { path: '/welcome', element: <Welcome /> },
    ],
  },
  {
    path: '/signUp',
    element: <SignUp />,
    errorElement: <ErrorRoute />,
  },
  {
    path: '/logIn',
    element: <LogIn />,
    errorElement: <ErrorRoute />,
  },
];

export function PathRouter() {
  const router = createBrowserRouter(routerConfig);
  return <RouterProvider router={router} />;
}
