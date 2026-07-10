#include <stdio.h>

int main() {
  // 표준 출력 함수 : printf()
  // 표준 입력 함수 : scanf()
  // 서식지정자 : 출력 서식을 지정, %d(정수), %f(실수), %s(문자열), %c(문자), %x(16진수), %p(포인터 주소 출력)
  // 이스케이트시퀀스(제어문자) : \n(줄바꿈), \r(커서를 앞으로 돌림),\t(탭 만큰 띄움), \b(back space) 

  // int age = 23;
  // const float PI = 3.141592;  // const는 상수를 의미
  // char *name = "곰돌이";  // 포인터 변수
  // char *addr = "곰돌이";
  // int num = 100;

  // printf("나이 : %d\n", age);  // 정수로 나이를 출력
  // printf("PI : %.2f\n", PI);  // 실수를 소수점 3번째 자리를 반올림해서 2번째 자리까지 출력
  // printf("이름 : %s\n", name); // 문자의 시작 주소로 문자열을 출력
  // printf("16진수 표기 : %x\n", num);
  // printf("변수의 주소 표시 : %p\n", &num); // &(주소연산자)로 num 변수의 주소 표시 
  // printf("곰돌이 이름의 주소 : %p\n", name);
  // printf("곰돌이 주소의 주소 : %p\n", addr);


  // scanf() : 표준 입력 : 공백 기준, 서식지정자 사용
  // 나이 : 정수로 입력
  // 이름 : 문자열로 입력
  // 주소 : 문자열로 입력, 공백이 있음
  // 성별 : 문자로 입력 후 문자열로 출력 : M/F => 남성/여성 출력
  // 평균 : 실수로 입력
  int age;  // 나이를 입력 받기 위한 변수 생성
  char name[20];  // stack 영역에 이름 입력 받기 위한 배열 생성, C언어는 문자열 데이터 타입이 없음
  char addr[50]; 
  char gender;  // 1byte, C/C++ ASCII 코드 체계를 따름
  float avg;

  printf("나이를 입력 : ");
  scanf("%d", &age); // 주소 연산자 

  printf("이름을 입력 : ");
  scanf("%s", name);  // name == &name[0], 배열의 이름은 배열의 시작 주소 임
  while(getchar() != '\n');  // 줄바꿈 문자가 나올 때까지 문자를 추출 함

  // 공백이 있는 문자열 입력 받기, 줄바꿈 문자까지 입역 받음
  // 배열의 시작 주소, 배열의 크기, 표준 입력 지정
  printf("주소 입력 : ");
  fgets(addr, sizeof(addr), stdin);

  printf("성별 입력 : ");
  scanf("%c", &gender);

  printf("평균 입력 : ");
  scanf("%f", &avg);

  // printf를 이용해 출력 하기
  // 이름 : 곰돌이
  // 나이 : 23
  // 주소 : 충남 천안시 
  // 성별 : 남성 / 여성
  // 평균 : 85.67
  printf("이름 : %s\n", name);
  printf("나이 : %d\n", age);
  printf("주소 : %s", addr);
  printf("성별 : %s\n", (gender == 'M' ? "남성" : "여성"));
  printf("평균 : %.2f\n", avg);

}