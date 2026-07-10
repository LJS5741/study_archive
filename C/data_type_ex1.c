#include <stdio.h>
// 1. 다양한 데이터형 변수 선언 및 출력
// - 아래 요구사항에 맞게 변수를 선언하고, 각 변수의 값과 메모리 크기를 출력하는 프로그램을 작성하세요.
// - int형 변수에 자신의 나이를 저장하고 출력
// - double형 변수에 원주율(3.14159265)을 저장하고 소수 5자리까지 출력
// - char형 변수에 자신의 이름 첫 글자를 저장하고, 문자와 해당 ASCII 코드를 함께 출력
// - sizeof를 사용해 세 변수의 메모리 크기를 각각 출력
void data_type() {
  int age = 23;
  const double PI = 3.14159265;  // 상수는 일반적으로 대문자로 상수 이름을 지정
  char first_ch = 'J';

  printf("나이 : %d, 크기 : %lu\n", age, sizeof(age));
  printf("원주율 : %.5f\n", PI);
  printf("이름 첫 글자 : %c, %d\n", first_ch, first_ch);
}

// 2. 정수형 오버플로와 2의 보수 탐구
// - 정수형 데이터형의 표현 범위와 음수의 내부 표현 방식을 직접 확인하는 프로그램을 작성하세요.
// - unsigned char 변수에 255를 저장한 후, 1을 더했을 때 어떤 값이 되는지 출력 (오버플로 관찰)
// - signed char 변수에 127을 저장한 후, 1을 더했을 때 어떤 값이 되는지 출력
// - int형 변수에 -1을 저장하고 %X 서식으로 16진수 출력 (2의 보수 확인)
// - 위 세 가지 결과가 왜 그렇게 나오는지 주석으로 설명을 달아보세요.
void overflow() {
  unsigned char uc = 255; // 0 ~ 255
  uc = uc + 1;
  printf("오버플로우 : %d\n", uc);  // 표현 범위 초과, 0

  char sc = 127;
  sc = sc + 1;
  printf("오버플로우 : %d\n", sc);  // -128 

  int num = -1;
  printf("%x\n", num); // FFFFFFFF
}


// 3. 구조체와 열거형을 활용한 학생 성적 관리
// - 구조체, 열거형, typedef를 모두 활용하여 학생 2명의 정보를 저장하고 출력하는 프로그램을 작성하세요.
// - enum Grade로 학점을 정의 (A=4, B=3, C=2, D=1, F=0)
// - typedef로 unsigned int를 uint로, struct Student를 Student로 별칭 정의
// - 구조체에 이름(char[20]), 학번(uint), 평점(double), 학점(enum Grade) 포함
// - 두 학생 중 평점이 더 높은 학생의 이름과 학점을 출력



void struct_ex() {
  typedef enum { F=0, D, C, B, A} Grade;
  typedef unsigned int uint;

  typedef struct {
    char name[20];
    uint student_id;
    double avg;
    Grade grade;
  } Student;

  Student s1 = {"안유진", 100, 4.1, A};
  Student s2 = {"장원영", 200, 3.8, B};

  if (s1.avg >= s2.avg) {
    printf("%s, %d, %.2f\n", s1.name, s1.student_id, s1.avg);
  } else {
    printf("%s, %d, %.2f\n", s2.name, s2.student_id, s2.avg);
  }
  switch(s1.grade) {
    case A: printf("A\n");

  }
}


int main() {
  data_type();
  overflow();
  struct_ex();

}