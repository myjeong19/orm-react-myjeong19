import { Outlet } from 'react-router-dom';

function Company() {
  return (
    <main>
      <h3>Company</h3>
      <p>Company Descriptions</p>

      <Outlet />
    </main>
  );
}

export default Company;
