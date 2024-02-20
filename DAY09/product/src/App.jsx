import { useState } from 'react';

import './App.css';
import { Form } from './components/Form';
import { Tabel } from './components/Tabel';

function App() {
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleSelectedProduct = product => {
    setSelectedProduct(product);
  };

  return (
    <>
      <Form selectedProduct={selectedProduct} />
      <Tabel onProduct={handleSelectedProduct} />
    </>
  );
}

export default App;
