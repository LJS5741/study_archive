// 1. DOM 요소 가져오기
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");
const countEl = document.getElementById("count");

// 2. 할 일 추가 함수
function addTodo() {
  const text = input.value.trim(); // 입력창의 좌우의 빈공백을 제거하고 text에 대입
  if (!text) return; // 빈 값 방지

  // li 요소 생성
  const li = document.createElement("li");

  // 체크박스 생성 & 이벤트 연결
  const cb = document.createElement("input");
  cb.type = "checkbox";
  cb.addEventListener("change", () => {
    span.classList.toggle("done", cb.checked);
    updateCount();
  });

  // 텍스트 생성
  const span = document.createElement("span");
  span.textContent = text;

  // 삭제 버튼 생성
  const btn = document.createElement("button");
  btn.textContent = "삭제";
  btn.addEventListener("click", () => {
    li.remove();
    updateCount();
  });

  // li에 자식 요소 추가
  li.append(cb, span, btn);
  list.appendChild(li);

  input.value = ""; // 입력창 초기화
  updateCount();
}

// 개수 업데이트
function updateCount() {
  const total = list.children.length;
  const done = list.querySelectorAll(".done").length;
  countEl.textContent = `전체 ${total}개 - 완료 ${done}개`;
}

// Enter 키로도 추가
input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") addTodo();
});
