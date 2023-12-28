import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../utils/firebase';

export function Auth({ children }: { children: JSX.Element }) {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (!loading && !user) {
    return <Navigate to={'/welcome'} state={{ from: location }} replace />;
  }

  return children;
}
