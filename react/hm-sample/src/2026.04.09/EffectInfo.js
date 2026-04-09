// useState - 상태관리, useEffect - 생명주기관리
import { useState, useEffect } from "react";

const EffectInfo = () => {
  const [name, setNAme] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료 된 이후 useEffect 호출.");
    console.log(name, nickname);
  }, [nickname]); // [] 의존성 배열, 비어있으면 마운트(처음 화면이 그려지는 시점)에서만 동작

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setNAme(e.target.value)}
          value={name}
        />
        <br />
        <input
          type="text"
          onChange={(e) => setNickname(e.target.value)}
          value={nickname}
        />
      </div>
      <div>
        <p>이름 : {name}</p>
        <p>닉네임 : {nickname}</p>
      </div>
    </>
  );
};

export default EffectInfo;
