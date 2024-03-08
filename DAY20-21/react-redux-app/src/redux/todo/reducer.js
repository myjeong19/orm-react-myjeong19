//* Step 1. import Action Type
import { TODO_COUNT } from '../../constants/actionTypes';

//* Step 2. 전역 데이터 구조 정의 초기 값 설정
const INIT_STATE = { todoCount: 0 };

//* Step 3. Reducer 함수 정의
//* Action Type 별로, 전역 상태를 관리해줌

//* state = 전역 데이터
export const Todo = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TODO_COUNT:
      return { ...state, todoCount: action.payload.todoCount };
    default:
      return { ...state };
  }
};
