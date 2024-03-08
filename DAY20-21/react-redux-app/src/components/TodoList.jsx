import { useState } from 'react';

// dispatch 함수를 사용하기 위해 useDispatch를 import 한다.
// actinn 함수를 사용하기 위해 import 한다.
import { useDispatch } from 'react-redux';
import { addTodoCount } from '../redux/actions';

const initialTodos = {
  title: '',
  orderby: 0,
};

const initialTodoList = [];

export const TodoList = () => {
  const globalDispatch = useDispatch();

  const [todo, setTodo] = useState(initialTodos);
  const [todoList, setTodoList] = useState(initialTodoList);
  const elementTodoList = todoList.map((todo, index) => {
    return (
      <li key={todo.title + index}>
        <span>{todo.title}</span>
        <span>{todo.orderby}</span>
      </li>
    );
  });

  const handleUserInput = e => {
    const eventValue = e.target.value;

    setTodo(prevValue => {
      return { ...prevValue, [e.target.name]: eventValue };
    });
  };

  const handleAdd = e => {
    e.preventDefault();
    setTodoList(prevTodo => {
      return [...prevTodo, todo];
    });

    globalDispatch(addTodoCount(todoList.length + 1));
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <div>
          <label htmlFor='todo'>할 일</label>
          <input
            type='text'
            id='todo'
            name='title'
            value={todo.title}
            onChange={handleUserInput}
          />
        </div>
        <div>
          <label htmlFor='orderby'>우선 순위</label>
          <select name='orderby' id='orderby' onChange={handleUserInput}>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </div>
        <button>추가</button>
      </form>

      {elementTodoList}
    </div>
  );
};
