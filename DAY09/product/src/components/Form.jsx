import classes from './css/Form.module.css';

export const Form = ({ selectedProduct }) => {
  console.log(selectedProduct);
  const { productName, productPrice } = selectedProduct;

  console.log(productName);

  return (
    <form className={classes.form}>
      <h1>신규 제품 등록</h1>

      <div className={classes['product-name']}>
        <label htmlFor='product-name'>제품명</label>
        <input
          type='text'
          name='product-name'
          placeholder='제품명'
          value={productName}
        />
      </div>

      <div className={classes['product-price']}>
        <label htmlFor='product-price'>제품 가격</label>
        <input
          type='number'
          name='product-price'
          placeholder='제품 가격'
          value={productPrice}
        />
      </div>

      <button>저장</button>
    </form>
  );
};
