// 7개의 정수를 입력 받는 배열을 생성하고 키보드로 정수값을 입력 받음
// 입력 받은 배열의 값을 홀수 배열과 짝수 배열을 만들어 나누어 담기
// 홀수 배열과 짝수 배열의 값 출력 하기
// 입력배열 : 1 2 3 4 5 6 7
// 홀수배열 : 1 3 5 7 
// 짝수배열 : 2 4 6
// main 함수에서 배열을 선언하고 입력 함수, 홀수와 짝수 나누어 담는 함수, 출력 함수 작성
#include <stdio.h>
#define SIZE 7

void input_array(int *in);
void odd_even_array(int *in, int *odd, int *even, int *odd_cnt, int *even_cnt);
void print_array(int *odd, int *even, int odd_cnt, int even_cnt);

int main() {
  int in_array[SIZE];
  int odd_array[SIZE];
  int even_array[SIZE];
  int odd_cnt = 0, even_cnt = 0;  // 홀수, 짝수 배열의 인덱스를 계산하기 위해서

  input_array(in_array);
  odd_even_array(in_array, odd_array, even_array, &odd_cnt, &even_cnt);
  print_array(odd_array, even_array, odd_cnt, even_cnt);

}

void input_array(int *in) {
  printf("정수 7개을 입력 하세요 : ");
  for (int i = 0; i < SIZE; i++) {
    scanf("%d", &in[i]);   // 해당 배열 인덱스의 주소
  }
}

void odd_even_array(int *in, int *odd, int *even, int *odd_cnt, int *even_cnt) {
  for (int i = 0; i < SIZE; i++) {
    if (in[i] % 2 != 0) odd[(*odd_cnt)++] = in[i];  // 홀수 값을 홀수 배열에 대입하고 난 다음 인덱스를 증가 함
    else even[(*even_cnt)++] = in[i];
  }
}

void print_array(int *odd, int *even, int odd_cnt, int even_cnt) {
  printf("홀수 : ");
  for (int i = 0; i < odd_cnt; i++) printf("%d ", odd[i]);
  printf("\n짝수 : ");
  for (int i = 0; i < even_cnt; i++) printf("%d ", even[i]);
  printf("\n");
}


