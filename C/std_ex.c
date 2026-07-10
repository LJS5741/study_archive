// 학생 정보를 입력받아 성적표를 출력하는 프로그램을 작성하시오.

// [입력 항목]
// 1. 이름 (문자열)
// 2. 학번 (정수)
// 3. 성별 (문자, M/F)
// 4. 거주지 주소 (공백 포함 문자열)
// 5. 국어, 영어, 수학, 과학 4과목 성적 (정수) : 한줄로 입력 scang("%d %d %d %d", &kor, &eng, &mat, &sci);

// [출력 항목]
// 1. 이름, 학번, 성별
// 2. 주소
// 3. 각 과목 점수
// 4. 총점, 평균 (소수점 2자리)
// 5. 평균에 따른 학점 출력
//    - 90점 이상 : A
//    - 80점 이상 : B
//    - 70점 이상 : C
//    - 60점 이상 : D
//    - 60점 미만 : F

// =============================
//         학생 성적표
// =============================
// 이름   : 홍길동
// 학번   : 20240001
// 성별   : 남성
// 주소   : 경기도 수원시 팔달구
// -----------------------------
// 국어   :  85점
// 영어   :  92점
// 수학   :  78점
// 과학   :  88점
// -----------------------------
// 총점   : 343점
// 평균   : 85.75점
// 학점   : B
// =============================

#include <stdio.h>

int main() {
  char name[20];
  int num;
  char gender;
  char addr[50];
  int kor, eng, mat, sci;
  int total;
  double avg;
  char grade;

  // 이름 입력
  printf("이름 입력 : ");
  scanf("%s", name);
  while(getchar() != '\n');

  // 학번 입력
  printf("학번 입력 : ");
  scanf("%d", &num);
  while(getchar() != '\n');

  // 성별 입력
  printf("성별 입력 : ");
  scanf("%c", &gender);
  while(getchar() != '\n');

  // 주소 입력
  printf("주소 입력 : ");
  fgets(addr, sizeof(addr), stdin);  // fgets() 는 '\n' 까지 저장됨

  // 성적 입력
  printf("국어 영어 수학 과학 성적 입력 : ");
  scanf("%d %d %d %d", &kor, &eng, &mat, &sci);

  // 총점과 평균
  total = kor + eng + mat + sci;
  avg = (double)total / 4;

  // 등급 계산
  if (avg >= 90) grade ='A';
  else if(avg >= 80) grade = 'B';
  else if(avg >= 70) grade = 'C';
  else if(avg >= 60) grade = 'D';
  else grade = 'F';

  printf("\n=============================\n");
  printf("        학생 성적표\n");
  printf("=============================\n");
  printf("이름   : %s\n",  name);
  printf("학번   : %d\n",  num);
   printf("성별 : %s\n", (gender == 'M' ? "남성" : "여성"));
  printf("주소   : %s",  addr);
  printf("-----------------------------\n");
  printf("국어   : %3d점\n", kor);
  printf("영어   : %3d점\n", eng);
  printf("수학   : %3d점\n", mat);
  printf("과학   : %3d점\n", sci);
  printf("-----------------------------\n");
  printf("총점   : %d점\n",   total);
  printf("평균   : %.2f점\n", avg);
  printf("학점   : %c\n",     grade);
  printf("=============================\n");
}