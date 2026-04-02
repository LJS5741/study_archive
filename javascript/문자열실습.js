const prompt = require("prompt-sync")();
// // 문제 1. 사용자가 입력한 비밀번호가 “1234”일 때, 비밀번호 앞에 *를 붙여서 출력
// const pwd = prompt("비밀번호 입력 : ");
// console.log(pwd.padStart(8, "*"));

// // 문제 2. 이메일 주소에서 split()을 이용하여 @ 앞의 아이디 부분만 출력하세요.
// const email = prompt("이메일 입력 : ");
// // const emailArr = email.split("@");
// // console.log(emailArr[0]);
// console.log(email.substring(0, email.indexOf("@")));

// // 문제 3. 아래 문자열에서 slice()를 이용하여 전화번호 가운데 4자리만 ****로 가려서 출력하세요.
// // 010-1234-5678
// const phone = prompt("전화번호 입력 : ");
// const hiddenPhone = phone.substring(0, 4) + "****" + phone.substring(8);
// console.log(hiddenPhone);

// // 문제 4. 아래 주민등록번호에서 substring()과 concat() 을 이용하용 뒷자리를 *******로 가려서 출력하세요.
// // 010222-3164414
// const jumin = prompt("주민등록번호 : ");
// const hiddenJumin = jumin.substring(0, 7).concat("*******");
// console.log(hiddenJumin);

// // 문제 5. 아래 문장에서 대문자는 소문자로 소문자는 대문자로 바꿔서 출력 하기
// const inputStr = prompt("문자열 입력 : ");
// let result = "";

// for (let i = 0; i < inputStr.length; i++) {
//   let ch = inputStr.charAt(i);

//   if (ch >= "A" && ch <= "Z") {
//     result += ch.toLowerCase();
//   } else if (ch >= "a" && ch <= "z") {
//     result += ch.toUpperCase();
//   } else {
//     result += ch;
//   }
// }

// console.log(result);

// 문제 6. 주민등록 번호를 입력 받아, 생년월일, 나이, 성별 출력하기
// 나이를 계산 하려면 현재 연도를 확인 해야 함
let today = new Date();
let currentYear = today.getFullYear();

// 010222-3164414
const jumin = prompt("주민등록번호 : ");
let year = jumin.substring(0, 2); // 두자리 연도
let month = parseInt(jumin.substring(2, 4)); // 월
let day = parseInt(jumin.substring(4, 6)); // 일
let key = parseInt(jumin.charAt(7));

// 생년월일 출력
console.log(`생년월일 : ${year}년 ${month}월 ${day}일`);

// 나이
if (key === 1 || key === 2) {
  console.log(`나이 : ${currentYear - 1900 + parseInt(year)}`);
} else {
  console.log(`나이 : ${currentYear - 2000 + parseInt(year)}`);
}

// 성별
if (key === 1 || key === 3) {
  console.log("성별 : 남성");
} else {
  console.log("성별 : 여성");
}
