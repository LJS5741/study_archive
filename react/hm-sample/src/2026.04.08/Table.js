// 이름, 전화번호, 나이, 직업으로, 구성된 10개의 배열을 생성
// table 형태로 구성해 출력
// map 사용

import { useState } from "react";

const members = [
  { id: 1, name: "a", phone: "010-3887-5741", age: 25, job: "웹개발자" },
  { id: 2, name: "b", phone: "010-3887-5741", age: 24, job: "웹개발자" },
  { id: 3, name: "c", phone: "010-3887-5741", age: 23, job: "웹개발자" },
  { id: 4, name: "d", phone: "010-3887-5741", age: 22, job: "웹개발자" },
  { id: 5, name: "e", phone: "010-3887-5741", age: 21, job: "웹개발자" },
  { id: 6, name: "f", phone: "010-3887-5741", age: 20, job: "웹개발자" },
  { id: 7, name: "g", phone: "010-3887-5741", age: 19, job: "웹개발자" },
  { id: 8, name: "h", phone: "010-3887-5741", age: 18, job: "웹개발자" },
  { id: 9, name: "i", phone: "010-3887-5741", age: 17, job: "웹개발자" },
];

const Table = () => {
  const [data, setData] = useState(members);

  const handleEvent = (member) => {
    alert(`${member.name} 이 눌러졌습니다.`);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>이름</th>
          <th>전화번호</th>
          <th>나이</th>
          <th>직업</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((person) => (
            // 즉시 실행되지 않고 onClick 이벤트가 발생 했을 때 호출하기 위함, 화살표 함수는 그 자체가 함수이기 때문
            <tr key={person.id} onClick={() => handleEvent(person)}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.phone}</td>
              <td>{person.age}</td>
              <td>{person.job}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
