import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [job, setJob] = useState("frontend");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("LOGIN") !== "TRUE") {
      console.log("로그인 되어 있지 않음");
      navigate("/");
    }
  }, []);

  return (
    <>
      <h2>여기는 홈 입니다.</h2>
      <Link to="/about">소개페이지</Link>
      <br />
      <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
      <br />
      <Link to={`/profile/${job}`}>{job} 프로필</Link>
    </>
  );
};

export default Home;
