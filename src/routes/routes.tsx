import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ErrorRoute from './ErrorRoute';
import Main from './Main';

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
