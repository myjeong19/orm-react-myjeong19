import React from 'react';
// import { Navigate } from 'react-router-dom';

// Auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Register = React.lazy(() => import('../pages/auth/Register'));

// Dashboard

// Starter Pages

const authProtectedRoutes = [];
const publicRoutes = [
  { path: '/login', component: <Login /> },
  { path: '/logout', component: <Logout /> },
  { path: '/forget-password', component: <ForgetPassword /> },
  { path: '/register', component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
