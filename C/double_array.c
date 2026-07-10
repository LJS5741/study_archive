// 5명의 학생 성적(국어, 영어, 수학) 입력 및 총점 평균 계산
// 총첨 기준으로 내림 차순 정렬 후 출력
#include <stdio.h>
#include <string.h> // memcpy를 위해서 사용
#define NUMBER 5

int main() {
  int score[NUMBER][4];  // 행은 학생수, 열은 국어, 영어, 수학, 총점
  double avg[NUMBER];    // 학생의 평균
  char name[NUMBER][20]; // 학생의 이름 

  // 각 학생에 대한 성적 입력 받기
  for(int i = 0; i < NUMBER; i++) {
    printf("[%d]번째 학생의 이름 국어 영어 수학 : ", i + 1);
    scanf("%s %d %d %d", name[i], &score[i][0], &score[i][1], &score[i][2]);
    score[i][3] = score[i][0] + score[i][1] + score[i][2];
    avg[i] = (double) score[i][3] / NUMBER;
  }

  // 각 학생의 이름, 총점 평균 출력하기
  printf(" 번호   이름    총점    평균\n");
  printf("---------------------------\n");  
  for (int i = 0; i < NUMBER; i++) {
    printf("%2d %-15s %5d %5.2f\n", i+1, name[i], score[i][3], avg[i]);
  }



}