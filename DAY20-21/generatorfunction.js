//* generator function 정의
//* yield: 중단
//? return과 같은건가

//* generator function는 함수 내의 로직을 순차적으로 진행시키며,
//* 진행되는 순서에 따른 반환 값을 다양하게 반환할 수 있다.
// const gen = function* () {
//   console.log(1);
//   yield;

//   console.log(2);
//   yield;

//   console.log(3);
//   yield;
// };

// const display = gen();

// display.next(); // 1
// //* next() generator function에서 제공되는 함수.
// //* yield를 기준으로, 로직을 순차적으로 실행시킨다.
// display.next(); // 2
// display.next(); // 3

let i = 0;

const gen2 = function* () {
  while (true) {
    yield i++;
  }
};

const display2 = gen2();
display2.next();
console.log(i);
display2.next();
console.log(i);
display2.next();
console.log(i);
