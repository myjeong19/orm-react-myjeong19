import { useState } from 'react';
import classes from './css/ReferTypeEvent.module.css';

const USER = {
  email: '',
  password: '',
  userName: '',
};

export const ReferTypeEvent = () => {
  const [user, setUser] = useState(USER);

  const handleUserInput = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setUser(prevUser => {
      const updatedUser = {
        ...prevUser,
        [inputName]: inputValue,
      };
      return updatedUser;
    });
  };

  const handleSave = () => console.log(user);
  const handleInit = () => setUser(USER);

  return (
    <div className={classes.primitive}>
      <h1>회원 가입 - 참조타입 데이터 바인딩</h1>
      <div>
        <div className={classes['primitive__input-box']}>
          <label className={classes.label} htmlFor='email'>
            이메일
          </label>
          <input
            type='email'
            name='email'
            onChange={handleUserInput}
            value={user.email}
          />
        </div>

        <div className={classes['primitive__input-box']}>
          <label className={classes.label} htmlFor='password'>
            비밀번호
          </label>
          <input
            type='password'
            name='password'
            onChange={handleUserInput}
            value={user.password}
          />
        </div>

        <div className={classes['primitive__input-box']}>
          <label className={classes.label} htmlFor='userName'>
            이름
          </label>
          <input
            type='text'
            name='userName'
            onChange={handleUserInput}
            value={user.userName}
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
