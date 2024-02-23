import './App.css';
// import { UseStateHook } from './hooks/UseStateHook';
// import { UserReducerHook } from './hooks/UserReducerHook';
// import { UseEffectHook } from './hooks/UseEffectHook';
import { UseMemo } from './hooks/UseMemo';

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
    </div>
  );
}

export default App;
