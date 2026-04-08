const member = {
  name: "곰돌이사육사",
  job: "Developer",
  addr: "경기도 수원시",
  gender: "남성",
};

// 1. 멤버 객체의 정보를 표시하기

// 2. 조건부 렌더링 로그인 상태이면 : const isLogin = true / false
// 환영합니다, 곰돌이사육사님
// 오늘도 좋은 하루 되세요!

// 3. 인라인 스타일링으로 member 정보 스타일링 하기

const style = {
  backgroundColor: "black",
  color: "white",
  fontWeight: "bold",
};

const JsxEx = () => {
  const isLogin = true;
  return (
    <>
      {isLogin ? (
        <h1>환영합니다 {member.name}님 오늘도 좋은 하루 되세요!</h1>
      ) : (
        <h1>환영합니다 방문자님 오늘도 좋은 하루 되세요!</h1>
      )}
      <div style={style}>
        <p>실습 예제</p>
        <p>이름: {member.name}</p>
        <p>직업: {member.job}</p>
        <p>주소: {member.addr}</p>
        <p>gender: {member.gender}</p>
      </div>
    </>
  );
};

export default JsxEx;
