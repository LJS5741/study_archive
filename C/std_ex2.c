// 1. 내 정보 출력하기
// 이름, 나이, 키를 변수에 저장하고 출력하는 프로그램을 작성하시오.

void my_info_printf() {
  char *name = "곰돌이";
  int age = 23;
  float height = 170;

  printf("이름 : %s\n", name);
  printf("나이: %d\n", age);
  printf("키: %.1f\n", height);

}

// 2. 두 정수를 입력받아 사칙 연산 프로그램 작성
void number_calc() {


}

// 3. 원의 넓이와 둘레 계산
// 반지름을 입력받아 원의 넓이와 둘레를 계산하여 출력하시오. 단, 원주율 PI는 const로 선언하여 사용하시오.
// 넓이 : PI * 반지름 * 반지름
// 둘레 : 2 * PI * 반지름


// 4. 초를 시/분/초로 변환
// 총 초(second)를 입력받아 몇 시간 몇 분 몇 초인지 변환하여 출력하는 프로그램을 작성하시오.
void calc_time() {
  int total, hour, minute, second;
  printf("초를 입력 하세요 : ");
  scanf("%d", &total);

  hour = total / 3600;
  minute = (total % 3600) / 60;
  second = total % 60;

  printf("%d시간 %d분 %d초\n", hour, minute, second);
}

// 5. 표준 체중 계산
// 키(cm)와 성별을 입력받아 표준 체중을 계산하고, 현재 체중(kg)과의 차이를 출력하는 프로그램을 작성하시오.
// 표준 체중 공식:

// 남성: 키(m) * 키(m) * 22
// 여성: 키(m) * 키(m) * 21
void std_weight() {
  float height_cm, height_m, weight, standard, diff;
  int gender;

  printf("키(cm): ");
  scanf("%f", &height_cm);

  printf("성별 (1: 남성, 2: 여성): ");
  scanf("%d", &gender);

  printf("현재 체중(kg): ");
  scanf("%f", &weight);

  height_m = height_cm / 100.0;

  if (gender == 1)
      standard = height_m * height_m * 22;
  else
      standard = height_m * height_m * 21;

  diff = weight - standard;

  printf("표준 체중: %.2f kg\n", standard);

  if (diff > 0)
      printf("현재 체중과의 차이: %.2f kg 초과\n", diff);
  else if (diff < 0)
      printf("현재 체중과의 차이: %.2f kg 미달\n", -diff);
  else
      printf("표준 체중입니다!\n");

}



#include <stdio.h>
int main() {

  // 1번 문제
  my_info_printf();

  // 2번 문제



}