// 문자열 비교 : strcmp(s1, s2) : 두 문자열 비교, strncmp(s1, s2, n) : 두 문자열을 길이 만큼 비교
// - 같으면 0, s1 > s2 이면 양수 반환, s1 < s2 음수 반환
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

int main() {
  char s1[] = "apple";
  char s2[] = "banana";

  if (strcmp(s1, s2) < 0) {
    printf("%s가 %s 보다 사전순으로 앞에 있습니다.\n", s1, s2);
  }

  // 대소문자 변환 
  char c = 'a';
  printf("%c\n", toupper(c));
  // isupper('a') : 대문자 소문자 확인



}
