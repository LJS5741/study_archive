import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // 원래는 여기서 서버를 갔다 와야 함
    if (email === "test@gmail.com" && pwd === "1234") {
      localStorage.setItem("LOGIN", "TRUE");
      navigate("/home");
    } else {
      alert("로그인이 실패 했습니다");
      localStorage.setItem("LOGIN", "FALSE");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="비밀번호"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>로그인</button>
      <br />
      <br />
      <Link to="signup">회원 가입 하기</Link>
    </>
  );
};

export default Login;
