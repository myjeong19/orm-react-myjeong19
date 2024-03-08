import { useState } from 'react';

const initialUser = {
  name: '',
  email: '',
  password: '',
};

const Entry = () => {
  const [user, setUser] = useState(initialUser);

  const handleSubmit = e => {
    e.preventDefault();

    console.log(user);
  };

  const updateValues = e => {
    setUser(prevValues => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='text'>이름</label>
        <input
          type='text'
          id='text'
          name='name'
          value={user.name}
          onChange={updateValues}
        />
      </div>
      <div>
        <label htmlFor='email'>이메일</label>
        <input
          type='email'
          id='email'
          name='email'
          value={user.email}
          onChange={updateValues}
        />
      </div>
      <div>
        <label htmlFor='password'>패스워드</label>
        <input
          type='password'
          id='password'
          name='password'
          value={user.password}
          onChange={updateValues}
        />
      </div>
      <button type='submit'>로그인</button>
    </form>
  );
};

export default Entry;
