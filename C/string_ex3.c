  // 길이가 10 인하인 문자열을 입력 받아 대문자는 소문자로 소문자는 대문자로 변경
  // 길이가 10이하인 문자열을 입력 받아 입력 받은 역순으로 출력 하기 : strlen()
  #include <stdio.h>  // 표준 입출력
  #include <string.h> // 문자열 처리
  #include <ctype.h>  // 대소문자 구분

  int main() {
    char str[11];  // 길이 10 + '\0'널문자
    printf("문자열 입력 : ");
    scanf("%10s", str); 

    for(int i = 0; i < strlen(str); i++) {
      if (isupper(str[i])) str[i] = tolower(str[i]);
      else if (islower(str[i])) str[i] = toupper(str[i]);
    }
    printf("결과 : %s\n", str);

    // 역순 출력
    for(int i = strlen(str) - 1; i >= 0; i--) {
      printf("%c", str[i]);
    }
    printf("\n");



  }