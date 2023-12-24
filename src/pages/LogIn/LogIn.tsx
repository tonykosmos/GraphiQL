import { AuthForm } from '../../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useEffect } from 'react';

export function LogIn() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate('/');
    }
    // require to add navigate (???)
  }, [user, loading, navigate]);

  return <AuthForm />;
}
