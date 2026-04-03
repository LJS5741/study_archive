// 정규 표현식 : 특정 패턴을 정의하여 문자열을 검색, 대체. 추출하는 데 사용
const prompt = require("prompt-sync")();
// text() : 문자열에 패턴이 있는지 검사하고 결과로 true, false 반환
const regex = /java/;
// const str = prompt("문자열 입력 : ");
// console.log(regex.test(str));

// exec() : 문자열에서 패턴에 일치하는 첫 번째 결과를 반환
// console.log(regex.exec(str));

// match() : 문자열에서 패턴에 일치하는 모든 결과를 배열로 반환
const inputPhone = prompt("전화번호 입력 : ");
const phoneRegEx = /\d{3}-\d{4}-\d{4}/g;
console.log(inputPhone.match(phoneRegEx));

// 웹사이트 주소 찾기
const text =
  "쇼핑몰 주소를 안내 합니다. 주소는 아래와 같으니 링크를 확인 해주세요. https://bearmarket.com http://naver.com";
const webRegEx = /https?:\/\/[\w\-\.] + /g;
console.log(text.match(webRegEx));

// 이메일 형식 검사
const inputEmail = prompt("이메일 입력 : ");
const emailRegEx = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
if (emailRegEx.text(inputEmail)) {
  console.log("정상적인 이메일 입니다.");
} else {
  console.log("이메일 형식이 잘못 되었습니다.");
}