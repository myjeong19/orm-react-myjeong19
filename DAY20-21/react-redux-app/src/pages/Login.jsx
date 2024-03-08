import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { userLogin } from '../redux/actions';

import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const globalDispatch = useDispatch();

  const [login, setLogin] = useState({ email: '', password: '' });

  const onChangeLogin = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onLogin = e => {
    axios
      .post('http://localhost:3005/api/member/login', login)
      .then(res => {
        console.log(res.data);

        window.localStorage.setItem('token', res.data.data.token);

        if (res.data.code === '200') {
          globalDispatch(
            userLogin(res.data.data.token, res.data.data.loginUser)
          );
          navigate('/');
        }
      })
      .catch(err => {
        console.error('에러발생');
        console.log(err);
      });
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onLogin}>
        메일주소:{' '}
        <input name='email' value={login.email} onChange={onChangeLogin} />
        암호:{' '}
        <input
          type='password'
          name='password'
          value={login.password}
          onChange={onChangeLogin}
        />
        <button type='submit'>로그인</button>
      </form>
    </div>
  );
};

export default Login;
