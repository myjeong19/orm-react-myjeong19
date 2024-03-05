import { Link } from 'react-router-dom';

export const Hedaer = () => {
  return (
    <header>
      <h3>Header</h3>

      <nav>
        <Link to='/'>Main</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Entry'>Entry</Link>
        <Link to='/company'>Company</Link>
        <Link to='/articles'>Article List</Link>
        <Link to='/article/'>Article Regist</Link>
        <Link to='/article/1'>Article Detail</Link>
        <Link to='/product/category'>Category</Link>
        <Link to='/product/detail'>Product</Link>
      </nav>
    </header>
  );
};
