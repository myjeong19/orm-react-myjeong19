import { useState, useCallback, useRef } from 'react';

const getAverage = numbers => {
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

export const UseRef = () => {
  const [number, setNumber] = useState(0);
  const [list, setList] = useState([]);

  const numberTag = useRef(null);
  const average = getAverage(list);
  const onNumberChange = e => {
    setNumber(+e.target.value);
  };

  const handleAdd = useCallback(
    e => {
      setList(prevList => {
        const updatedList = prevList.concat(+number);
        setNumber(0);

        numberTag.current.focus();
        return updatedList;
      });
    },
    [number]
  );

  return (
    <>
      <input
        ref={numberTag}
        type='number'
        value={number}
        onChange={onNumberChange}
      />
      <button onClick={handleAdd}>ADD</button>

      <div>
        <b>평균 값: {average}</b>
      </div>

      <ul>
        {list.map((number, index) => {
          return <li key={index}>{number}</li>;
        })}
      </ul>
    </>
  );
};
