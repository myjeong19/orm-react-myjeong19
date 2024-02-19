import { useState } from 'react';

export const DataBindingTest = () => {
  const [message, setMessage] = useState('안녕하세요.');

  const handleOnInput = e => setMessage(e.target.value);
  const handleResetInput = () => setMessage('');

  return (
    <>
      <input
        type='text'
        name='message'
        placeholder='메시지를 입력해주세요.'
        value={message}
        onChange={handleOnInput}
      />
      <button onClick={handleResetInput}>초기화</button>

      <div>
        <p>MESSAGE: {message}</p>
      </div>
      <hr />
    </>
  );
};
