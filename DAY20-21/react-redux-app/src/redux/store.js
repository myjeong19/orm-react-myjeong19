// configureStore는 store 구성을 단순화하는 데 사용
// import { configureStore } from '@reduxjs/toolkit';

// // reducer 통합본 가져오기
// import reducers from './reducers';

// // create store
// const store = configureStore({
//   reducer: reducers,
//   devTools: true,
//   //   전역 스토어 데이터를 브라우저에서 확인 가능하게 설정
// });

// // export default store;
// export default store;

// Saga 환경 지원
// Saga환경을 지원하는 store구성 방식
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // 기존 store에, saga 미들웨어 통합
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  // Saga 미들웨어 실행
  sagaMiddleware.run(sagas);
  return store;
}
