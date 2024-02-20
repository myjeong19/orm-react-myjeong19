import { useState } from 'react';
import classes from './css/Tabel.module.css';
import { PRODUCT_LIST } from '../assets/product';

export const Tabel = ({ onProduct }) => {
  const [productList, setProductList] = useState(PRODUCT_LIST);

  const handleSelected = product => onProduct(product);

  const handleDelete = selectedProduct => {
    const filterProductList = productList.filter(
      product => product.productName !== selectedProduct
    );
    return setProductList(filterProductList);
  };

  const elementProductList = productList.map(product => {
    const { productNumber, productName, productPrice } = product;
    return (
      <tr key={productNumber + productName}>
        <td>{productNumber}</td>
        <td>{productName}</td>
        <td>{productPrice.toLocaleString()}</td>
        <td>
          <button onClick={() => handleSelected(product)}>선택</button>
        </td>
        <td>
          <button onClick={() => handleDelete(productName)}>삭제</button>
        </td>
      </tr>
    );
  });

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>제품번호</th>
          <th>제품명</th>
          <th>가격</th>
          <th>선택</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>{elementProductList}</tbody>
    </table>
  );
};
