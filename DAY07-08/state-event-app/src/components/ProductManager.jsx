import { useState } from 'react';

const PRODUCT_LIST = [
  {
    name: 'TEST',
    price: 'TEST',
    stock: 'TEST',
    manufacturer: 'TEST',
  },
];

const PRODUCT = {
  name: '',
  price: '',
  stock: '',
  manufacturer: '',
};

export const ProductManager = () => {
  const [productList, setProductList] = useState(PRODUCT_LIST);
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

  const handleSave = () => {
    setProductList(prevList => {
      const updatedList = [...prevList, { ...product }];
      return updatedList;
    });
    setProduct(PRODUCT);
  };

  const handleInit = () => setProduct(PRODUCT);

  const handleSelect = item => {
    setProduct(prevProduct => {
      const selectProduct = { ...prevProduct, ...item };
      return selectProduct;
    });
  };

  const handleDelete = selectItem => {
    const updateProductList = productList.filter(
      item => selectItem.name !== item.name
    );
    return setProductList(updateProductList);
  };

  const elementProductList = productList.map((item, index) => {
    const { name, price, stock, manufacturer } = item;

    return (
      <tr key={index}>
        <td>{name}</td>
        <td>{price}</td>
        <td>{stock}</td>
        <td>{manufacturer}</td>
        <td>
          <button onClick={() => handleSelect(item)}>선택</button>
          <button onClick={() => handleDelete(item)}>삭제</button>
        </td>
      </tr>
    );
  });

  return (
    <main>
      <h1>제품 정보 관리 화면</h1>
      <div>
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

        <button onClick={handleSave}>저장</button>
        <button onClick={handleInit}>초기화</button>
        <hr />
      </div>

      <ul>
        <table>
          <thead>
            <tr>
              <th> 제품명</th>
              <th>가격</th>
              <th>재고량</th>
              <th>제조사</th>
              <th>선택/삭제</th>
            </tr>
          </thead>
          <tbody>{elementProductList}</tbody>
        </table>
      </ul>
    </main>
  );
};
