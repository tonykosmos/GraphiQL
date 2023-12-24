import { useNavigate } from 'react-router-dom';
import { SignUpForm } from '../../components/SignUpForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useEffect } from 'react';

export function SignUp() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  return <SignUpForm />;
}
