#include <stdio.h>

// 1. 내 정보 출력하기
// 이름, 나이, 키를 변수에 저장하고 아래 형식으로 출력하는 프로그램으로 작성하시오.

void my_info_printf(){
  char name[20];
  int age;
  int height;
  printf("이름 입력 : ");
  scanf("%s", &name);
  printf("나이 입력 : ");
  scanf("%d", &age);
  printf("키 입력 : ");
  scanf("%d", &height);

  printf("\n====================\n");
  printf("이름 : %s\n", name);
  printf("나이 : %d\n", age);
  printf("키 : %d\n", height);
}

// 2. 두 정수를 받아 사칙연산 프로그램 작성
void number_clac(){
  int num1;
  int num2;
  printf("첫 번째 정수 입력 : ");
  scanf("%d", &num1);
  printf("두 번째 정수 입력 : ");
  scanf("%d", &num2);
  printf("%d + %d = %d\n", num1, num2, num1+num2);
  printf("%d - %d = %d\n", num1, num2, num1-num2);
  printf("%d * %d = %d\n", num1, num2, num1*num2);
  printf("%d / %d = %d\n", num1, num2, num1/num2);
}

// 3. 원의 넓이와 둘레 계산
// 반지름을 입력받아 원의 넓이와 둘레를 계산하여 출력하시오. 단, 원주율 PI는 const로 선언하여 사용하시오.
// 넓이 : PI * 반지름 * 반지름
// 둘레 : 2 * PI * 반지름
void circle_calc(){
  const float PI = 3.141592;
  float r;
  printf("반지름을 입력하세요 : ");
  scanf("%f", &r);
  printf("넓이 : %.2f\n", PI*r*r);
  printf("둘레 : %.2f\n", 2*PI*r);
}

// 4. 초를 시/분/초로 변환
// 총 초(second)를 입력받아 몇 시간 몇 분 몇 초인지 변환하여 출력하는 프로그램을 작성하시오.
void time_calc() {
  int full_sec;
  printf("총 초(second)를 입력하세요 : ");
  scanf("%d", &full_sec);
  int hour = full_sec/3600;
  int minute = (full_sec%3600) / 60;
  int sec = (full_sec%3600) % 60;
  printf("변환된 시간 : %d시간 %d분 %d초\n", hour, minute, sec);
}

// 5. 표준 체중 계산
// 키(cm)와 성별을 입력받아 표준 체중을 계산하고, 현재 체중(kg)과의 차이를 출력하는 프로그램을 작성하시오.
// 표준 체중 공식 :
// 남성 : 키(m) * 키(m) * 22
// 여성 : 키(m) * 키(m) * 21
void std_weight_calc(){\
  int height_cm;
  char gender;
  float weight;
  float std_weight;
  printf("키 입력(cm) : ");
  scanf("%d", &height_cm);
  float height_m;
  height_m = (float)height_cm / 100;
  printf("성별 입력(M/F) : ");
  scanf("%s", &gender);
  printf("체중 입력 : ");
  scanf("%f", &weight);

  if(gender == 'M') {
    std_weight = height_m * height_m * 22;
  }
  else if (gender == 'F'){
    std_weight = height_m * height_m * 21;
  }

  printf("표준 체중 : %.2f\n", std_weight);
  printf("현재 체중과의 차이(kg) : %.2f", std_weight - weight);

}

#include <stdio.h>
int main() {
  // 1번 문제
  my_info_printf();

  // 2번 문제
  number_clac();

  // 3번 문제
  circle_calc();

  // 4번 문제
  time_calc();

  // 5번 문제
  std_weight_calc();

}