// 자바스트립트는 원시 타입을 제외한 모든 값이 객체 임
// 객체는 {} 중괄호를 만듬, 속성(property)과 값(value)의 쌍으로 구성
// 객체는 객체 리터럴로 만들 수 있음
// 주로 JSON과 결합해 서버와 데이터를 주고 받을 때 사용 됨

// 회원 가입 : 이메일, 비밀번호, 이름, 전화번호
const member = {
  email: "jks2024@gmail.com",
  pwd: "sphb8250",
  name: "곰돌이",
  phone: "010-5006-4146",
};

// 게시글 등록 : 이메일, 제목, 글내용

// 댓글 등록 : 이메일, 게시글 번호, 댓글 내용

// 1. 회원정보를 배열로 생성하기 : 10개
const members = [
  {
    email: "jks2024@gmail.com",
    pwd: "sphb8250",
    name: "곰돌이",
    phone: "010-5006-4146",
  },
  {
    email: "kim.minsu@naver.com",
    pwd: "ms1234!",
    name: "김민수",
    phone: "010-1234-5678",
  },
  {
    email: "lee.jiyeon@daum.net",
    pwd: "jy9876#",
    name: "이지연",
    phone: "010-2345-6789",
  },
  {
    email: "park.hyunjun@gmail.com",
    pwd: "hj4567@",
    name: "박현준",
    phone: "010-3456-7890",
  },
  {
    email: "choi.soyeon@naver.com",
    pwd: "sy2222$",
    name: "최소연",
    phone: "010-4567-8901",
  },
  {
    email: "jung.taehwan@daum.net",
    pwd: "th3333%",
    name: "정태환",
    phone: "010-5678-9012",
  },
  {
    email: "han.eunji@gmail.com",
    pwd: "ej5555^",
    name: "한은지",
    phone: "010-6789-0123",
  },
  {
    email: "yoon.seungho@naver.com",
    pwd: "sh6666&",
    name: "윤승호",
    phone: "010-7890-1234",
  },
  {
    email: "lim.chaeyeon@daum.net",
    pwd: "cy7777*",
    name: "임채연",
    phone: "010-8901-2345",
  },
  {
    email: "oh.donghyun@gmail.com",
    pwd: "dh8888(",
    name: "오동현",
    phone: "010-9012-3456",
  },
];
// 2. 게시글 목록 : 10개, 게시글 번호 필요
const posts = [
  {
    postId: 1,
    email: "jks2024@gmail.com",
    title: "React Hooks 완전 정복",
    content:
      "useState, useEffect, useCallback을 실전 예제와 함께 정리해봤습니다.",
  },
  {
    postId: 2,
    email: "kim.minsu@naver.com",
    title: "자바 스트림 API 활용법",
    content: "Java Stream API로 컬렉션을 간결하게 처리하는 방법을 소개합니다.",
  },
  {
    postId: 3,
    email: "lee.jiyeon@daum.net",
    title: "파이썬으로 주식 데이터 분석하기",
    content: "pandas와 matplotlib으로 KOSPI 데이터를 분석하는 예제입니다.",
  },
  {
    postId: 4,
    email: "park.hyunjun@gmail.com",
    title: "C++ 포인터 완벽 이해",
    content: "포인터와 참조자의 차이, 동적 할당까지 단계별로 설명합니다.",
  },
  {
    postId: 5,
    email: "choi.soyeon@naver.com",
    title: "Spring Boot REST API 만들기",
    content: "Spring Boot로 간단한 CRUD REST API를 구축하는 방법입니다.",
  },
  {
    postId: 6,
    email: "jung.taehwan@daum.net",
    title: "CNN으로 이미지 분류 구현",
    content: "TensorFlow/Keras를 이용해 CNN 모델을 처음부터 구현해봅니다.",
  },
  {
    postId: 7,
    email: "han.eunji@gmail.com",
    title: "TypeScript 기초부터 실전까지",
    content: "타입스크립트의 핵심 개념과 React에서의 활용법을 다룹니다.",
  },
  {
    postId: 8,
    email: "yoon.seungho@naver.com",
    title: "Git 협업 전략 정리",
    content: "Git Flow, GitHub Flow 전략과 충돌 해결 방법을 정리했습니다.",
  },
  {
    postId: 9,
    email: "lim.chaeyeon@daum.net",
    title: "MySQL 인덱스 최적화",
    content: "쿼리 성능을 높이는 인덱스 설계 전략과 실행 계획 분석법입니다.",
  },
  {
    postId: 10,
    email: "oh.donghyun@gmail.com",
    title: "도커로 개발 환경 구성하기",
    content:
      "Docker Compose를 이용한 멀티 컨테이너 개발 환경 설정 가이드입니다.",
  },
];
// 3. 댓글 목록 : 10개 댓글 번호 필요
const comments = [
  {
    commentId: 1,
    email: "kim.minsu@naver.com",
    postId: 1,
    content: "Hooks 정리 너무 깔끔하네요! 많이 배웠습니다.",
  },
  {
    commentId: 2,
    email: "lee.jiyeon@daum.net",
    postId: 1,
    content: "useCallback 예제가 특히 유익했어요. 감사합니다!",
  },
  {
    commentId: 3,
    email: "jks2024@gmail.com",
    postId: 2,
    content: "Stream API 정말 유용하죠. 병렬 스트림도 다뤄주시면 좋겠어요.",
  },
  {
    commentId: 4,
    email: "choi.soyeon@naver.com",
    postId: 2,
    content: "collectors 부분이 항상 헷갈렸는데 덕분에 이해했어요!",
  },
  {
    commentId: 5,
    email: "park.hyunjun@gmail.com",
    postId: 3,
    content: "주식 분석에 파이썬을 활용하는 거 저도 관심 많아요.",
  },
  {
    commentId: 6,
    email: "jung.taehwan@daum.net",
    postId: 4,
    content: "포인터는 항상 어렵네요 ㅠㅠ 덕분에 조금 감 잡았어요.",
  },
  {
    commentId: 7,
    email: "han.eunji@gmail.com",
    postId: 5,
    content: "JWT 인증 붙이는 방법도 추가해주시면 완벽할 것 같아요!",
  },
  {
    commentId: 8,
    email: "yoon.seungho@naver.com",
    postId: 6,
    content: "CNN 논문 읽다가 막혔는데 이 글 보고 코드로 이해했어요.",
  },
  {
    commentId: 9,
    email: "lim.chaeyeon@daum.net",
    postId: 8,
    content: "rebase vs merge 헷갈렸는데 확실히 정리됐어요. 감사해요!",
  },
  {
    commentId: 10,
    email: "oh.donghyun@gmail.com",
    postId: 9,
    content: "실행 계획 분석은 실무에서 진짜 중요하죠. 잘 봤습니다.",
  },
];
