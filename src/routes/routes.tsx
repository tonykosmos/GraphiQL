import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './root';
import ErrorRoute from './error';
import Main from './main';

const routerConfig = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorRoute />,
    children: [{ path: '', element: <Main /> }],
  },
];

export default function PathRouter() {
  const router = createBrowserRouter(routerConfig);
  return <RouterProvider router={router} />;
}
