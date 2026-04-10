// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [pwd, setPwd] = useState("");
//   const navigate = useNavigate();
//   };

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (form.password !== form.confirmPassword) {
//       alert("비밀번호가 일치하지 않습니다");
//       return;
//     }

//     localStorage.setItem("user", JSON.stringify(form));
//     alert("회원가입 완료!");

//     console.log("회원가입 정보:", form);

//     // 서버 요청
//   };

//   return (
//     <div>
//       <h1>회원가입</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="id"
//           placeholder="아이디"
//           onChange={handleChange}
//         />
//         <br />

//         <input
//           type="password"
//           name="password"
//           placeholder="비밀번호"
//           onChange={handleChange}
//         />
//         <br />

//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="비밀번호 확인"
//           onChange={handleChange}
//         />
//         <br />

//         <button type="submit">회원가입</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
