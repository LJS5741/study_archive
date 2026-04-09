// 이름, 회사, 주소, 이메일을 입력 받아 제출 버튼을 누르면 정보를 화면에 표시 하기
// onChange, onClick, useState 사용

import { useState } from "react";

const NameCardEx = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [addr, setAddr] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
  const handleSubmit = () => {
    setResult({
      name,
      company,
      addr,
      email,
    });
  };
  return (
    <>
      <input
        type="text"
        placeholder="이름 입력 : "
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="회사 입력 : "
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="주소 입력 : "
        onChange={(e) => setAddr(e.target.value)}
      />
      <input
        type="email"
        placeholder="이메일 입력 : "
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>제출</button>

      {result && (
        <div>
          <h3>이름 : {result.name}</h3>
          <h3>회사 : {result.company}</h3>
          <h3>주소 : {result.addr}</h3>
          <h3>이메일 : {result.email}</h3>
        </div>
      )}
    </>
  );
};

export default NameCardEx;
