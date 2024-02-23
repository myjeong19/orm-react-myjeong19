import { useState, useEffect, useRef, useCallback, useContext } from 'react';
import classes from './css/TodoList.module.css';
import { AppContext } from '../App';

const INITIAL_TODO = {
  title: '',
  contents: '',
  orderby: 1,
};

const INITIAL_TODO_LIST = [];

const useTodoCountState = () => {
  const count = useContext(AppContext);
  return count;
};

export const TodoList = () => {
  const [todo, setTodo] = useState(INITIAL_TODO);
  const { title, contents, orderby } = todo;
  const [todoList, setTodoList] = useState(INITIAL_TODO_LIST);

  const count = useContext(AppContext);

  const refTitle = useRef();

  // Custom Hook (useState)
  // Gloobal Data Management
  const [, setCountValue] = useTodoCountState();

  useEffect(() => {
    refTitle.current.focus();
  }, []);

  const handleUesrTodo = useCallback(
    e => {
      const targetName = e.target.name;
      const targetValue = e.target.value;
      setTodo({
        ...todo,
        [targetName]: targetValue,
      });
    },
    [todo]
  );

  const handleAdd = useCallback(() => {
    setTodoList(prevTodoList => [...prevTodoList, todo]);
    setTodo(INITIAL_TODO);
    refTitle.current.focus();

    // Global Data
    setCountValue(() => todoList.length + 1);
  }, [todo]);

  const elementTodo = todoList.map((item, i) => {
    const { title, contents, orderby } = item;
    return (
      <li key={i} className={classes.li}>
        <h3>{title}</h3>
        <p>{contents}</p>
        <strong>{orderby}</strong>
      </li>
    );
  });

  return (
    <>
      <h1>할 일 목록 - 관리자</h1>

      <div className={classes['input-group']}>
        <label htmlFor=''>할 일</label>
        <input
          ref={refTitle}
          type='text'
          name='title'
          onChange={handleUesrTodo}
          value={title}
        />
      </div>

      <div className={classes['input-group']}>
        <label htmlFor=''>내용</label>
        <input
          type='text'
          name='contents'
          onChange={handleUesrTodo}
          value={contents}
        />
      </div>

      <div className={classes['input-group']}>
        <label htmlFor=''>우선순위</label>
        <input
          type='number'
          name='orderby'
          onChange={handleUesrTodo}
          value={orderby}
        />
      </div>

      <button onClick={handleAdd}>Add</button>
      <hr />

      <ul className={classes.ul}>{elementTodo}</ul>
    </>
  );
};
