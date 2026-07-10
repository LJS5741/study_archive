// ## 목적
// - 목적에 맞는 데이터형으로 변수를 만든다.
// - 값이 변경되지 않는 데이터형에 대한 상수로 선언 한다.
// - 연산자, 조건문, 반복문 등을 활용하여 회원정보를 입력 받아 출력하는 예제를 학습 한다.
// - 포함된 내용 중 배열에 대한 내용은 배열 파트에서 자세히 다룬다.

// ## 조건

// - 이름은 char 배열을 입력 받는다.
// - 나이는 정수형으로 입력 받는다. 
// - 성별은 문자로 입력 받는다. 남성이면 ‘M’, ‘m’ 여성이면 ‘F’, ‘f’ char형으로 입력 받고 출력은 배열을 이용해 문자열로 출력 한다. (”남성”, “여성”)
// - 직업을 입력 받는다. 1번이면 학생, 2번이면 회사원, 3번이면 주부, 4번 무직으로 입력 받으며, 출력은 배열을 이용해 문자열로 출력 한다. (출력 예) 학생, 회사원, 주부, 무직
// - 나이는 0 ~ 199살 까지만 정상적인 입력으로 판단하고 범위를 벗어나면 다시 입력 하도록 한다.
// - 성별은 ‘M’, ‘m’, ‘F’, ‘f’ 이외의 문자가 입력되면 다시 입력 하도록 한다.
// - 직업은 정수로 입력받고 1 ~ 4 이외의 숫자가 입력되면 다시 입력 받는다.
#include <stdio.h>
#include <stdbool.h>

// 함수 선언부
void input_name(char *);  // 반환값이 없는 함수
int input_age();  // 함수 호출 시 정수로 결과를 반환
void input_age_ref(int *age); // 
int input_gender(); 
int input_job();
void print_info(char *, int, char, int); // 반환값은 없고, 매개변수 4개인 함수 선언 

int main() { // 프로그램의 시작이자 끝
  char name[20];  
  int age, job;
  char gender;

  input_name(name);  // 함수에 대한 호출, 매개변수로 주소를 전달해야 함, Call by reference
  age = input_age(); // 함수 수행의 결과를 age 변수에 대입
  gender = input_gender();
  job = input_job();
  print_info(name, age, gender, job);
}

void input_name(char *name) { // 배열의 주소를 넘겨 받기위해 포인터 변수 선언
  printf("이름을 입력 하세요 : ");
  scanf("%s", name); // 배열의 시작 주소를 넘겨 줌
}

int input_age() {
  int age; // 함수 내부에만 존재하는 지역 변수

  while(true) {
    printf("나이를 입력 하세요 : ");
    scanf("%d", &age);
    while(getchar() != '\n');
    if (age >= 0 && age < 200) return age;  // 나이가 정상적으로 입력 되었으면 나이를 반환
    printf("나이를 잘 못 입력 하셨습니다.\n");
  }
}

int input_gender() {
  char gender;  // 성별을 입력 받기 위한 지역 변수, 문자형은 '' 
  while(true) { // 무한 반복문 생성, 반드시 탈출 조건이 필요 함
    printf("성별을 입력 하세요 : ");
    scanf("%c", &gender);
    while(getchar() != '\n'); // 버퍼 비우기, 입력값에 대해서 엔터키를 뽑아 내지 않기 때문에 별도 제거 필요
    // if (gender == 'M' || gender == 'm' || gender == 'F' || gender == 'f') return gender;
    // printf("성별을 잘 못 입력 하셨습니다.\n");
    // switch ~ case 로 변경 하기
    switch(gender) {
      case 'M': case 'm': return 'M';
      case 'F': case 'f': return 'F';
      default: printf("성별을 잘 못 입력 하셨습니다.\n");
    }
  }
}

int input_job() {
  int job;
  while(true) {
    printf("직업을 입력 하세요: ");
    scanf("%d", &job);
    while(getchar() != '\n');
    if (job > 0 && job < 5) return job;
    printf("직업을 잘 못 입력 하셨습니다.");
  }
}

void print_info(char *name, int age, char gender, int job) {
  const char *jobs[] = {"", "학생", "회사원", "주부", "무직"};  // 포인터배열로 출력할 문자열 정의

  printf("====== 회원 정보 출력 ======\n");
  printf("이름 : %s\n", name);
  printf("나이 : %d\n", age);
  printf("성별 : %s\n", (gender == 'M' ? "남성" : "여성"));
  printf("직업 : %s\n", jobs[job]);
}

// Call By Reference 방식 : 참조에 의한 호출
void input_age_ref(int *age) {
  while(true) {
    printf("나이를 입력 하세요 : ");
    scanf("%d", age);
    if (*age >= 0 && *age < 200) return;  // 나이가 정상적으로 입력 되었으면 나이를 반환
    printf("나이를 잘 못 입력 하셨습니다.\n");
  }
}