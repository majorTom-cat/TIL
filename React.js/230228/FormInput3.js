import React, { Component, createRef } from "react";

class FormInput3 extends Component {
  input_id = React.createRef();
  input_pw = React.createRef();
  input_jumin1 = React.createRef();
  input_jumin2 = React.createRef();
  input_tel1 = React.createRef();
  input_tel2 = React.createRef();
  input_tel3 = React.createRef();
  input_btn = React.createRef();
  // 속성 명이니 앞에 this가 필요 없음

  onChange = (e) => {
    console.log(e.target.name, ":", e.target.value);
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name === "id") {
        this.input_pw.current.focus();
      } else if (e.target.name === "pw") {
        this.input_jumin1.current.focus();
      } else if (e.target.name === "jumin1") {
        this.input_jumin2.current.focus();
      } else if (e.target.name === "jumin2") {
        this.input_tel1.current.focus();
      } else if (e.target.name === "tel1") {
        this.input_tel2.current.focus();
      } else if (e.target.name === "tel2") {
        this.input_tel3.current.focus();
      } else if (e.target.name === "tel3") {
        this.input_btn.current.focus();
      }
    }
  };

  onClick = () => {
    alert(
      "아이디 : " +
        this.input_id.current.value +
        "\n" +
        "비밀번호 : " +
        this.input_pw.current.value +
        "\n" +
        "주민번호 : " +
        this.input_jumin1.current.value +
        " - " +
        this.input_jumin2.current.value +
        "\n" +
        "전화번호 : " +
        this.input_tel1.current.value +
        " - " +
        this.input_tel2.current.value +
        " - " +
        this.input_tel3.current.value
    );
    // this.setState({
    //   id: "",
    //   pw: "",
    //   jumin1: "",
    //   jumin2: "",
    //   tel1: "",
    //   tel2: "",
    //   tel3: "",
    // });

    this.input_id.current.value = "";
    this.input_pw.current.value = "";
    this.input_jumin1.current.value = "";
    this.input_jumin2.current.value = "";
    this.input_tel1.current.value = "";
    this.input.tel2.current.value = "";
    this.input_tel3.current.value = "";
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
                ref={this.input_id}
                type="text"
                name="id"
                placeholder="아이디"
                //value={""}
                size="10"
                // onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                ref={this.input_pw}
                type="password"
                name="pw"
                placeholder="패스워드"
                //value=""
                size="10"
                //onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>주민번호</td>
            <td>
              <input
                ref={this.input_jumin1}
                type="text"
                name="jumin1"
                placeholder="앞자리6자리"
                //value=""
                size="6"
                maxLength={6}
                //onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
              -
              <input
                ref={this.input_jumin2}
                type="text"
                name="jumin2"
                placeholder="뒷자리7자리"
                //value=""
                size="7"
                maxLength={7}
                //onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                ref={this.input_tel1}
                type="text"
                name="tel1"
                placeholder="3자리"
                //value=""
                size="3"
                maxLength={3}
                //onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
              -
              <input
                ref={this.input_tel2}
                type="text"
                name="tel2"
                placeholder="4자리"
                //value=""
                size="4"
                maxLength={4}
                //onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
              -
              <input
                ref={this.input_tel3}
                type="text"
                name="tel3"
                placeholder="4자리"
                //value=""
                size="4"
                maxLength={4}
                //onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" ALIGN="center">
              <button onClick={this.onClick} ref={this.input_btn}>
                확인
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default FormInput3;
