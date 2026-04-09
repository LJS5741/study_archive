import { useState, useMemo } from "react";
// 컴포넌트의 성능을 최적화하기 위해 사용 (이전에 계산된 값을 재사용할 수 있도록 해주는 Hook)
// 컴포넌트가 렌더링 되는 조건 : 상위 컴포넌트가 렌더링 될때, props값이 변경되어 전달 될 때, 컴포넌트의 상태가 변경 될 때

const getAverage = (num) => {
  console.log("평균값 계산 중......");
  if (num.length === 0) return;
  const sum = num.reduce((a, b) => a + b);
  return sum / num.length;
};

const Memo = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const handleInsert = () => {
    const nextList = [...list, parseInt(number)]; // 추가된 값으로 새로운 배열 생성, 불변성의 원칙, 주소가 변경되어야 함
    setList(nextList); // 렌더링이 일어남
    setNumber(""); // 입력창을 초기화 하기 위해서
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={handleInsert}>등록</button>
      <ul>
        {list && list.map((e, index) => <li key={index}>{e}</li>)}
        <hr />
        <p>평균값 : {avg}</p>
      </ul>
    </>
  );
};

export default Memo;
