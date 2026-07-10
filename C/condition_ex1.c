// 1. 양수·음수·0 판별기
// 사용자로부터 정수 하나를 입력받아, 해당 숫자가 양수인지, 음수인지, 0인지 판별하여 출력하는 프로그램을 작성하세요.
// 변수는 int num 하나만 사용
// if – else if – else 구조 사용
// 양수면 "양수입니다", 음수면 "음수입니다", 0이면 "0입니다" 출력
#include <stdio.h>
#include <stdbool.h>

void num_input() {
  int num;
  printf("정수를 입력 하세요 : ");
  scanf("%d", &num);

  if(num > 0) {
    printf("%d은 양수 입니다.\n", num);
  } else if (num < 0) {
    printf("%d은 음수 입니다.\n", num);
  } else printf("0입니다.\n");

}


// 2. 1부터 N까지 합계 계산
// 정수 N을 입력받아, 1부터 N까지의 합을 for문으로 계산하고 출력하세요. 단, N이 0 이하이면 "올바른 수를 입력하세요"를 출력합니다.
// if로 N의 유효성을 먼저 검사
// for문으로 누적 합산
// 최종 결과를 "1부터 N까지의 합: XXX" 형식으로 출력
// while문으로도 구현하기

void for_sum() {
  int num;
  printf("정수 입력 : ");
  if (num <= 0) {
    printf("올바른 수를 입력 하세요.\n");
    return;
  }

  int sum = 0;
  for(int i = 1; i <= num; i++) {
    sum += i;  // sum = sum + i;
  }

  printf("합계 : %d\n", sum);
}

void while_sum() {
  int num;
  printf("정수 입력 : ");
  scanf("%d", &num);

  if (num <= 0) {
    printf("올바른 수를 입력 하세요.\n");
    return;
  }

  int sum = 0;
  // while(num) {
  //   sum += num;
  //   num--;
  // }
  while(1) {
    sum += num;
    num--;
    if (!num) break;
  }

  printf("합계 : %d\n", sum);

}




// 3. 간이 계산기 — 반복 연산
// 두 정수와 연산자(+, -, *, /)를 입력받아 결과를 출력하는 계산기를 만드세요. 계산 후 "계속하겠습니까? (y/n)"를 묻고, 'y'이면 반복, 'n'이면 종료합니다.
// 연산자 분기는 switch문 사용
// 반복은 do-while 또는 while 사용
// 나눗셈 시 분모가 0이면 "0으로 나눌 수 없습니다" 출력
// 정의되지 않은 연산자 입력 시 "알 수 없는 연산자" 출력
void calculator() {
  int a, b;
  char op;
  char cont;

  while(true) {
    printf("계산식 입력 (예: 4 + 5) : ");
    scanf("%d %c %d", &a, &op, &b);

    switch(op) {
      case '+': printf("%d + %d = %d\n", a, b, a + b); break;
      case '-': printf("%d - %d = %d\n", a, b, a - b); break;
      case '*': printf("%d * %d = %d\n", a, b, a * b); break;
      case '/': 
        if (b == 0) printf("0으로 나눌 수 없습니다.\n");
        else printf("%d / %d = %d\n", a, b, a / b);
        break;
      default:
        printf("연산식을 잘 못 입력 하셨습니다.\n");
        break;
    }

    printf("계속 하시겠습니끼?(y/n): ");
    scanf("%c", &cont);
    if (cont == 'n' && cont == 'N') break;
  }

}




int main() {
  //num_input();

  while_sum();

}