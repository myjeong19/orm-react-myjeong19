import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/scss/bootstrap.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer';
import { GNB } from './components/GNB';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Main } from './pages/Main';
import { List } from './pages/Article/List';
import { Regist } from './pages/Article/Regist';
import { Detail } from './pages/Article/Detail';

function App() {
  return (
    <BrowserRouter>
      <GNB />
      <div className='App'>
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
              <Route path='/' exact={true} Component={Main} />
              <Route path='/signin' Component={Login} />
              <Route path='/signup' Component={Register} />
              <Route path='/article/list' Component={List} />
              <Route path='/article/regist' Component={Regist} />
              <Route path='/article/detail/:id' Component={Detail} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
