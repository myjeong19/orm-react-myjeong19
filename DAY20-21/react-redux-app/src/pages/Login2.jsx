import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';

import { loginUser, apiError } from '../redux/actions';

import axios from 'axios';

const Login2 = props => {
  const navigate = useNavigate();

  const { token, loginUser } = props;
  console.log(token, loginUser);

  //   const globalDispatch = useDispatch();

  const [login, setLogin] = useState({ email: '', password: '' });

  const onChangeLogin = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onLogin = e => {
    props.loginUser(login.email, login.password, navigate);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onLogin}>
        메일주소:
        <input name='email' value={login.email} onChange={onChangeLogin} />
        암호:
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

// Global Data 속성과, 값을 해당 컴포넌트 Props 하위 속성에 연결
const mapStateToProps = state => {
  const { token, loginUser } = state.Auth;
  return { token, loginUser };
};

export default connect(mapStateToProps, { loginUser, apiError })(Login2);
// Patameters
// 1. Props
// 2. Action Function
