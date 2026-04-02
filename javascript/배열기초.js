// 자바스크립트의 배열은 연속된 데이터를 저장, 여러개의 타입이 섞여 있을 수 있음. 크기 지정 필요 없음
// - 파괴적 메서드 : 배열 객체의 내용을 변경하거나 추가, 삭제 함
// - 비파괴적 메서드 : 배열 객체의 내용이 변경되거나, 추가, 삭제 되면 새로운 배열 객체를 생성

// forEach() : 배열 순회, 비파괴적 메서드
const arr = [10, 20, 30, 40, 50];
arr.forEach((e) => {
  process.stdout.write(e + " ");
});
console.log();

// toString()
console.log(arr.toString());

// join() : 배열 요소를 지정한 문자를 이용해 결합
console.log(arr.join(" * "));

// pop() : 배열의 마지막 요소를 제거하고, 반환, 파괴적 메서드
console.log(arr.pop());
console.log(arr);

// push() : 배열 마지막에 새로운 요소를 삽입, 파괴적 메서드
console.log(arr.push(100)); // 갯수가 출력(?)
console.log(arr);

// 현대 문법에서 배열을 변경하려면 concat() 또는 전개연산자 사용
const fruits = ["딸기", "사과", "배", "바나나"];
const newFruits = fruits.concat("오렌지");
console.log(newFruits);

// 전개연산자를 사용하는 방법
const newFruits2 = [...newFruits, "키위"];
console.log(newFruits2);

// sort() : 오름차순 정렬
console.log(newFruits2.sort());

// filter() : 배열에서 조건을 만족하는 배열의 요소만 찾아서 새로운 배열 생성, 비파괴적 메서드
const persons = [
  {
    name: "안유진",
    score: 90,
    city: "대전",
  },
  {
    name: "장원영",
    score: 92,
    city: "인천",
  },
  {
    name: "이서",
    score: 80,
    city: "서울",
  },
  {
    name: "가을",
    score: 77,
    city: "서울",
  },
  {
    name: "레이",
    score: 60,
    city: "일본",
  },
];

// 성적이 90점 이상만 골라내기
const passPersons = persons.filter((e) => e.score >= 90);
console.log(passPersons);

// 도시가 서울인 배열 객체만 골라내기
const cityPersons = persons.filter((e) => e.city === "서울");
console.log(cityPersons);

// map() : 배열의 모든 요솧를 뱐환하여 새 배열을 반환, 원본을 변경하지 않음(비파괴적)
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((e) => e * e);
console.log(squared);

// 배열로 구성된 객체에서 이름만 추출하기
const names = persons.map((e) => e.name);
console.log(names);

const city = persons.map((person) => person.city);
console.log(city);
