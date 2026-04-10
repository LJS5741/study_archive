import { useParams } from "react-router-dom";

const data = {
  frontend: {
    name: "곰돌이",
    description: "리액트를 좋아하는 개발자",
  },
  backend: {
    name: "달빛사냥꾼",
    description: "스프링 부트를 좋아하는 개발자",
  },
  dba: {
    name: "전체개발자",
    description: "데이터 베이스 전문가",
  },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];

  return (
    <>
      <h1>사용자 프로필</h1>
      {profile ? (
        <>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </>
      ) : (
        <>
          <p>존재하지 않는 프로필 입니다.</p>
        </>
      )}
    </>
  );
};

export default Profile;
