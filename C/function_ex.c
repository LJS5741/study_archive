// 함수(function) : 특별한 목적을 수행하기 위해 독립적으로 설계된 프로그램
// - 표준 함수와 사용자 정의 함수로 나누어짐 <stdio.h> "test.h"
// - 하나의 기능 단위로 함술르 만듬
// - 선언부와 정의(구현부)로 나누어 지면 선언에서는 메모리 할당이 안됨 (주로 선언부는 헤더 파일에 위치)
// - 함수의 시작과 끝은 중괄호 { }
// - 함수는 반환 타입을 가짐, 반환값이 없으면 void, 하나의 변수로 반환
// - 함수는 매개변수로 값을 전달 받을 수 있음, 매개변수는 없을 수도 있음
#include <stdio.h>
#include "./header/calc.h"

int main() {
  // 두개의 정수 타입의 변수와 한개의 문자 타입의 연산자를 입력 받아서 스위치문으로 사칙 연산 처리
  int x, y;
  char op;

  printf("계산식 입력 : ");
  scanf("%d %c %d", &x, &op, &y);

  switch(op) {
		case '+' : printf("result : %d\n", sum(x, y)); break;
		case '-' : printf("result : %d\n", sub(x, y)); break;	
		case '*' : printf("result : %d\n", mul(x, y)); break;	
		case '/' : printf("result : %.2f\n", div(x, y)); break;
		default : printf("수식이 틀렸습니다.\n");
	}

}

// 함수 구현부 만들기
int sum(int x, int y) {
	return x + y;
}

int sub(int x, int y) {
	return x - y;
}

int mul(int x, int y) {
	return x * y;
}

double div(int x, int y) {
	return (double) x / y;
}