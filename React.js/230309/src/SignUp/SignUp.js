import React from "react";
import { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import main_logo from "./main_logo.png";

// id, password, passwordChk(비밀번호확인), name, tel 기본값 호출
function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChk, setPasswordChk] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  // 제출버튼을 누르면 변경된 파라미터 값 전달함(추후 수정 필요)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`submit! ${id} ${password} ${passwordChk} ${name} ${tel}`);
  };

  // 제출버튼을 누르면 확인창 뜨게 함함
  const onClick = () => {
    alert("가입을 완료하시겠습니까?");
  };

  return (
    <wrap>
      <div className="logo_1">
        <a href="/">
          <img src={main_logo} alt="logo" width="300px;" height="75px;" />
        </a>
      </div>
      <div>
        <h1 className="signUpTitle">Welcome To Sence!</h1>
        <form className="signUp_Form" onSubmit={handleSubmit}>
          <table className="signTbl">
            <tr>
              <td Align="center">아이디 : </td>
              <td>
                <input
                  className="sign_id"
                  name="id"
                  value={id}
                  placeholder="아이디를 입력해 주세요."
                  onChange={(e) => setId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td Align="center">비밀번호 : </td>
              <td>
                <input
                  className="sign_pass1"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="비밀번호를 입력해 주세요."
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td Align="center">비밀번호 확인 : </td>
              <td>
                <input
                  className="sign_pass2"
                  type="password"
                  name="password"
                  value={passwordChk}
                  placeholder="비밀번호를 한 번 더 입력해 주세요."
                  onChange={(e) => setPasswordChk(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td Align="center">이름: </td>
              <td>
                <input
                  className="sign_userName"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="이름을 입력해 주세요."
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td Align="center">전화번호 : </td>
              <td>
                <input
                  className="sign_userTel"
                  type="text"
                  name="tel"
                  value={tel}
                  placeholder="전화번호를 입력해 주세요."
                  onChange={(e) => setTel(e.target.value)}
                />
              </td>
            </tr>
          </table>
        </form>
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <input
            className="sign_submitBtn"
            type="submit"
            value="가입하기"
            onClick={onClick}
          />
        </Link>
      </div>
    </wrap>
  );
}

export default SignUp;
