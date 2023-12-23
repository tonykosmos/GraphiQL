import { useLanguage } from '../../hooks';

export function Main() {
  const { dictionary } = useLanguage();
  return (
    <div>
      <h1>{dictionary.mainHere}</h1>
    </div>
  );
}
