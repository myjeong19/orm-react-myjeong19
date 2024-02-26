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
        <Link to='/article/list'>Article List</Link>
        <Link to='/article/detail?aidx=200&stock=40'>Article Detail</Link>
        <Link to='/article/detail/10'>Article Detail</Link>
        <Link to='/product/category'>Category</Link>
        <Link to='/product/detail'>Product</Link>
      </nav>
    </header>
  );
};
