// 이중 포인터 : 포인터 자체를 가리키는 포인터를 이중 포인터라도 함
#include <stdio.h>

int main() {
  int x = 10;
  int* ptr = &x;
  int** pptr = &ptr;

  printf("x의 값 : %d\n", x);
  printf("x의 주소 : %p\n", &x);
  printf("------------------------\n");

  // ptr의 값 출력
  printf("ptr의 값 : %p\n", ptr);  // == x의 주소와 같음
  // ptr이 가리키는 곳의 값 출력
  printf("ptr이 가리키는 곳의 값 : %d\n", *ptr); // == x의 값과 같음
  // ptr의 주소 출력
  printf("ptr의 주소 : %p\n", &ptr);
  printf("------------------------\n");

  printf("pptr의 값 : %p\n", pptr); // ptr의 주소와 같음
  printf("pptr의 가리키는 곳의 값 : %p\n", *pptr);  // x 주소같음
  printf("pptr이 가리키는 곳의 값이 가리는 키는 값 : %d\n", **pptr); //   x의 값과 같음



}