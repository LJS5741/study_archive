#include <stdio.h>
#include <stdlib.h>

int main() {
  int arr1[3] = {10, 20, 30};
  int arr2[3] = {100, 200, 300};
  int arr3[4] = {1000, 2000, 3000};
  int* ptr;

  // arr1의 배열의 값 출력
  printf("%d %d %d\n", arr1[0], arr1[1], arr1[2]);

  // ptr에 arr2의 주소를 대입해 배열의 값을 출력하는 데 배열의 인덱스 사용
  ptr = arr2; // == &arr2[0]
  printf("%d %d %d\n", ptr[0], ptr[1], ptr[2]);

  // ptr에 arr3의 주소를 대입해 배열의 값을 출력하는 포인터 사용
  ptr = arr3;
  printf("%d %d %d\n", *ptr, *(ptr + 1), *(ptr + 2));


  // 포인터 배열 : 포인터를 요소로 가지는 배열
  int* pptr[3];
  pptr[0] = arr1;
  pptr[1] = arr2;
  pptr[2] = arr3;

  for (int i = 0; i < 3; i++) { // 배열의 인덱스
    for (int j = 0; j < 3; j++) {
      printf("%5d", pptr[i][j]);
    }
    printf("\n");
  }

  // 문자열을 포인터 배열로 만들기
  // char* city[5] = {"서울", "부산", "인천", "대구", "광주"};

  // // 출력해보기
  // for (int i = 0; i < 5; i++) {
  //   printf("%s ", city[i]);
  // }
  // printf("\n");

  // 5개의 도시 이름을 입력 받아서 출력 하기
  // char city[5][20];   
  // for(int i = 0; i < 5; i++) {
  //   printf("%d번째 도시 입력 : ", i + 1);
  //   scanf("%s", city[i]);
  // }

  // for (int i = 0; i < 5; i++) {
  //   printf("%s ", city[i]);
  // }
  // printf("\n");
  
  // 동적 할당으로 바꾸기
  int count; // 도시의 개수를 입력 받기 위한 변수
  printf("입력 받을 도시의 수 : ");
  scanf("%d", &count);

  char* city = (char *)malloc(sizeof(char) * count * 20);  // 도시 이름을 저장할 메모리를 동적으로 확보
  if (city == NULL) { // 메모리 확보 실패
    printf("메모리 할당 실패\n");
    return 1;  
  }

  for (int i = 0; i < count; i++) {
    printf("%d번째 도시 입력 : ", i + 1);
    scanf("%s", city + i * 20);  // 연속된 메모리 공간에 문자열 입력
  }

   for (int i = 0; i < count; i++) {
    printf("%s ", city + i * 20);
  }
  printf("\n");
  free(city);
}