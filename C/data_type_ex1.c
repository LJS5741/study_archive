#include <stdio.h>
#include <string.h>

// 1. 다양한 데이터형 변수 선언 및 출력
// - 아래 요구사항에 맞게 변수를 선언하고, 각 변수의 값과 메모리 크기를 출력하는 프로그램을 작성하세요.
// - int형 변수에 자신의 나이를 저장하고 출력
// - double형 변수에 원주율(3.14159265)을 저장하고 소수 5자리까지 출력
// - char형 변수에 자신의 이름 첫 글자를 저장하고, 문자와 해당 ASCII 코드를 함께 출력
// - sizeof를 사용해 세 변수의 메모리 크기를 각각 출력
void dt_inout() {
  int age = 26;
  printf("나이 : %d, 메모리 크기 : %d\n", age, sizeof(age));
  const double PI = 3.14159265;
  printf("원주율 : %.5f, 메모리 크기 : %d\n", PI, sizeof(PI));
  char name1 = 'P';
  printf("이름 첫 글자 : %c, 해당 ASCII 코드 : %d, 메모리 크기 : %d\n", name1, (int)name1, sizeof(name1));
}

// 2. 정수형 오버플로우와 2의 보수 탐구
// - 정수형 데이터형의 표현 범위와 음수의 내부 표현 방식을 직접 확인하는 프로그램을 작성하세요.
// - unsigned char 변수에 255를 저장한 후, 1을 더했을 때 어떤 값이 되는지 출력 (오버플로우 관찰)
// - signed char 변수에 127을 저장한 후, 1을 더했을 때 어떤 값이 되는지 출력
// - int형 변수에 -1을 저장하고, %X 서식으로 16진수 출력 (2의 보수 확인)
// - 위 세 가지 결과가 왜 그렇게 나오는지 주석으로 설명을 달아보세요.
void overflow_check() {
  unsigned char A = 255;
  A += 1;
  printf("%d\n", A); // 오버플로우 발생 - 0 출력
  signed char B = 127; 
  B += 1;
  printf("%d\n", B); // 오버플로우 발생 - 128출력 
  int C = -1;
  printf("%x\n", C); // -1은 2의 보수 표현으로 11111111 11111111 11111111 11111111이므로 16진수는 ffffffff
}

// 3. 구조체와 열거형을 활용한 학생 성적 관리
// - 구조체, 열거형, typedef를 모두 활용하여 학생 2명의 정보를 저장하고 출력하는 프로그램을 작성하세요.
// - enum Grade로 학점을 정의 (A=4, B=3, C=2, D=1, F=0)
// - typedef로 unsigned int를 uint로, struct Student를 Student로 별칭 정의
// - 구조체에 이름(char[20]), 학번(uint), 평점(double), 학점(enum Grade) 포함
// - 두 학생 중 평점이 더 높은 학생의 이름과 학점을 출력
void score_grade() {
  enum Grade{
    A = 4,
    B = 3,
    C = 2,
    D = 1,
    F = 0
  };

  typedef unsigned int uint;
  typedef struct {
    char name[20];
    uint student_id;
    double avg;
    enum Grade grade;
  } Student;

  Student student1, student2;
  strcpy(student1.name, "김철수");
  student1.student_id = 202021357;
  student1.avg = 4.3;
  student1.grade = 'A';

  strcpy(student2.name, "김영희");
  student2.student_id = 202224328;
  student2.avg = 3.8;
  student2.grade = 'B';

  if (student1.avg > student2.avg) {
        printf("평점이 더 높은 학생\n");
        printf("이름 : %s\n", student1.name);
        printf("학점 : %c\n", student1.grade);
    } else {
        printf("평점이 더 높은 학생\n");
        printf("이름 : %s\n", student2.name);
        printf("학점 : %c\n", student2.grade);
    }
}

void main() {
  dt_inout();
  overflow_check();
  score_grade();
}