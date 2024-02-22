import './App.css';
import { UseStateHook } from './hooks/UseStateHook';
import { UserReducerHook } from './hooks/UserReducerHook';

function App() {
  return (
    <div className='App'>
      <UseStateHook />

      <hr />

      <UserReducerHook />
    </div>
  );
}

export default App;
