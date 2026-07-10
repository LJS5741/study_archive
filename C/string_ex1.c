// 2개의 문자열을 포인터 변수 s와 k에, 양의 정수를 정수형 변수 n에 각각 전달 받아 s 문자열의 뒤 부분의 n개 문자를 k문자열 앞에 끼워 넣는 코드 작성
// 예)  s :  seoul
//        k :  korea
//        n :  2
//        result : ulkorea
#include <stdio.h>
#include <string.h>

int main() {
  char s[100];
  char k[100];
  int n;

  printf("s 문자열을 입력 하세요 : ");
	scanf("%s", s);

	printf("k 문자열을 입력 하세요 : ");
	scanf("%s", k);

	printf("정수를 입력 하세요 : ");
	scanf("%d", &n);

  int pos = strlen(s) - n;  // 5 - 2
  strcpy(s, s + pos); // ul
  strcat(s, k);  // ulkorea
  printf("%s\n", s);
}
