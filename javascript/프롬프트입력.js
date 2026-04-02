// 프롬프트 입력으로 이름, 학번, 국어, 영어, 수학 성적을 입력 받음 => 이름, 학번, 총점, 평균을 객체 리터럴로 만들기
const prompt = require("prompt-sync")();

const name = prompt("이름을 입력 : ");
const id = prompt("학변을 입력 : ");
const kor = Number(prompt("국어 성적 : "));
const eng = Number(prompt("영어 성적 : "));
const mat = Number(prompt("수학 성적 : "));

const total = kor + eng + mat;
const avg = total / 3; // 형변환 필요 없음

const student = {
  name,
  id,
  total,
  avg,
};

console.log(student);

// 정수를 입력 받아 정수 범위 이내의 숫자 중 7의 배수를 구하고 한 줄에 10개씩 출력하기
let cnt = 0;
const num = Number(prompt("정수 입력 : "));
for (let i = 1; i <= num; i++) {
  if (i % 7 === 0) {
    process.stdout.write(i + "\t"); // 줄바끔 없음, node.js에 포함되어 있음
    cnt++;
    if (cnt % 10 === 0) console.log();
  }
}
