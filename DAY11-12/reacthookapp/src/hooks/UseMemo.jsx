import { useState, useMemo } from 'react';

const getAverage = numbers => {
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

export const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [list, setList] = useState([]);

  const handleNumber = () => setNumber(prevNumber => prevNumber + 1);

  const handleAdd = () => {
    setList(prevList => {
      const updatedList = prevList.concat(+number);
      setNumber(0);

      return updatedList;
    });
  };

  const average = useMemo(() => getAverage(list), [list]);

  //   const average = getAverage(list);

  return (
    <>
      <input type='text' value={number} onChange={handleNumber} />
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
