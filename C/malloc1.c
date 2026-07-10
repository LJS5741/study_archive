// 동적 할당 : 프로그램이 실행되는 도중(Run time)에 필요한 메모리 공간을 할당 받는 방법
// - 할당된 메모리는 Heap 영역에 저장
// - 필요한 만큼의 메모리만 효율적으로 사용할 수 있고, 메모리를 절약 할 수 있음
#include <stdio.h>
#include <stdlib.h>

// malloc(사이즈)
// calloc(개수, 사이즈) : 0으로 초기화, 


// 정수값 n을 입력 받음
// n 개수 만큼의 정수형 변수를 저장할 메모리 할당
// 할당된 n의 개수 만큼 성적 입력
// 총점과 평균 구하기
// free(arr) 로 메모리 해제 하기
int main() {
  int n;
  printf("n의 개수 입력 : ");
  scanf("%d", &n);

  // n의 개수 만큼 메모리 할당
  //int *arr = (int *)malloc(sizeof(int) * n);  
  int *arr = (int *)calloc(n, sizeof(int));
  if (arr == NULL) {
    printf("메모리 할당 실패!!!\n");
    exit(0); // 강제 종료
  }

  // 성적 입력
  int sum = 0;
  for(int i = 0; i < n; i++) {
    printf("%d번째 성적 입력 : ", i + 1);
    scanf("%d", &arr[i]);
    sum += arr[i];
  }

  double avg = (double)sum / n;
  printf("합계: %d\n", sum);
  printf("평균: %.2f\n", avg);

  free(arr);
}