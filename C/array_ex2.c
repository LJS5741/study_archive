#include <stdio.h>
#define SIZE 5

int main() {
  int score[SIZE];
  int total = 0;

  for(int i = 0; i < SIZE; i++) {
    scanf("%d", &score[i]);
    if (score[i] < 40) score[i] = 40;
    total += score[i];
  }

  printf("%.2f\n", (double)total / SIZE);
  
}