import React, { Component } from "react";

class FormInput2 extends Component {
  state = {
    id: "",
    pw: "",
    jumin1: "",
    jumin2: "",
    tel1: "",
    tel2: "",
    tel3: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClick = () => {
    alert(
      "아이디 : " +
        this.state.id +
        "\n" +
        "비밀번호 : " +
        this.state.pw +
        "\n" +
        "주민번호 : " +
        this.state.jumin1 +
        " - " +
        this.state.jumin2 +
        "\n" +
        "전화번호 : " +
        this.state.tel1 +
        " - " +
        this.state.tel2 +
        " - " +
        this.state.tel3
    );
    this.setState({
      id: "",
      pw: "",
      jumin1: "",
      jumin2: "",
      tel1: "",
      tel2: "",
      tel3: "",
    });
  };

  onKeyPresstel3 = (e) => {
    if (e.key === "Enter") {
      this.onClick();
    }
  };

  onKeyPressid = (e) => {
    if (e.key === "Enter") {
      this.pw.focus();
    }
  };

  onKeyPresspw = (e) => {
    if (e.key === "Enter") {
      this.jumin1.focus();
    }
  };

  onKeyPressjumin1 = (e) => {
    if (e.key === "Enter") {
      this.jumin2.focus();
    }
  };

  onKeyPressjumin2 = (e) => {
    if (e.key === "Enter") {
      this.tel1.focus();
    }
  };

  onKeyPresstel1 = (e) => {
    if (e.key === "Enter") {
      this.tel2.focus();
    }
  };

  onKeyPresstel2 = (e) => {
    if (e.key === "Enter") {
      this.tel3.focus();
    }
  };

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
                ref={(ref) => {
                  this.id = ref;
                }}
                type="text"
                name="id"
                placeholder="아이디"
                value={this.state.id}
                size={8}
                onChange={this.onChange}
                onKeyDown={this.onKeyPressid}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                ref={(ref) => {
                  this.pw = ref;
                }}
                type="password"
                name="pw"
                placeholder="패스워드"
                value={this.state.pw}
                size={8}
                onChange={this.onChange}
                onKeyDown={this.onKeyPresspw}
              />
            </td>
          </tr>
          <tr>
            <td>주민번호</td>
            <td>
              <input
                ref={(ref) => {
                  this.jumin1 = ref;
                }}
                type="text"
                name="jumin1"
                placeholder="앞자리6자리"
                value={this.state.jumin1}
                size={6}
                maxLength={6}
                onChange={this.onChange}
                onKeyDown={this.onKeyPressjumin1}
              />
              -
              <input
                ref={(ref) => {
                  this.jumin2 = ref;
                }}
                type="text"
                name="jumin2"
                placeholder="뒷자리7자리"
                value={this.state.jumin2}
                size={7}
                maxLength={7}
                onChange={this.onChange}
                onKeyDown={this.onKeyPressjumin2}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                ref={(ref) => {
                  this.tel1 = ref;
                }}
                type="text"
                name="tel1"
                placeholder="3자리"
                value={this.state.tel1}
                size={3}
                maxLength={3}
                onChange={this.onChange}
                onKeyDown={this.onKeyPresstel1}
              />
              -
              <input
                ref={(ref) => {
                  this.tel2 = ref;
                }}
                type="text"
                name="tel2"
                placeholder="4자리"
                value={this.state.tel2}
                size={4}
                maxLength={4}
                onChange={this.onChange}
                onKeyDown={this.onKeyPresstel2}
              />
              -
              <input
                ref={(ref) => {
                  this.tel3 = ref;
                }}
                type="text"
                name="tel3"
                placeholder="4자리"
                value={this.state.tel3}
                size={4}
                maxLength={4}
                onChange={this.onChange}
                onKeyDown={this.onKeyPresstel3}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <button onClick={this.onClick}>확인</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default FormInput2;
