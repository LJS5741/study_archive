#include <stdio.h>

/*
=== printf 포맷 지정자 (Format Specifier) 정리 ===

기본 정수형:
  %d       : int (정수, 10진수)
  %u       : unsigned int (양의 정수)
  %o       : 8진수
  %x, %X   : 16진수 (소문자/대문자) - ffffffff, FFFFFFFF
  %i       : int (정수) - %d와 동일

실수형:
  %f       : float, double (소수점 표기) - 3.140000
  %.2f     : 소수점 이하 2자리까지 - 3.14
  %e, %E   : 지수 표기법 - 3.140000e+00, 3.140000E+00
  %g, %G   : 간단히 표현

문자/문자열:
  %c       : char (한 글자) - 'A'
  %s       : char* (문자열) - "Hello"

포인터:
  %p       : 포인터 주소 (16진수) - 0x7ffd

기타:
  %%       : % 문자 그 자체 출력
  %lu      : unsigned long
  %ld      : long
  %lld     : long long

이스케이프 시퀀스:
  \n       : 줄바꿈 (newline)
  \t       : 탭 (tab)
  \r       : 캐리지 리턴
  \\       : 백슬래시 그 자체
  \"       : 큰따옴표
  \'       : 작은따옴표
*/

/*
=== 포인터 (Pointer) 정리 ===

1. 포인터란?
   - 메모리 주소를 저장하는 변수
   - 다른 변수가 "어디에" 저장되어 있는지 가리킴

2. 포인터 선언:
   int *ptr;        // int형 포인터 선언 (int 주소 저장)
   char *ptr;       // char형 포인터 선언
   double *ptr;     // double형 포인터 선언

3. & (주소 연산자 - Address-of operator):
   int num = 10;
   int *ptr = &num;  // ptr은 num의 주소를 가짐
   // &num: num 변수의 메모리 주소

4. * (역참조 연산자 - Dereference operator):
   int *ptr = &num;
   printf("%d\n", *ptr);  // ptr이 가리키는 변수의 값 출력 (10)
   // *ptr: ptr이 가리키는 곳의 값

5. 예제:
   int num = 10;
   int *ptr = &num;
   
   printf("%d\n", num);      // 10 (num의 값)
   printf("%p\n", &num);     // 0x7ffd2345 (num의 주소)
   printf("%p\n", ptr);      // 0x7ffd2345 (ptr 안의 주소값)
   printf("%d\n", *ptr);     // 10 (ptr이 가리키는 값)

6. 포인터 수정:
   *ptr = 20;  // ptr이 가리키는 곳(num)의 값을 20으로 변경
   printf("%d\n", num);  // 20

7. 배열과 포인터:
   int arr[3] = {1, 2, 3};
   int *ptr = arr;        // 배열 이름 = 첫 번째 원소의 주소
   
   printf("%d\n", *ptr);       // 1
   printf("%d\n", *(ptr + 1));  // 2
   printf("%d\n", ptr[0]);      // 1 (같은 표현)

8. 문자열과 포인터:
   char *str = "Hello";   // 문자열의 첫 번째 주소
   printf("%s\n", str);   // Hello
   printf("%c\n", *str);  // H

9. NULL 포인터:
   int *ptr = NULL;       // 아무것도 가리키지 않음
   if (ptr == NULL) printf("비어있음\n");

10. 포인터의 크기:
    sizeof(int *);     // 일반적으로 8바이트 (64비트 시스템)
    sizeof(char *);    // 8바이트 (포인터 크기는 모두 같음)
*/

#include <stdio.h>

void changeValue(int *number) {
    *number = 100;
}

int main(void) {
    int num = 10;

    changeValue(&num);

    printf("num: %d\n", num);

    return 0;
}