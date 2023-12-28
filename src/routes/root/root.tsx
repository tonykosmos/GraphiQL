import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
// import { Auth } from '../../components/Auth';
import { useEffect } from 'react';

export function Root() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      navigate('/welcome');
    }
  }, [user, loading, navigate]);
  return (
    <div>
      {/* <Auth>  */}
      <Header />
      <Outlet />
      <Footer />
      {/* </Auth> */}
    </div>
  );
}
