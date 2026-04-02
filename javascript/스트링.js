// 문자열을 다루는 String 객체

// 길이 확인
const pwd = "1245";
if (pwd.length < 8) {
  console.log("비밀번로는 8자 이상이어야 합니다.");
}

// 특정 문자열 포함 여부
const email = "jks2024@gmail.com";
if (!email.includes("@")) {
  // 반환값이 true/false
  console.log("오바른 이메일 형식이 아닙니다.");
}

// 특정 문자열 포함여부 확인 : 포함되어 있으면 인덱스 반환
if (email.indexOf("@") == -1) {
  console.log("오바른 이메일 형식이 아닙니다.");
}
{
  console.log(email.indexOf("@"));
}

// 부분 문자열 반환 : slice(), substring()
const str = "Applw, Banana, Kiwi";
console.log(str.slice(7, -2)); // 음수값 허용
console.log(str.substring(7, 13)); // 음수값 허용 하지 않음

// 문자열에서 특정 문자열 바꾸기
const text1 = "지구오락실, 이영지, 안유진, 미미, 이은지";
const newText1 = text1.replace("이은지", "나영석");
console.log(newText1);

// toUpperCase(), toLowerCase() : 대문자, 소문자 변경

// concat() : 2개 이상의 문자열을 합치는 함수
const name1 = "안유진";
const name2 = "장원영";
const name3 = name1.concat(" ", name2);
console.log(name3);

// trim() : 문자열 앞, 뒤 공백 제거
const text2 = "          안녕하세요.     자바스트립트 입니다.     ";
console.log(text2.trim());

// 문자열 앞과 뒤에 지정된 문자를 지정된 길이만큼 추가하는 함수 : padStart(), padEnd()
const text3 = "11111";
console.log(text3.padStart(10, "*"));

// 문자열에서 특정 문자 추출 : chatAt(인덱스);
const jumin = "010222-3164414";
if (jumin.charAt(7) == "1" || jumin.charAt(7) == 3) {
  console.log("남성 입니다.");
} else {
  console.log("여성 입니다.");
}

// charCodeAt() : 문자 하나의 유니코드 반환
const text4 = "abcdABCD";
for (let i = 0; i < text4.length; i++) {
  process.stdout.write(text4.charCodeAt(i) + " ");
}
console.log();

// split() : 특정 문자/문자열 기준으로 문자열을 잘라 부분 문자열로 만듬
const birthDay = "2001-02-01";
const dayArr = birthDay.split("-");
console.log(dayArr[0] + "년" + dayArr[1] + "월" + dayArr[2] + "일");
