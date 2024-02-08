const boxNumber = document.querySelector('.box-number');
const boxTopOperator = document.querySelector('.box-operator1');
const boxSideOperator = document.querySelector('.box-operator2');
const reusltInfo = document.querySelector('p');
const buttonReuslt = document.getElementById('button-result');
const buttonReset = document.getElementById('button-reset');

const prevValues = [];
const currentValues = [];
let prevUserValue = '';
let currentUserValue = '';
let operator = '';
let result = '';

const getUserInput = array =>
  array.reduce((prevValue, currentValue) => prevValue + currentValue);

const getNumberValue = e => {
  if (!operator) {
    prevValues.push(e.target.value);
    const getUserValue = getUserInput(prevValues);
    prevUserValue = +getUserValue;
    reusltInfo.innerText = prevUserValue;
  } else {
    currentValues.push(e.target.value);
    const getUserValue = getUserInput(currentValues);
    currentUserValue = +getUserValue;
    reusltInfo.innerText = currentUserValue;
  }
};

boxNumber.addEventListener('click', getNumberValue);

const getOperator = e => {
  operator = e.target.value;
};

boxSideOperator.addEventListener('click', getOperator);
boxTopOperator.addEventListener('click', getOperator);

const getResult = () => {
  const results = {
    '+': prevUserValue + currentUserValue,
    '-': prevUserValue - currentUserValue,
    '*': prevUserValue * currentUserValue,
    '/': prevUserValue / currentUserValue,
    '%': prevUserValue * 0.01,
  };

  result = results[operator];

  return (reusltInfo.innerText = result);
};

buttonReuslt.addEventListener('click', getResult);

const onReset = () => {
  prevValues.splice(0);
  currentValues.splice(0);
  prevUserValue = '';
  currentUserValue = '';
  operator = '';
  result = '';

  reusltInfo.innerText = 0;
};

buttonReset.addEventListener('click', onReset);
