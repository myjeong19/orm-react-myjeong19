// import all helper function
import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
//import LayoutSaga from './layout/saga';

export default function* rootSaga(getState) {
  // saga generator function 배열 안에 추가
  yield all([authSaga()]);
}
