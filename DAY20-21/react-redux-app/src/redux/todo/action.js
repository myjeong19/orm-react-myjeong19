// 관련된 Action Tpye 참조

import { TODO_COUNT } from '../../constants/actionTypes';

// Redux Action Function
export const addTodoCount = todoCount => ({
  type: TODO_COUNT,
  //   payload = Data
  payload: { todoCount },
});
