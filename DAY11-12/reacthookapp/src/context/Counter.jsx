import { useContext } from 'react';
import { AppContext } from '../App';

export const Counter = () => {
  const count = useContext(AppContext);

  return (
    <>
      <h1>총 할 일: {count}</h1>
    </>
  );
};
