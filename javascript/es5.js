// ES5 (ECMAScript5) : 2009년 발표
// - JSON객체 : JSON.parse(), JSON.stringify()
// - Array 메서드
//   forEach() : 배열의 각 요소를 순회하면 요소에 대해 지정한 함수를 실행하는 메서드
//   map() : 배열의 모든 요소를 순회하면서 새로운 배열을 만듦.
//   filter() : 배열의 요소 중에서 조건을 만족하는 요소만 추출하여 새로운 배열 생성
//   reduce() : 배열의 모든 요소를 순회하며, 순회 과정에서 누적값을 사용하여 하나의 결과값을 만듦.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// forEach를 이용한 출력
numbers.forEach(e => process.stdout.write(e + " "));
console.log();

// map을 이용해 각 요소 값에서 100을 더한 값 출력
numbers
  .map(e => e + 100)
  .forEach(e => process.stdout.write(e + " "));
console.log();

// filter를 이용해 홀수만 출력
numbers
  .filter(e => e % 2 !== 0)
  .forEach(e => process.stdout.write(e + " "));
console.log();

// 짝수만 골라서 10을 곱한 배열 만들어서 출력
numbers
  .filter(e => e % 2 === 0)
  .map(e => e * 10)
  .forEach(e => process.stdout.write(e + " "));
console.log();

// reduce를 이용해 값을 누적하기
const sum = numbers.reduce((e1, e2) => e1 + e2);
console.log(sum);

// 1 ~ 10중에서 3의 배수 합 구하기
const result = numbers
  .filter(n => n % 3 === 0)
  .reduce((e1, e2) => e1 + e2, 0);
console.log(result);


// 가변 변수와 불변 변수
// 변수 : let (블록 스코프)
// 상수 : const (블록 스코프)

const num = 1;
// num = 3;  // 에러 여부

const arr = [1, 2, 3];
// arr.push[4];  // 에러는 나지 않지만 재할당은 좋은 방법이 아님 (불변성의 원칙 위배)
const arr2 = arr.concat(4);
const arr3 = [...arr, 4];  // 전개 연산자 사용

console.log(arr2);
console.log(arr3);

// 템플릿 리터럴
const name = "안유진";
const message = `안녕하세요. ${name}`;
console.log(message);

// 전개 연산자 : 배열이나 객체를 개별 요소로 분리. 이를 이용해 배열을 합치거나 객체를 병합 할 수 있음
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2, 10, 20, 30];
console.log(array3);

// 객체에서 전개 연산자
const members = {
  email: "jks2024@gmail.com",
  pwd: "sphd8250",
  name: "곰돌이"
};

const newMember = { ...members, pwd: "aaaaaaaa" };
console.log(newMember);