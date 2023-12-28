import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './root';
import { ErrorRoute } from './ErrorRoute';
import { Main } from './main';
import { Welcome } from '../pages/Welcome';
import { SignUp } from '../pages/SignUp';
import { LogIn } from '../pages/LogIn';
import { Auth } from '../components/Auth';

const routerConfig = [
  {
    path: '/',
    element: (
      <Auth>
        <Root />
      </Auth>
    ),
    errorElement: <ErrorRoute />,
    children: [{ path: '', element: <Main /> }],
  },
  {
    path: '/welcome',
    element: <Root />,
    errorElement: <ErrorRoute />,
    children: [{ path: '', element: <Welcome /> }],
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
