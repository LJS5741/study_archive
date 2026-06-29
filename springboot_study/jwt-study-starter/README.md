# JWT Study Starter

Spring Boot 3.x, Spring Security 6, Java 17 기준 JWT 학습용 시작 프로젝트입니다.

## 목적

이 프로젝트는 처음부터 JWT 전체 코드를 완성해 둔 프로젝트가 아닙니다.
SecurityConfig, H2 DB, Health API만 먼저 둔 상태에서 단계별로 다음 기능을 추가합니다.

1. User Entity / Repository / Service
2. 회원가입 API와 Signup REQ/RES DTO
3. 로그인 API와 Login REQ/RES DTO
4. JWT 생성
5. JWT 검증
6. JWT Filter와 SecurityContext 저장
7. 인증 사용자 조회
8. 권한별 접근 제어
9. Refresh Token 저장과 재발급
10. 로그아웃
11. JWT 예외 처리
12. Postman 전체 테스트

## 실행

Gradle이 설치되어 있거나 IDE(IntelliJ)에서 Gradle 프로젝트로 열어 실행합니다.

```bash
./gradlew bootRun
```

Gradle Wrapper가 없다면 IDE에서 Gradle Wrapper를 생성하거나 로컬 Gradle로 실행하세요.

## 기본 확인 API

```http
GET http://localhost:8080/api/health
```

응답:

```json
{
  "status": "ok"
}
```

## H2 Console

- URL: http://localhost:8080/h2-console
- JDBC URL: jdbc:h2:mem:jwtstudy;MODE=MySQL;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE
- Username: sa
- Password: 비워둠
