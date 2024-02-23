import './App.css';
// import { UseStateHook } from './hooks/UseStateHook';
// import { UserReducerHook } from './hooks/UserReducerHook';
// import { UseEffectHook } from './hooks/UseEffectHook';
import { UseMemo } from './hooks/UseMemo';
import { UseCallback } from './hooks/UseCallback';
import { UseRef } from './hooks/UseRef';

function App() {
  return (
    <div className='App'>
      {/* <UseStateHook />
      <hr />
      <UserReducerHook />
      <hr />
      <UseEffectHook />
      <hr /> */}
      <UseMemo />
      <hr />
      <UseCallback />
      <hr />
      <UseRef />
    </div>
  );
}

export default App;
