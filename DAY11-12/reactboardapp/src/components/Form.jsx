import classes from './css/Form.module.css';

export const Form = ({ onList, userValues, onValues }) => {
  const handleUserValus = e => {
    const targetName = e.target.name;
    const targetValue = e.target.value;

    onValues(prevValues => ({ ...prevValues, [targetName]: targetValue }));
  };

  const handleList = (state, userValues) => onList(state, userValues);

  return (
    <div className={classes.form}>
      <div className={classes['input-box']}>
        <label htmlFor='title'>제목</label>
        <input
          type='text'
          name='title'
          id='title'
          value={userValues.title}
          onChange={handleUserValus}
        />
      </div>
      <div className={classes['input-box']}>
        <label htmlFor='contents'>내용</label>
        <input
          type='text'
          name='contents'
          id='contents'
          value={userValues.contents}
          onChange={handleUserValus}
        />
      </div>
      <div className={classes['input-box']}>
        <label htmlFor='registrant'>등록자</label>
        <input
          type='text'
          name='registrant'
          id='registrant'
          value={userValues.registrant}
          onChange={handleUserValus}
        />
      </div>

      <div className={classes['button-group']}>
        <button onClick={() => handleList('add', userValues)}>등록</button>
        <button onClick={() => handleList('edit', userValues)}>수정</button>
        <button onClick={() => handleList('delete', userValues)}>삭제</button>
        <button onClick={() => handleList('reset', userValues)}>초기화</button>
      </div>
    </div>
  );
};
