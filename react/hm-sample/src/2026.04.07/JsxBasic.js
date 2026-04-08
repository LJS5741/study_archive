import React from "react";
// JSX(JavaScript XML) : 리액트에서 사용하는 비표준 문법
// HTML과 javascript를 혼용하는 방식
// 실제 브라우저에서 실행은 Bable이라는 라이브러리를 통해 자바스크립트와 html로 분리되어 실행
// {} 표현식 사용 가능
// 한개의 태그로 반환해야 함. 여러개의 태그로 구성되는 경우 <></>로 반환 해야 함
// 이름, 주소, 성별, 나이를 표현식을 사용해 출력해보기
// 인라인 스타일링 : 리액트에서 DOM요소에 스타일링을 적용할때는 문자열 형태가 아니고 객체 형태로 넣어야 함 (사용하지 않는 방식)
// class 선택자는 className으로 사용해야 함 :
// 주소, 성별, 나이에 대한 클래스 선택자 만들고 적용하기
// 조건부 렌더링 : if 문은 사용할 수 없지만, 조건부 연산자(?)를 사용해 조건에 따라 렌더링 할 수 있음

const style = {
  backgroundColor: "#222",
  color: "royalBlue",
  fontSize: "2em",
};

const JsxBasic = () => {
  const name = "이지성";
  const addr = "경기도 평택시";
  const gender = "M";
  const age = 25;
  return (
    <>
      <h1 style={style}>JSX 기본 문법 공부</h1>
      {name === "이지성" && <p className="name">이름 : {name}</p>}
      <p className="city">주소 : {addr}</p>
      <p className="gender">성별 : {gender}</p>
      {age > 18 ? <h4>성인 입니다.</h4> : <h4>미성년자 입니다.</h4>}
      <p className="age">나이 : {age}</p>
    </>
  );
};

export default JsxBasic;
