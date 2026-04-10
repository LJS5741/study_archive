import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h2>여기는 About 입니다.</h2>
      <Link to="/home">Home으로 이동</Link>
    </>
  );
};

export default About;
