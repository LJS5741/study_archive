// 국어, 영어, 수학, 과학 성적을 입력 받는 함수 생성
// 평균을 구하는 함수 생성
// 총점을 구하는 함수 생성
// 등급을 구하는 함수 생성 (90점 이상 A, 80점 이상 B, 70이상 이면 C, 60이상이면 D, 나머지는 F)
// 결과를 출력 하는 함수 생성
// 선언부는 헤더파일로 관리

// 1. 평균, 총점, 등급은 반환값으로 메인에 전달하고 이를 매개변수로 전달 해 출력 하기
// 2. Call by Reference 반식으로 변경하고 이를 매개변수로 전달해 출력 하기

#include <stdio.h>
#include "./header/calc.h"

int main() {
  int kor, eng, mat, sci, total;
  double avg;
  char grade;
  input_score(&kor, &eng, &mat, &sci);
  avg = calc_avg(kor, eng, mat, sci);
  total = calc_total(kor, eng, mat, sci);
  grade = calc_grade(avg);
  print_score(avg, total, grade);
}

// Call by Reference
void input_score(int *k, int *e, int *m, int *s) {
  printf("국어 영어 수학 과학 성적 입력 : ");
  scanf("%d %d %d %d", k, e, m, s);
}

// Call by Value
double calc_avg(int k, int e, int m, int s) {
  return (double)(k + e + m + s) / 4;
}

// Call by Value
int calc_total(int k, int e, int m, int s) {
  return k + e + m + s;
}

char calc_grade(double avg) {
  if (avg >= 90) return 'A';
  else if (avg >= 80) return 'B';
  else if (avg >= 70) return 'C';
  else if (avg >= 60) return 'D';
  else return 'F';
}

void print_score(double a, int t, char g) {
  printf("총점 : %d\n", t);
  printf("평균 : %.2f\n", a);
  printf("등급 : %c\n", g);
}
