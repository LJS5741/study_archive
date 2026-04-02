// 함수 호이스팅 : 끌어 올림
// 함수 선언문은 호이스팅 동작, 함수 표현식은 호이스팅 없음
sayHello();

function sayHello() {
  console.log("안녕하세요");
}

const sayGoodbye = () => console.log("안녕히 가세요");
sayGoodbye();

// 콜백함수를 사용한 비동기 작업
function orderCoffee(coffeeName, callback) {
  setTimeout(() => {
    const message = `주문하신 ${coffeeName} 나왔습니다.`;
    callback(message);
  }, 2000);
}
function display(message) {
  console.log(message);
}

orderCoffee("아메리카노", display);

// 화살표 함수로 간단한 계산기
const add = (x, y) => x + y;
const sub = (x, y) => x - y;

console.log(add(100, 200));

// 기본 매개변수 활용
function greet(name = "손님", greeting = "안녕하세요") {
  console.log(`${greeting}, ${name}!`);
}

greet();
greet("안유진");
greet("장원영", "만나서 반가워요~~");
