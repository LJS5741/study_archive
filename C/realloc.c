// realloc() : 이미 할당된 메모리의 크기를 재조정
//크기 5짜리 정수 배열을 malloc으로 생성해 값을 채운 후, realloc을 이용해 크기를 10으로 늘리고 새로 생긴 공간에도 값을 채워 전체 배열을 출력하세요.
#include <stdio.h>
#include <stdlib.h>
#define SIZE 5

int main() {
  // 크기 5짜리 정수 배열을 malloc 생성
  int *arr = (int *)malloc(sizeof(int) * SIZE);

  // 할당 실패에 대한 에러 처리
  if (arr == NULL) {
    printf("메모리 할당 실패!!!\n");
    return 1;
  }

  // 반복문으로 임의의 값 채우기
  for (int i = 0; i < 5; i++) {
    arr[i] = rand() % 100; // 0 ~ 99 까지 임의의 값 
  }

  // realloc을 사용해 크기를 10으로 조정
  int *tmp = (int *)realloc(arr, sizeof(int) * SIZE * 2);

  // 할당 실패에 대한 처리
  if (tmp == NULL) {
    printf("realloc 실패!!!\n");
    free(arr);
    return 1;
  }
  arr = tmp;

  // 새로 생긴 공간에 임의의 값 채우기
  for (int i = 5; i < 10; i++) {
    arr[i] = rand() % 100; // 0 ~ 99 까지 임의의 값 
  }

  // 배열의 값을 오름 차순 정렬 (버블 정렬)
  for(int i = 0; i < 10 - 1; i++) { // 0 ~ 8
    for (int j = 0; j < 10 - 1 - i; j++) {  // 제일 큰값이 제일 마지막으로 이동하고 인덱스가 줄어 줌
      if(arr[j] > arr[j + 1]) { // 값을 뒤집는 경우
        int t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
    }
  }

  // 출력
  for (int i = 0; i < 10; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");

  // 메모리 해제
  free(arr);
}
