import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer';
import { GNB } from './components/GNB';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Main } from './pages/Main';

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
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
