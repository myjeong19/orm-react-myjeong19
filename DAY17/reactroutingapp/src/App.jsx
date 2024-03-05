// 코드 분할 방식을 통한 최적화 Suspense 객체 참조
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// 레이아웃
import { Hedaer } from './components/Hedaer';
import { Footer } from './components/Footer';

// ! 일반적인 컴포넌트 참조 방식은 최초 로딩시 성능저하가 야기되며, 렌더링시 대체 효과등을 주기 어렵다.
// ! react.lazy()를 사용하여 컴포넌트를 참조하면, 해당 컴포넌트가 필요한 시점에 로딩되어 성능저하를 방지할 수 있다.
// import { Main } from './pages/Main';
// import { Company } from './pages/Company';
// import { Login } from './pages/auth/Login';
// import { Entry } from './pages/auth/Entry';
// import { ArticleList } from './pages/board/ArticleList';
// import { ArticleDetail } from './pages/board/ArticleDetail';
// import { Category } from './pages/product/Category';
// import { Product } from './pages/product/Product';
// import { NoneExistPage } from './pages/NoneExistPage';
// import { CompanyLocation } from './pages/CompanyLocation';
// import { ArticleRegist } from './pages/board/ArticleRegist';

const Main = React.lazy(() => import('./pages/Main'));
const Company = React.lazy(() => import('./pages/Company'));
const Login = React.lazy(() => import('./pages/auth/Login'));
const Entry = React.lazy(() => import('./pages/auth/Entry'));
const ArticleList = React.lazy(() => import('./pages/board/ArticleList'));
const ArticleDetail = React.lazy(() => import('./pages/board/ArticleDetail'));
const Category = React.lazy(() => import('./pages/product/Category'));
const Product = React.lazy(() => import('./pages/product/Product'));
const NoneExistPage = React.lazy(() => import('./pages/NoneExistPage'));
const CompanyLocation = React.lazy(() => import('./pages/CompanyLocation'));
const ArticleRegist = React.lazy(() => import('./pages/board/ArticleRegist'));

function App() {
  return (
    <div className='App'>
      <Hedaer />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/company' element={<Company />}>
            <Route path='location' element={<CompanyLocation />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/entry' element={<Entry />} />

          <Route path='/articles' element={<ArticleList />} />
          <Route path='/article/' element={<ArticleRegist />} />
          <Route path='/article:aid/' element={<ArticleDetail />} />

          <Route path='/product/detail' element={<Product />} />
          <Route path='/product/category' element={<Category />} />
          <Route path='*' element={<NoneExistPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
