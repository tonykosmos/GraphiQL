import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div>
      <h1>Header</h1>
      <div>
        <Outlet />
      </div>
      <h1>Footer</h1>
    </div>
  );
}
