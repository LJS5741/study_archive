// 배열 : 같은 타입의 변수들로 이루어진 유한 집합으로 정의
// 배열을 구성하는 각각의 값을 배열의 요소(element), 배열에서의 위치를 가리키는 숫자를 인덱스
#include <stdio.h>
#define SIZE 4

int main() {
  // 배열을 선언과 동시에 값을 대입 하는 방식
  int score[SIZE] = {100, 99, 88, 77}; // 크기가 3인 정수형 배열을 선언하고 선언과 동시에 값을 대입
  int total = 0;
  double avg;
  int min = score[0];
  int max = score[0];
  // 배열의 총점과 평균 구하기
  for(int i = 0; i < SIZE; i++) {
    total += score[i];
    if (min > score[i]) min = score[i];
    if (max < score[i]) max = score[i];
  }
  avg = (double) total / SIZE;

  printf("총점 : %d\n", total);
  printf("평균 : %.2f\n", avg);
  printf("최고 성적 : %d\n", max);
  printf("최저 성적 : %d\n", min);

}