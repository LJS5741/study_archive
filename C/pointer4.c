// void* : 어떤 타입의 데이터든 가리킬 수 있는 포인터, 실제 값을 가져올 때는 형변환이 필요

#include <stdio.h>

int main() {
  int a = 100;
  double b = 3.14;
  char c = 'M';
  void* ptr;

  // 정수형변수의 주소를 대입 받아 값 출력
  ptr = &a;
  printf("정수값 출력 : %d\n", *(int *)ptr);

  // 실수형 변수의 주소를 대입 받아 값 출력
  ptr = &b;
  printf("실수값 출력 : %.2f\n", *(double *)ptr);

  // 문자형 변수의 주소를 대입 받아 값 출력
  ptr = &c;
  printf("문자값 출력 : %c\n", *(char *)ptr);

}