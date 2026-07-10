// C언어에서 문자열은 문자 배열로 저장되고, 반드시 '\0'로 끝나야 함
// C는 문자열을 다루기 위해 별도의 타입을 제공하지 않지만, 표준 라이브러리 <string.h>를 통해 다양한 문자열 처리 함수를 제공
#include <stdio.h>
#include <string.h>

int main() {
  char str[] = "Hello, World!";
  printf("%s\n", str); 
  printf("문자열 길이 : %lu\n", strlen(str));  // 문자열 길이를 반환, \0(널문자)는 길이에 포함되지 않음

  // 문자열 연결 : srtcat(dest, src), strncat(dest, src, n) src의 처음 n개의 문자까지만 추가 (버퍼 오버플로 방지)
  char str1[30] = "Hello";
  char str2[] = " World";
  strncat(str1, str2, 3);
  printf("%s\n", str1);

  // 문자열 복사 : strcpy(dest, src) : src를 dest에 복사
  char src[] = "Hello, Wolrd!!";
  char dest[20];

  strcpy(dest, src);
  printf("복사된 문자열 : %s\n", dest);
}
