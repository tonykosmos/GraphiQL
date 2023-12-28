import { Auth } from '../../components/Auth';
import { AppLayout } from '../AppLayout';

export function AuthLayout() {
  return (
    <Auth>
      <AppLayout />
    </Auth>
  );
}
