import { Link } from 'react-router-dom';

export const GNB = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to='/main'>
          Home
        </Link>

        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/signin'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/signup'>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
