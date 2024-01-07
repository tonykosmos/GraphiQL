import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routerConfig } from './routerConfig';

export function PathRouter() {
  const router = createBrowserRouter(routerConfig);
  return <RouterProvider router={router} />;
}
