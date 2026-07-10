// 데이터형 : 변수/상수에 저장될 값의 유형이나 크기를 결정
#include <stdio.h>
#include <stdbool.h>
#include <string.h>

int main() {
  char gender = 'M'; // 문자를 저장하기 위한 데이터 타입, 내부적으로 정수값으로 움직임, -128 ~ 127

  printf("%c\n", gender);
  printf("%d\n", (int)gender);

  char num = -1;
  printf("%c %d\n", num, num);

  // C언어는 기본적으로 bool 타입이 포함되어 있지 않음, 참/거짓을 구분하는 데이터 타입, C언어 1/0 으로 기본적 판별함
  bool is_adult = true;

  // sizeof() : 데이터형의 크기를 확인할 때 사용
  printf("int 형의 크기 : %lu 바이트\n", sizeof(int));

  printf("주소의 크기 : %lu 바이트\n", sizeof(int *));
  printf("주소의 크기 : %lu 바이트\n", sizeof(char *));
  printf("주소의 크기 : %lu 바이트\n", sizeof(void *));

  // 열거형 : 특정한 값을 다른 이름으로 명명할 때 사용 됨
  enum Color { RED = 100, ORANGE, YELLOW, GREEN, BLUE};
  enum Color color = BLUE;
  printf("Color : %d\n", color);

  // 구조체 : 여러개의 변수를 하나의 그룹으로 묶는 데 사용
  struct Member {
    int id;
    char name[20];
    int age;
    char addr[50];
    char gender;
  };

  struct Member member;
  member.id = 100;
  strcpy(member.name, "곰돌이");
  member.age = 23;
  strcpy(member.addr, "충남 천안시");
  member.gender = 'M';

  // typedef : 자료형에 대한 별칭 지정
  typedef unsigned int uint;

  typedef struct {
    int id;
    int name;
    int score;
  } Student;

  Student student;





}