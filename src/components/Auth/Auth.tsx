import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../utils/firebase';

export function Auth(props) {
  console.log(props.children);
  const [user] = useAuthState(auth);
  const location = useLocation();

  if (!user) {
    return <Navigate to={'/welcome'} state={{ from: location }} replace />;
  }

  return <>{props.children}</>;
}
