import "./App.css";
import Welcome from "./Welcome";

const members = [
  { name: "곰돌이", age: 23, addr: "충남 천안시", gender: "M", isAdult: true },
  { name: "장원영", age: 23, addr: "충남 천안시", gender: "F", isAdult: true },
  { name: "안유진", age: 23, addr: "충남 천안시", gender: "F", isAdult: true },
];

function App() {
  return (
    <>
      {members.map((member, index) => (
        <Welcome key={index} member={member} />
      ))}
    </>
  );
}

export default App;
