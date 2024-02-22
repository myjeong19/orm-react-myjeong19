import './App.css';
import { UseEffectHook } from './hooks/UseEffectHook';
import { UseStateHook } from './hooks/UseStateHook';
import { UserReducerHook } from './hooks/UserReducerHook';

function App() {
  return (
    <div className='App'>
      <UseStateHook />
      <hr />
      <UserReducerHook />
      <hr />
      <UseEffectHook />
    </div>
  );
}

export default App;
