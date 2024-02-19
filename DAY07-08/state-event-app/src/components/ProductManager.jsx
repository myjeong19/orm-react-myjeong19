import { useState } from 'react';

const PRODUCT = {
  name: '',
  price: '',
  stock: '',
  manufacturer: '',
};

export const ProductManager = () => {
  const [product, setProduct] = useState(PRODUCT);

  const handleProduct = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setProduct(prevProduct => {
      const updateProduct = {
        ...prevProduct,
        [inputName]: inputValue,
      };
      return updateProduct;
    });
  };

  return (
    <main>
      <h1>제품 정보 관리 화면</h1>

      <ul>
        <li>
          <div>
            <label htmlFor='name'>상품명</label>
            <input
              type='text'
              name='name'
              value={product.name}
              onChange={handleProduct}
            />
          </div>
          <div>
            <label htmlFor='price'>제품 가격</label>
            <input
              type='text'
              name='price'
              value={product.price}
              onChange={handleProduct}
            />
          </div>
          <div>
            <label htmlFor='stock'>재고</label>
            <input
              type='text'
              name='stock'
              value={product.stock}
              onChange={handleProduct}
            />
          </div>
          <div>
            <label htmlFor='manufacturer'>제조사</label>
            <input
              type='text'
              name='manufacturer'
              value={product.manufacturer}
              onChange={handleProduct}
            />
          </div>
        </li>
      </ul>
    </main>
  );
};
