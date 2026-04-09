// 이름, 전화번호, 나이, 직업으로, 구성된 10개의 배열을 생성
// table 형태로 구성해 출력
// map 사용

// 마운트 시점에 서버에서 가져오는 것 처럼 구현 해보기
// 특성 시점에 회원정보 가져 오기, 가져오기 버튼 생성하고 버튼을 누르면 회원정보를 가져와서 보여주기

import { useState, useEffect } from "react";

const members = [
  { id: 1, name: "a", phone: "010-1111-1111", age: 25, job: "웹개발자" },
  { id: 2, name: "b", phone: "010-2222-2222", age: 24, job: "웹개발자" },
  { id: 3, name: "c", phone: "010-3333-3333", age: 23, job: "웹개발자" },
  { id: 4, name: "d", phone: "010-4444-4444", age: 22, job: "웹개발자" },
  { id: 5, name: "e", phone: "010-5555-5555", age: 21, job: "웹개발자" },
  { id: 6, name: "f", phone: "010-6666-6666", age: 20, job: "웹개발자" },
  { id: 7, name: "g", phone: "010-7777-7777", age: 19, job: "웹개발자" },
  { id: 8, name: "h", phone: "010-8888-8888", age: 18, job: "웹개발자" },
  { id: 9, name: "i", phone: "010-9999-9999", age: 17, job: "웹개발자" },
  { id: 10, name: "j", phone: "010-0000-0000", age: 16, job: "웹개발자" },
];

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // 서버에서 데이터가 내려 올 때 시간이 걸리는 경우 로딩 중 표시를 위해서 사용

  const fetchData = () => {
    // 실제 서버에서 데이터가 들어 오는 것 처럼 시뮬레이션
    setLoading(true); // 👉 로딩 시작

    setTimeout(() => {
      setData(members);
      setLoading(false); // 👉 로딩 끝
    }, 2000);
  };

  const handleEvent = (member) => {
    alert(`${member.name} 클릭됨`);
  };

  // useEffect(() => {
  //   fetchData(); // 👉 마운트 시 실행
  // }, []);

  return (
    <div>
      <h2>회원 목록</h2>

      <button onClick={fetchData}>회원정보 가져오기</button>

      {loading ? (
        <p>로딩중...</p>
      ) : (
        <table border="1">
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
      )}
    </div>
  );
};

export default Table;
