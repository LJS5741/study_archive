// 콜백(callback) 함수 : 함수의 인자로 다른 함수를 전달하여 그 함수가 딜행 될 깨 호출되는 함수를 의미
// - 콜백 함수는 비동기적인 작업을 처리할 때 많이 사용
// - 사용자의 이벤트 처리
// - 네트워크 응답 처리
// - 파일을 읽고 쓰는 동작
// - 의도적으로 시간 지연이 필요한 기능
function birdSing() {
  console.log("🐦 새가 즐겁게 노래합니다!");
}

function catCry() {
  console.log("😿 고양이가 슬프게 웁니다.");
}

function dogDance() {
  console.log("🐶 강아지가 신나게 춤을 춥니다!");
}

// 일반 함수로 호출
function checkAnimalMood(mood) {
  if (mood == "happy") birdSing();
  else catCry();
}

checkAnimalMood("happy");
checkAnimalMood("sad");

// 콜백 함수
function checkAnimalMoodCallback(mood, happyAction, sadAction) {
  if (mood == "happy") happyAction();
  else sadAction();
}

// dogDance와 catCry 함수를 등록, 호출이 아님
checkAnimalMoodCallback(
  "happy",
  () => console.log("🐶 강아지가 신나게 춤을 춥니다!"),
  () => console.log("😿 고양이가 슬프게 웁니다."),
);

// 타이머 설정과 Callback 함수
function buyToy(item, price, quantity, callback) {
  console.log(
    "🧒 아이가 '" +
      item +
      "' 장난감을 " +
      quantity +
      "개 골라서 엄마에게 가져갔습니다.",
  );
  setTimeout(() => {
    console.log("계산이 필요 합니다.");
    let total = price * quantity;
    callback(total);
  }, 2000);
}

function pay(total) {
  console.log("엄마: '지불할 금액은 " + total + "원입니다.'");
  console.log("🧒 아이: '와! 고마워요, 엄마!' 🎉");
}

buyToy("공룡 장난감", 3000, 3, pay);
