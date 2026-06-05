# JWT Study Step 2 Starter

이 프로젝트는 첨부된 `jwtboard-master` 코드를 참고해서 만든 JWT 학습용 최소 프로젝트입니다.

현재 포함된 단계:

- 2단계: 회원가입
- 비밀번호 BCrypt 암호화
- Member Entity 저장
- `/auth/signup` 인증 없이 허용

아직 포함하지 않은 것:

- 로그인 DTO
- AuthenticationManager 인증 흐름
- JWT 생성
- JwtFilter
- Refresh Token
- 로그아웃
- 게시글/댓글/채팅/WebSocket

## 실행 전 MySQL 준비

```sql
CREATE DATABASE jwt_study DEFAULT CHARACTER SET utf8mb4;
```

`src/main/resources/application.yml`에서 MySQL username/password를 본인 환경에 맞게 수정하세요.

## 회원가입 테스트

```http
POST http://localhost:8080/auth/signup
Content-Type: application/json

{
  "email": "test@test.com",
  "password": "1234",
  "name": "홍길동"
}
```
