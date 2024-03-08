import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { GNB } from './components/GNB';

const LoginPage = React.lazy(() => import('./pages/Login'));
const EntryPage = React.lazy(() => import('./pages/Register'));
const ProfilePage = React.lazy(() => import('./pages/Profile'));
const MainPage = React.lazy(() => import('./pages/Main'));

function App() {
  return (
    <div className='App'>
      <GNB />
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path='/' Component={MainPage}></Route>
          <Route path='/login' Component={LoginPage}></Route>
          <Route path='/entry' Component={EntryPage}></Route>
          <Route path='/profile' Component={ProfilePage}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
