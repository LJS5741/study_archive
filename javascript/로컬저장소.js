// localStorage : 자바스크립트에서 브라우저에 데이터를 영구 저장할 수 있는 간단한 방법
// - 브라우저를 닫아도 데이터가 유지. Key-Value 문자열 쌍으로 데이터를 저장

const user = { name: "정경수", age: 23 };

// 저장
localStorage.setItem("user", JSON.stringify(user));

// 읽기
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser);
