// 1. 배열 메소드 체이닝 (ES5)
// 아래 배열에서 짝수만 골라서, 각각 제곱한 값의 합계를 구하세요. filter(), map(), reduce()를 모두 사용해야 합니다.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers
  .filter(e => e % 2 === 0)
  .map(e => e * e)
  .reduce((e1, e2) => e1 + e2)
);
// 2. 전개 연산자 활용 (ES6)
// 아래 조건을 전개 연산자(Spread operator)만 사용해서 구현하세요. (push, concat 등 배열 메소드 사용 금지)
const front = ["HTML", "CSS", "JavaScript"];
const back = ["JAVA", "Spring", "MySQL"];



// 조건 1) front와 back을 합친 새로운 배열 fullStack을 만드세요

const fullStack = [...front, ...back];
console.log(fullStack);
// 조건 2) front 배열을 복사한 frontCopy를 만드세요
frontCopy = front;

// 조건 3) frontCopy에 "React"를 맨 뒤에 추가한 새 배열을 만드세요
//        (frontCopy 원본은 변경되면 안됩니다)

const newFront = [...frontCopy, "React"];
console.log(newFront);

console.log(fullStack);  // ["HTML", "CSS", "JavaScript", "Java", "Spring", "MySQL"]
console.log(fullStack);  // ["HTML", "CSS", "JavaScript"] <- 원본 유지 확인

// 3. 템플릿 리터럴 + 객체 확장 (ES6)
const basicInfo = { name: "홍길동", age: 25 };
const jobInfo = { job: "개발자", stack: "React" };

// 조건 1) 두 객체를 병합한 profile 객체를 만드세요

const profile = { ...basicInfo, ...jobInfo };
console.log(profile);


// 조건 2) 템플릿 리터럴로 아래 형식에 맞게 출력하세요

const tem = `안녕하세요! 저는 ${profile.name}입니다.
나이는 ${profile.age}살이고, 직업은 ${profile.job}입니다.
주요 기술 스택은 ${profile.stack}입니다.`;
console.log(tem);

// 예상 출력:
// 안녕하세요! 저는 홍길동입니다.
// 나이는 25살이고, 직업은 개발자입니다.
// 주요 기술 스택은 React입니다.

// 4. 가변 인수 함수 만들기 (ES6 종합)
// 학생들의 점수 목록을 받아 아래 정보를 출력하는 함수 scoreReport()를 작성하세요.
// 전개 연산자 rest parameter(...), reduce(), filter(), 템플릿 리터럴을 모두 활용하세요.

function scoreReport(subject, ...scores) {
  // subject : 과목명 (문자열)
  // scores : 점수목록 (가변 인수)
  // 구현 내용:
  // 1) 전체 평균 (소수점 첫째 자리)
  const avg = (scores.reduce((e1, e2) => e1 + e2) / scores.length).toFixed(1);
  console.log(`전체 평균: ${avg}점`);

  // 2) 최고점 / 최저점
  const max = Math.max(...scores);
  const maxScore = scores.filter(e => e === max);
  const min = Math.max(...scores);
  const minScore = scores.filter(e => e === min);
  console.log(`최고점: ${maxScore}점 / 최저점: ${minScore}점`);
  // 3) 80점 이상인 학생 수
  const score = scores.filter(e => e >= 80).length
  console.log(`80점 이상: ${score}명`);
}

scoreReport("JavaScript", 92, 78, 85, 60, 95, 73, 88);


// 예상 출력:
// ===== JavaScript 성적 리포트 =====
// 전체 평균: 81.6점
// 최고점: 95점 / 최저점: 60점
// 80점 이상: 4명