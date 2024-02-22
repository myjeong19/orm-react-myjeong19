import { useReducer } from 'react';
import { countReducer } from './countReducer';

export const UserReducerHook = () => {
  const [state, dispatch] = useReducer(countReducer, 0);

  return (
    <>
      <h1>useReducer 훅</h1>
      <h3>{state}</h3>
      <button
        onClick={() => {
          dispatch({ type: 'add' });
        }}
      >
        Add
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'subtract' });
        }}
      >
        Subtract
      </button>
    </>
  );
};
