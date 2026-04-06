// 우수 사원 성과급 계산
// 1. filter() : 점수가 80점 이상인 사원만 추출
// 2. map() : 추출된 사원의 급여에 성과급 20% 추가한 새 배열 생성
// 3. reduce() : 성과급 지급 대상자의 총 급여 합산

const employees = [
  { name: "강대한", score: 91, salary: 3200000 },
  { name: "윤지민", score: 74, salary: 2800000 },
  { name: "송민호", score: 88, salary: 3500000 },
  { name: "임수연", score: 65, salary: 2600000 },
  { name: "조현우", score: 95, salary: 4000000 },
];

// 여기에 코드를 작성하세요

const totalBonus = employees
  .filter(e => e.score >= 80)
  .map(e => e.salary * 1.2)
  .reduce((e1, e2) => e1 + e2, 0);

console.log(`성과급 포함 총 급여: ${totalBonus.toLocaleString()}원`);
// 기대 결과: 성과급 포함 총 급여: 12,840,000원