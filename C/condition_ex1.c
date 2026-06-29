#include <stdio.h>

// 1. 양수·음수·0 판별기
// 사용자로부터 정수 하나를 입력받아, 해당 숫자가 양수인지, 음수인지, 0인지 판별하여 출력하는 프로그램을 작성하세요.
// 변수는 int num 하나만 사용
// if - else if - else 구조 사용
// 양수면 "양수입니다", 음수면 "음수입니다", 0이면 "0입니다" 출력
void PN_Discrimination() {
  int num1;
  printf("정수를 입력하세요 : ");
  scanf("%d", &num1);
  if (num1 > 0) {
    printf("입력하신 값은 양수입니다.\n");
  } else if (num1 < 0) {
    printf("입력하신 값은 음수입니다.\n");
  } else {printf("입력하신 값은 0입니다.\n");}
}

// 2. 1부터 N까지 합계 계산
// 정수 N을 입력받아, 1부터 N까지의 합을 for문으로 계산하고 출력하세요. 단, N이 0 이하이면 "올바른 수를 입력하세요"를 출력합니다.
// if로 N의 유효성을 먼저 검사
// for문으로 누적 합산
// 최종 결과는 "1부터 N까지의 합: XXX" 형식으로 출력
void sum() {
  int num2;
  int i;
  int total = 0;
  printf("정수를 입력하세요(for) : ");
  scanf(" %d", &num2);
  if (num2 > 0) {
    for (i = 1; i <= num2; i++) {
    total += i;
    }
    printf("1부터 %d까지의 합 : %d\n", num2, total);
  }
  else {
    printf("올바른 수를 입력하세요\n");
  }
  int num3;
  int j;
  int total2 = 0;
  printf("정수를 입력하세요(while) : ");
  scanf(" %d", &num3);
  if (num2 > 0) {
    while(j <= num3) {
    total2 += j;
    j++;
    }
    printf("1부터 %d까지의 합 : %d\n", num2, total);
  }
  else {
    printf("올바른 수를 입력하세요\n");
  }
  
}

// 3. 간이 계산기 - 반복 연산
// 두 정수와 연산자(+, -, *, /)를 입력받아 결과를 출력하는 계산기를 만드세요. 계산 후 "계속하시겠습니까? (y/n)"를 묻고, 'y'이면 반복, 'n'이면 종료
// 연산자 분기는 switch문 사용
// 반복문 do-while 또는 while 사용
// 나눗셈 시 분모가 0이면 "0으로 나눌 수 없습니다" 출력
// 정의되지 않은 연산자 입력 시 "알 수 없는 연산자" 출력

void calculator() {
    int num1, num2;
    char op;
    char choice;

    do {
        printf("첫 번째 정수를 입력하세요 : ");
        scanf("%d", &num1);

        printf("연산자를 입력하세요 (+, -, *, /) : ");
        scanf(" %c", &op);

        printf("두 번째 정수를 입력하세요 : ");
        scanf("%d", &num2);

        switch (op) {
        case '+':
            printf("결과: %d\n", num1 + num2);
            break;

        case '-':
            printf("결과: %d\n", num1 - num2);
            break;

        case '*':
            printf("결과: %d\n", num1 * num2);
            break;

        case '/':
            if (num2 == 0) {
                printf("0으로 나눌 수 없습니다\n");
            } else {
                printf("결과: %d\n", num1 / num2);
            }
            break;

        default:
            printf("알 수 없는 연산자\n");
            break;
        }

        printf("계속하시겠습니까? (y/n) : ");
        scanf(" %c", &choice);

    } while (choice == 'y');
}

void main() {
  PN_Discrimination();
  sum();
  calculator();
}