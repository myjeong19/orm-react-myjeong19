import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

// import APIClient
import { APIClient } from '../../helpers/apiClient';

// * Action Function 처리
import { LOGIN_USER, API_FAILED } from '../../constants/actionTypes';

// Action Funtion
import { loginUser, apiError } from '../actions';

// Backend REST API 통신 APIClient POST method create() 함수 생성

// 2 Parameters (URL, Data)
const create = new APIClient().create();

// Create generator function
// payload {email, password, navigate}
// navigate: React Router Navigate
function* login({ payload: { email, password, navigate } }) {
  try {
    // call: 백엔드 호출 함수 지정
    const response = yield call(create, 'api/member/login', {
      email,
      password,
    });

    // Option. Loccal Storage에 저장
    localStorage.setItem('token', response.data.loginUser);
    localStorage.setItem('token', response.data.token);

    // Global Store에 사용자 정보 값 반영
    //  put: 특정 Action Funciton 실행
    yield put(loginUser(response.data.token, response.data.loginUser));

    navigate('/dashboard');
  } catch (error) {
    yield put(apiError(error));
  }
}

// export generator function
// watchLoginUser 함수 정의, export시, 관련 action 함수 실행 시, 자동으로, Saga generator 함수 호출
export function* watchLoginUser() {
  // takeEvery(ActionType, ActionFunction)
  yield takeEvery(LOGIN_USER, login);
  //   takeEvery: 전달되는 action 타입 별, action 함수 호출
}

// 사용자 인증 Saga function 정의
function* authSaga() {
  yield all([fork(watchLoginUser)]);
  // all([]): 배열 내부의 모든 Saga 함수 호출
  // fork(): 비동기 호출 함수
}

export default authSaga;
