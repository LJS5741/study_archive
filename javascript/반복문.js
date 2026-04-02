const prompt = require("prompt-sync")();

// 입력 받은 정수까지의 합을 구하기
// 입력 10 => 합 55
// 1. while문 사용
// 2. for문 사용

let num = Number(prompt("정수 입력 : "));
let sum = 0;
// while (num) {
//   sum += num;
//   num--;
// }
// console.log("합계 : " + sum);

for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log("합계 : " + sum);

// 배열 객체 반복 하기
let brands = ["애플", "구글", "삼성전자", "아마존", true, 100];
for (let i = 0; i < brands.length; i++) {
  //console.log(brands[i]);
  process.stdout.write(brands[i] + " ");
}
console.log();

for (let e of brands) {
  process.stdout.write(e + " ");
}
console.log();

// for.. in : 객체의 모든 열거 가능한 속성(키)을 반복(iterate)할 때 사용
const person = {
  name: "곰돌이",
  job: "프로그래머",
  addr: "경기도 수원시",
};

for (let key in person) {
  process.stdout.write(person[key] + " ");
}
console.log();

const persons = [
  {
    name: "곰돌이",
    job: "프로그래머",
    addr: "경기도 수원시",
  },
  {
    name: "장원영",
    job: "아이돌",
    addr: "서울시 강남구",
  },
  {
    name: "안유진",
    job: "아이돌",
    addr: "대전시",
  },
  {
    name: "이서",
    job: "아이돌",
    addr: "대전시",
  },
  {
    name: "가을",
    job: "아이돌",
    addr: "대전시",
  },
];

// for (let person of persons) {
//   //console.log(person);
//   for (let key in person) {
//     console.log(`${key} : ${person[key]}`);
//   }
// }

// 상근날드 : 햄버거 3개의 값 입력, 음료 2개의 값 입력 : 배열은 1개로 구성
// 세트 메뉴는 햄버거 3개 중 제일 싼 가격 + 음료 두개중 작은 가격 - 50
// 배열을 이용 : 배열의 값은 push 사용
// const menu = new Array(5);
// const input = prompt("햅버거 3개 음료 2개 연속으로 입력 : ");
// const values = input.split(" ");

// for (let i = 0; i < menu.length; i++) {
//   menu[i] = parseInt(values[i]);
// }

// let minBurger = menu[0]; // 배열내의 임의의 값을 지정
// let minDrink = menu[3];

// for (let i = 0; i < menu.length; i++) {
//   if (i < 3 && minBurger > menu[i]) minBurger = menu[i];
//   if (i > 3 && minDrink > menu[i]) minDrink = menu[i];
// }

// console.log(`세트 메뉴 가격 : ${minBurger + minDrink - 50}`);

// 임의의 정수 8개를 입력 받아 홀수와 짝수 나누어 담기
// const inputArr = new Array(8);
// const oddArr = new Array(8);
// const evenArr = new Array(8);

const inputArr = [];
const oddArr = [];
const evenArr = [];

// 8개의 정수값 입력 받기
const input = prompt("8개의 정수 연속 입력 : ");
const values = input.split(" "); // 공백 기준으로 문자열 분리

// 배열에 8개의 정수값 입력
for (let i = 0; i < 8; i++) {
  inputArr.push(parseInt(values[i]));
}

for (const e of inputArr) {
  if (e % 2 === 0) evenArr.push(e);
  else oddArr.push(e);
}

// 출력
for (const e of oddArr) process.stdout.write(e + " ");
console.log();

for (const e of evenArr) process.stdout.write(e + " ");
console.log();
