import { useLanguage } from '../../hooks';

export function Main() {
  const { dictionary } = useLanguage();
  return <h1>{dictionary.mainHere}</h1>;
}
