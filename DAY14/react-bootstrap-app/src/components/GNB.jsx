import { Link } from 'react-router-dom';

export const GNB = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
      <div className='container d-flex justify-content-between'>
        <div className='collapse navbar-collapse'>
          <Link className='navbar-brand' to='/main'>
            Home
          </Link>
        </div>

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
            <li className='nav-item'>
              <Link className='nav-link' to='/article/list'>
                Article List
              </Link>
            </li>{' '}
            <li className='nav-item'>
              <Link className='nav-link' to='/article/regist'>
                Article Regist
              </Link>
            </li>{' '}
            <li className='nav-item'>
              <Link className='nav-link' to='/article/detail/1'>
                Article Detail
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
