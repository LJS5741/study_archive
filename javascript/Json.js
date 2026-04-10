// JSON(JavaScript Object Nocation) : 데이터를 저장하고 전송하기 위해 널리 사용되는 가벼운 데이터 포맷
// 주로 프론트앤드와 백앤드 사이에서 널리 사용됨
// - 가독성이 좋음(사람이 읽고 이해하기 쉬운 텍스트 형식)
// - 언어 독립성 : 대부분의 언어에서 JSON을 지원함
// - 비교적 가벼움
// - 키와 값 쌍으로 구성되어 있어 자바의 Map과 파이썬의 딕셔너리와 비슷한 구조를 가짐
// 직렬화(Serialization) : 객체를 JSON 문자열로 변환
// 역직렬화(Deserialization) : JSON 문자열을 객체로 변환
// JSON의 데이터 구조는 객체 {}와 배열 []로 이루어짐

// 프론트앤드에서 백앤드로 정보 전송
// 이름, 나이, 직업, 주소, 전화번호 (집과 회사)

const member = {
  name: "장원영",
  age: 22,
  job: "아이돌",
  addr: "서울시 강남구 역삼동",
  phone: ["02-1234-5678", "031-3456-7890"],
};
console.log(member);
// 객체 -> JSON 직렬화
const jsonFormat = JSON.stringify(member);
console.log(jsonFormat);
// JSON - 객체로 역직렬화
const objectJson = JSON.parse(jsonFormat);
console.log(objectJson);
