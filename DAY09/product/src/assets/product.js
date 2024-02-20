class Product {
  constructor(productNumber, productName, productPrice) {
    this.productNumber = productNumber;
    this.productName = productName;
    this.productPrice = productPrice;
  }
}

export const PRODUCT_LIST = [
  new Product('1', '삼성 노트북', 1000),
  new Product('2', '애플 노트북', 2000),
  new Product('3', '레노버 노트북', 1500),
];
