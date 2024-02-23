import { createContext, useContext, useState } from 'react';
import './App.css';

// import { UseStateHook } from './hooks/UseStateHook';
// import { UserReducerHook } from './hooks/UserReducerHook';
// import { UseEffectHook } from './hooks/UseEffectHook';
// import { UseMemo } from './hooks/UseMemo';
// import { UseCallback } from './hooks/UseCallback';
// import { UseRef } from './hooks/UseRef';
import { Counter } from './context/Counter';
import { TodoList } from './context/TodoList';

export const AppContext = createContext();

function CounterProvider({ children }) {
  const count = useState(0);

  return <AppContext.Provider value={count}>{children}</AppContext.Provider>;
}

export default function App() {
  return (
    <div className='App'>
      {/* <UseStateHook /> */}
      {/* <UserReducerHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <UseRef /> */}

      <CounterProvider>
        <Counter />
        <hr />
        <TodoList />
      </CounterProvider>
    </div>
  );
}
