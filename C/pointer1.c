// 포인터는 메모리 주소를 저장하는 변수
// 포인터를 선언할 때는 가리키는 데이터의 자료형을 함께 명시해야 하며, 이는 포인터를 통해 값을 참조할 때 그 값의 크기를 알아야 하기 때문입니다.
#include <stdio.h>

void double_value(int*);
void swap(int*, int*);

int main() {
  // int n = 100;  // 변수 n에 100 대입
  // int x = 200;
  // int* ptr = &n; // 포인터 변수에 n 변수의 주소를 대입
  // printf("n의 값 : %d\n", *ptr);  // * 포인터 변수의 주소의 가리키는 곳의 값
  // printf("n의 주소 : %p\n", ptr); // 포인터 변수가 가리키는 주소

  // *ptr = 300;


  // 1. 정수 변수 num을 선언하고, 그 변수를 가리키는 포인터 p를 만드세요. 다음을 출력하는 프로그램을 작성
  // - num의 값
  // - num의 주소
  // - p가 가리키는 값
  int num = 300;
  int* p = &num;

  printf("num의 값 : %d\n", num);
  printf("num의 주소 : %p\n", &num);
  printf("p가 가리키는 값 : %d\n", *p);

  // 2. 함수 double_value(int *x)를 작성하세요. 이 함수는 포인터로 전달받은 변수의 값을 2배로 만듭니다. (반환값 없이 포인터로 원본을 직접 수정)
  int a = 45;
  double_value(&a);
  printf("더블 값 : %d\n", a);

  // 3. 포인터를 이용해 두 정수의 값을 서로 바꾸는 swap(int *a, int *b) 함수를 작성하세요.
  int x = 20, y = 30;
  swap(&x, &y);
  printf("x = %d, y = %d\n", x, y);

}

void double_value(int* x) {
  *x = *x * 2;
}

void swap(int* x, int* y) {
  int tmp = *x;  // 전달받은 주소의 값
  *x = *y;
  *y = tmp;
}