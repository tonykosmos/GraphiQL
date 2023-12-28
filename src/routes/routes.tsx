import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Welcome } from '../pages/Welcome';
import { SignUp } from '../pages/SignUp';
import { LogIn } from '../pages/LogIn';
import { Auth } from '../components/Auth';
import { AppLayout } from './AppLayout';
import { ErrorPage } from '../pages/ErrorPage';
import { GraphiQLPage } from '../pages/GraphiQLPage';

const routerConfig = [
  {
    path: '/',
    element: (
      <Auth>
        <AppLayout />
      </Auth>
    ),
    errorElement: <ErrorPage />,
    children: [{ path: '', element: <GraphiQLPage /> }],
  },
  {
    path: '/welcome',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: '', element: <Welcome /> }],
  },
  {
    path: '/signUp',
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/logIn',
    element: <LogIn />,
    errorElement: <ErrorPage />,
  },
];

export function PathRouter() {
  const router = createBrowserRouter(routerConfig);
  return <RouterProvider router={router} />;
}
