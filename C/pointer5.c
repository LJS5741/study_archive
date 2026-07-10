// 함수 포인터 : 함수의 메모리 주소를 저장하는 포인터입니다.
#include <stdio.h>
int add(int a, int b) {
  return a + b;
}

int sub(int a, int b) {
  return a - b;
}

int main() {
  int (*fp)(int, int);  // 함수 포인터 선언

  fp = sub;

  printf("결과 : %d\n", fp(100, 200));

}