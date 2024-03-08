//* useSelector를 사용하여 Redux Store의 상태를 가져온다.
import { useSelector } from 'react-redux';

export const Counter = () => {
  //* useSelector를 사용하여 todoCount를 가져온다.
  const todoCount = useSelector(state => state.Todo.todoCount);

  return (
    <div>
      <h1>오늘 할 일 {todoCount}</h1>
    </div>
  );
};
