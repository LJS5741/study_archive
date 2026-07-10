#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// atoi(), atol(), atof()
int main() {
  char str[] = "12345";
  char strf[] = "3.14159211111111";

  printf("%d\n", atoi(str));
  printf("%.2f\n", atof(strf));

  // 메모리 관련 함수 : memcpy(dest, src, size) 메모리를 특정 크기만큼 복사
  char buff[11];
  memcpy(buff, strf, sizeof(buff)-1);
  buff[10] = '\0';
  
  printf("%s\n", buff);
}