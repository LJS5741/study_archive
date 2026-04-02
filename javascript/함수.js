// 함수 : 특정 작업을 반복하거나 재사용할 수 있도록 작성된 코드 블록 입니다.
// 자바스크립트 함수는 입력값(매개변수)을 받아 결과값을 반환(return) 함
// 함수의 주요 기능
// - 입력값 검증 및 오류 처리
// - 지역 스코프를 활용해 전역 변수 오염 방지
// - 비동기 작업에 콜백 함수 사용 가능
// - 객체 생성 및 메서드 정의
// - 함수 자체를 인자로 전달하거나 반환값으로 사용 가능(고차 함수)

// 함수 선언문 : function
// - 호이스팅이 일어 남
// - 함수는 호출 되어야 수행이 됨
//console.log(sum(100, 300));

// function sum(a, b) {
//   return a + b;
// }

// - 함수 표현식 : 변수에 익명 함수를 할당하는 방식
// 호이스팅 되지 되지 않음

const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(100, 200));

// - 화살표 함수
// - 즉시 실행 함수
// - 생성자 함수
// - 콜백함수
// - 클로저

// - 입력 받은 정수보다 미만의 소수의 합을 구하는 함수를 만드세요.
// - 예) 12이면 2+3+5+7+11 = 28
// - 소수란 ? 1과 자기 자신 이외의 자연수로 나눌 수 없는 1보다 큰 자연수를 의미
// 함수 선언문
const prompt = require("prompt-sync")();
const input = Number(prompt("정수 입력 : "));
sumOfPrime(input);

function isPrime(n) {
  if (n < 2) return false; // 2미만은 소수가 아님
  for (let i = 2; i < n; i++) {
    // 2 ~ 자기자신 미만까지 순회
    if (n % i === 0) return false; // 나누어 지면 소수가 아님
  }
  return true;
}

function sumOfPrime(limit) {
  let sum = 0;
  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) sum += i;
  }
  console.log(sum);
}

// 함수 표현식
const isPrimeExp = function (n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const sumOfPrimeExp = function (limit) {
  let sum = 0;
  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) sum += i;
  }
  console.log(sum);
};
const input2 = Number(prompt("정수 입력 : "));
sumOfPrimeExp(input2);

// 화살표 함수 : 함수 표현식을 간결하게 작ㄷ성할 수 있게 해주는 ES5 문법, React 에서 주로 사용함
const isPrimeArrow = (n) => {
  let sum = 0;
  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) sum += i;
  }
  console.log(sum);
};

const sumOfPrimeArrow = (limit) => {
  let sum = 0;
  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) sum += i;
  }
  console.log(sum);
};

const input3 = Number(prompt("정수 입력 : "));
sumOfPrimeArrow(input3);

// 즉시 실행 함수(IIEF) : 전역 영역을 오염 시키지 않기 위해서 사용
(function () {
  let x = 300;
  let y = 400;
  console.log(x, y);
})();

// 기본값 할당
// function sum(a = 10, b = 10) {
//   return a + b;
// }

// 익명의 함수를 선언하고 호출까지를 한번에 구현
console.log(((a = 10, b = 10) => a + b)(100, 200));
