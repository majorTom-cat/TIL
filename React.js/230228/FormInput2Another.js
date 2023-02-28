import React, { Component } from "react";

class FormInput2Another extends Component {
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
    // setTimeout(() => console.log(e), 500);
    this.setState({ [e.target.name]: e.target.value });

    console.log(e.target.name, ":", e.target.value);
    console.log(this.state); // 뭔가 한 템포 늦음
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name === "id") {
        this.input_pw.focus();
      } else if (e.target.name === "pw") {
        this.input_jumin1.focus();
      } else if (e.target.name === "jumin1") {
        this.input_jumin2.focus();
      } else if (e.target.name === "jumin2") {
        this.input_tel1.focus();
      } else if (e.target.name === "tel1") {
        this.input_tel2.focus();
      } else if (e.target.name === "tel2") {
        this.input_tel3.focus();
      } else if (e.target.name === "tel3") {
        this.input_btn.focus();
      }
    }
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

  render() {
    return (
      <div>
        <center>
          <h1>회원 가입</h1>
        </center>

        <table border="1" ALIGN="center">
          <tr>
            <td>아이디</td>
            <td>
              <input
                ref={(ref) => {
                  this.input_id = ref;
                }}
                type="text"
                name="id"
                placeholder="아이디"
                value={this.state.id}
                size="10"
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                ref={(ref) => {
                  this.input_pw = ref;
                }}
                type="password"
                name="pw"
                placeholder="패스워드"
                value={this.state.pw}
                size="10"
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>주민번호</td>
            <td>
              <input
                ref={(ref) => {
                  this.input_jumin1 = ref;
                }}
                type="text"
                name="jumin1"
                placeholder="앞자리6자리"
                value={this.state.jumin1}
                size="6"
                maxLength={6}
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
              -
              <input
                ref={(ref) => {
                  this.input_jumin2 = ref;
                }}
                type="text"
                name="jumin2"
                placeholder="뒷자리7자리"
                value={this.state.jumin2}
                size="7"
                maxLength={7}
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                ref={(ref) => {
                  this.input_tel1 = ref;
                }}
                type="text"
                name="tel1"
                placeholder="3자리"
                value={this.state.tel1}
                size="3"
                maxLength={3}
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
              -
              <input
                ref={(ref) => {
                  this.input_tel2 = ref;
                }}
                type="text"
                name="tel2"
                placeholder="4자리"
                value={this.state.tel2}
                size="4"
                maxLength={4}
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
              -
              <input
                ref={(ref) => {
                  this.input_tel3 = ref;
                }}
                type="text"
                name="tel3"
                placeholder="4자리"
                value={this.state.tel3}
                size="4"
                maxLength={4}
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" ALIGN="center">
              <button
                onClick={this.onClick}
                ref={(ref) => {
                  this.input_btn = ref;
                }}
              >
                확인
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default FormInput2Another;
