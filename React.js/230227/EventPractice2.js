import React, { Component } from "react";

class EventPractice2 extends Component {
  state = {
    userid: "",
    userpassword: "",
    useremail: "",
    usertel: "",
  };

  // state = { id: '', pw: '', email: '', tel: '' };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(
      "아이디 : " +
        this.state.userid +
        "\n" +
        "비밀번호 : " +
        this.state.userpassword +
        "\n" +
        "이메일 : " +
        this.state.useremail +
        "\n" +
        "전화번호 : " +
        this.state.usertel
    );
    this.setState({
      userid: "",
      userpassword: "",
      useremail: "",
      usertel: "",
    });
  };

  // handleClick = () => {
  //   alert(
  //     "아이디 : " +
  //       this.state.id +
  //       "\n" +
  //       "비밀번호 : " +
  //       this.state.pw +
  //       "\n" +
  //       "이메일 : " +
  //       this.state.email +
  //       "\n" +
  //       "전화번호 : " +
  //       this.state.tel
  //   );
  //   this.setState({
  //     id: "",
  //     pw: "",
  //     email: "",
  //     tel: "",
  //   });
  // };

  render() {
    return (
      <div>
        <center>
          <h1>회원 가입</h1>
        </center>

        <table border="1" align="center">
          <tr>
            <td>아이디</td>
            <td>
              <input
                type="text"
                name="userid"
                placeholder="아이디"
                value={this.state.userid}
                onChange={this.handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                type="password"
                name="userpassword"
                placeholder="비밀번호"
                value={this.state.userpassword}
                onChange={this.handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <input
                type="text"
                name="useremail"
                placeholder="이메일"
                value={this.state.useremail}
                onChange={this.handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                type="text"
                name="usertel"
                placeholder="전화번호"
                value={this.state.usertel}
                onChange={this.handleChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <button onClick={this.handleClick}>확인</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default EventPractice2;
