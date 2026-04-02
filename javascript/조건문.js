// 제어문 : 프로그래밍에서 흐름 제어를 위해 사용 됨
// 조건문 : 주어진 조건에 따라 수행을 분기 하는 것 (삼항연산자, if, if ~ else, if ~ else if ~ else, switch ~ case)
// 반복문 : 주어진 조건이 참인동안 반복 수행 하는 것(while, do ~ while, for, for in, for of)

const prompt = require("prompt-sync")();

// 삼항연산자 사용
// - 나이를 입력 받아 19세 부터는 성인, 19 미만은 미성년자를 삼항연산자를 사용해서 처리하기
let age = Number(prompt("나이 입력 : "));
console.log("당신은 " + (age >= 19 ? "성인" : "미성년자") + "입니다.");

// if ~ else 문을 이용해 등급 출력하기
// 국어, 영어, 수학 성적을 입력 받아 총점과 평균을 구하고, 평균이 90점 A, 80이상 B, 70점 이상 C, 60점 이산 D, 나버지 F
// 국어, 영어, 수학 성적의 입력은 0 ~ 100사이여야 함
let kor = Number(prompt("국어 입력 : "));
let eng = Number(prompt("영어 입력 : "));
let mat = Number(prompt("수학 입력 : "));

if (
  kor >= 0 &&
  kor <= 100 &&
  eng >= 0 &&
  eng <= 100 &&
  mat >= 0 &&
  mat <= 100
) {
  let total = kor + eng + mat;
  let avg = total / 3;
  if (avg >= 90) console.log("A");
  else if (avg >= 80) console.log("B");
  else if (avg >= 70) console.log("C");
  else if (avg >= 60) console.log("D");
  else console.log("F");
} else console.log("성적 ㅇ비력이 잘 못 되었습니다.");

// 스위치문 : 조건식이 아닌 조건값이 와야 함 (정수, 문자열, 실수는 안됨), break 탈출문 필요
// 좌변 값, 연산자, 우변값을 입력 받아 산술 연산(+, -, *, /, %)을 수행하는 스위치문 만들기
// 입력 : 23 + 45
// 출력 : 68

let x = Number(prompt("좌변값 : "));
let op = prompt("연산자 : ");
let y = Number(prompt("우변값 : "));

switch (op) {
  case "+":
    console.log(x + y);
    break;
  case "-":
    console.log(x - y);
    break;
  case "*":
    console.log(x * y);
    break;
  case "/":
    console.log(x / y);
    break;
  case "%":
    console.log(x % y);
    break;
  default:
    console.log("계산식이 잘 못 입력 되었습니다.");
}

// BMI 계산기 :
// 소수점 이하를 출력하기 위해 toFixed(2) 사용
const height = Number(prompt("키(cm) 입력 : "));
const weight = Number(prompt("몸무게(kg) 입력 : "));

// 키를 미터로 환산
const mHeight = height / 100;
const bmi = weight / (mHeight * mHeight);

// BMI 값 소수점 둘째 자리까지 출력
console.log(`당신의 BMI는 ${bmi.toFixed(2)}입니다.`);

// 조건문을 이용해 판별하기
if (bmi < 18.5) {
  console.log("저체중 입니다.");
} else if (bmi < 23) {
  console.log("정상 체중 입니다.");
} else if (bmi < 25) {
  console.log("과체중 입니다.");
} else {
  console.log("비만 입니다.");
}
