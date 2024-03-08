// configureStore는 store 구성을 단순화하는 데 사용
import { configureStore } from '@reduxjs/toolkit';

// reducer 통합본 가져오기
import reducers from './reducers';

// create store
const store = configureStore({
  reducer: reducers,
  devTools: true,
  //   전역 스토어 데이터를 브라우저에서 확인 가능하게 설정
});

// export default store;
export default store;
