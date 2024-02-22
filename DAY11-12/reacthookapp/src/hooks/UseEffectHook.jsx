import { useEffect, useState, useReducer } from 'react';

const USER_VALEUS = {
  name: '',
  email: '',
  password: '',
  phone: '',
};

export const UseEffectHook = () => {
  const [userValues, setUserValues] = useState(USER_VALEUS);
  const [userList, setUserList] = useState([]);
  const { name, email, password, phone } = userValues;

  useEffect(() => {
    return () => {};
  }, [userList]);

  useEffect(() => {
    return () => {};
  });

  const onUser = e => {
    setUserValues(prevUserValues => {
      const updatedUserValues = {
        ...prevUserValues,
        [e.target.name]: e.target.value,
      };
      return updatedUserValues;
    });
  };

  const onSave = () => {
    setUserList(prevUserList => {
      const updatedUserList = [...prevUserList, userValues];
      return updatedUserList;
    });
  };

  console.log(userList);

  return (
    <div>
      <h1>사용자 정보 관리</h1>
      <div>
        <h3>사용자 정보 입력 영역</h3>
        <input type='text' name='name' onChange={onUser} value={name} />
        <input type='text' name='email' onChange={onUser} value={email} />
        <input
          type='password'
          name='password'
          onChange={onUser}
          value={password}
        />
        <input type='text' name='phone' onChange={onUser} value={phone} />

        <button onClick={onSave}>사용자 등록</button>

        <h3>사용자 입력 정보 출력</h3>
        <div>
          <span>이름: {name}</span>
          <span>메일: {email}</span>
          <span>비밀번호: {password}</span>
          <span>전화번호: {phone}</span>
          <hr />총 사용자 수: {userList.length}
        </div>
      </div>
    </div>
  );
};
