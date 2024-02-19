import './App.css';
import { DataBindingTest } from './components/DataBindingTest';
import { PrimitiveTypeEvent } from './components/PrimitiveTypeEvent';
import { ProductManager } from './components/ProductManager';
import { ReferTypeEvent } from './components/ReferTypeEvent';

function App() {
  return (
    <div className='App'>
      <DataBindingTest />
      <PrimitiveTypeEvent />
      <ReferTypeEvent />
      <ProductManager />
    </div>
  );
}

export default App;
