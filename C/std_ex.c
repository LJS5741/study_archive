// [입력 항목]
// 1. 이름 (문자열)
// 2. 학번 (정수)
// 3. 성별 (문자, M/F)
// 4. 거주지 주소 (공백 포함 문자열)
// 5. 국어, 영어, 수학, 과학 4과목 성적 (정수)

// [출력 항목]
// 1. 이름, 학번, 성별
// 2. 주소
// 3. 각 과목 점수
// 4. 총점, 평균 (소수점 2자리)
// 5. 평균에 따른 학점 출력
//    - 90점 이상 : A
//    - 80점 이상 : B
//    - 70점 이상 : C
//    - 60점 이상 : D
//    - 60점 미만 : F
//

#include <stdio.h>
#include <string.h>

int main() {
    char name[20];
    int studentId;
    char gender;
    char addr[100];

    int kor, eng, math, science;
    int total;
    float avg;
    char grade;

    // 입력
    printf("이름 입력 : ");
    scanf("%s", name);

    printf("학번 입력 : ");
    scanf("%d", &studentId);

    printf("성별 입력(M/F) : ");
    scanf(" %c", &gender);

    while (getchar() != '\n');

    printf("주소 입력 : ");
    fgets(addr, sizeof(addr), stdin);

    addr[strcspn(addr, "\n")] = '\0';

    printf("국어 점수 입력 : ");
    scanf("%d", &kor);

    printf("영어 점수 입력 : ");
    scanf("%d", &eng);

    printf("수학 점수 입력 : ");
    scanf("%d", &math);

    printf("과학 점수 입력 : ");
    scanf("%d", &science);

    // 계산
    total = kor + eng + math + science;
    avg = total / 4.0f;

    if (avg >= 90) {
        grade = 'A';
    } else if (avg >= 80) {
        grade = 'B';
    } else if (avg >= 70) {
        grade = 'C';
    } else if (avg >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // 출력
    printf("\n===============================\n");
    printf("          학생 성적표\n");
    printf("===============================\n");
    printf("이름    : %s\n", name);
    printf("학번    : %d\n", studentId);
    printf("성별    : %c\n", gender);
    printf("주소    : %s\n", addr);
    printf("-------------------------------\n");
    printf("국어    : %d점\n", kor);
    printf("영어    : %d점\n", eng);
    printf("수학    : %d점\n", math);
    printf("과학    : %d점\n", science);
    printf("-------------------------------\n");
    printf("총점    : %d점\n", total);
    printf("평균    : %.2f점\n", avg);
    printf("학점    : %c\n", grade);
    printf("===============================\n");

    return 0;
}

// ===============================
//           학생 성적표
// ===============================
// 이름    : 홍길동
// 학번    : 20240001
// 성별    : M
// 주소    : 경기도 수원시 팔달구
// -------------------------------
// 국어    : 85점
// 영어    : 92점
// 수학    : 78점
// 과학    : 88점
// -------------------------------
// 총점    : 343점