import { combineReducers } from 'redux';
import { Todo } from './todo/reducer';
import { Auth } from './auth/reducer';

//* reducer 파일 통합 combineReducers
export default combineReducers({ Todo, Auth });
