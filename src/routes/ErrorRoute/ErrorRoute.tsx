import { useRouteError } from 'react-router-dom';
import { isRouteErrorResponse } from 'react-router-dom';
import { useLanguage } from '../../hooks';

export function ErrorRoute() {
  const { dictionary } = useLanguage();
  const error: unknown = useRouteError();
  return (
    <>
      <h1>{dictionary.errorRoute}</h1>
      {isRouteErrorResponse(error) && (
        <>
          <h2>{error.status}</h2>
          <p>{error.statusText}</p>
          {error.data?.message && <p>{error.data.message}</p>}
        </>
      )}
    </>
  );
}
