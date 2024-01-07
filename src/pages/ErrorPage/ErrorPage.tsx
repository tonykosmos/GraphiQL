import { useLanguage } from '../../hooks';

export function ErrorPage() {
  const { dictionary } = useLanguage();
  return (
    <>
      <h1>{dictionary.titleErrorPage}</h1>
      <h3>{dictionary.textErrorPage}</h3>
    </>
  );
}
