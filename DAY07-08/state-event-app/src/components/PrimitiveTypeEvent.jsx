import { useState } from 'react';
import classes from './css/PrimitiveTypeEvent.module.css';

export const PrimitiveTypeEvent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const handleUserName = e => setUserName(e.target.value);
  const handleSave = () => {
    const user = { email, password, userName };
    console.log(user);
    alert('저장');
  };
  const handleInit = () => {
    setEmail('');
    setPassword('');
    setUserName('');
  };

  const handleEnterSave = e => {
    if (e.key === 'Enter') {
      const user = { email, password, userName };
      console.log(user);
      alert('저장');
    }
  };

  return (
    <div className={classes.primitive}>
      <h1>회원 가입 - 원시타입 데이터 바인딩</h1>
      <div>
        <div className={classes['primitive__input-box']}>
          <label className={classes.label} htmlFor='email'>
            이메일
          </label>
          <input type='email' name='email' onChange={handleEmail} />
        </div>

        <div className={classes['primitive__input-box']}>
          <label className={classes.label} htmlFor='password'>
            비밀번호
          </label>
          <input type='password' name='password' onChange={handlePassword} />
        </div>

        <div className={classes['primitive__input-box']}>
          <label className={classes.label} htmlFor='user-name'>
            이름
          </label>
          <input
            type='text'
            name='user-name'
            onChange={handleUserName}
            onKeyDown={handleEnterSave}
          />
        </div>

        <div>
          <button onClick={handleSave}>저장</button>
          <button onClick={handleInit}>초기화</button>
        </div>
      </div>
      <hr />
    </div>
  );
};
