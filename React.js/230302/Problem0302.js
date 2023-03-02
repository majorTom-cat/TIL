import { useRef, useState } from "react";

const Problem0302 = () => {
  const [members, setMembers] = useState([]);
  const [nextNum, setNextNum] = useState(1); // 일련번호. 각 데이터의 키

  const input_id = useRef("");
  const input_pw = useRef("");
  const input_jumin1 = useRef("");
  const input_jumin2 = useRef("");
  const input_tel1 = useRef("");
  const input_tel2 = useRef("");
  const input_tel3 = useRef("");
  const input_btn = useRef("");

  const onChange = (e) => console.log(e.target.name, ":", e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name === "id") {
        input_pw.current.focus();
      } else if (e.target.name === "pw") {
        input_jumin1.current.focus();
      } else if (e.target.name === "jumin1") {
        input_jumin2.current.focus();
      } else if (e.target.name === "jumin2") {
        input_tel1.current.focus();
      } else if (e.target.name === "tel1") {
        input_tel2.current.focus();
      } else if (e.target.name === "tel2") {
        input_tel3.current.focus();
      } else if (e.target.name === "tel3") {
        input_btn.current.focus();
      }
    }
  };

  const onClick = () => {
    alert(
      "아이디:" +
        input_id.current.value +
        "\n" +
        "비밀번호:" +
        input_pw.current.value +
        "\n" +
        "주민번호:" +
        input_jumin1.current.value +
        "-" +
        input_jumin2.current.value +
        "\n" +
        "전화번호:" +
        input_tel1.current.value +
        "-" +
        input_tel2.current.value +
        "-" +
        input_tel3.current.value
    );

    const nextMenbers = members.concat({
      num: nextNum,
      id: input_id.current.value,
      pw: input_pw.current.value,
      jumin1: input_jumin1.current.value,
      jumin2: input_jumin2.current.value,
      tel1: input_tel1.current.value,
      tel2: input_tel2.current.value,
      tel3: input_tel3.current.value,
    });
    console.log("nextMembers");
    console.log(nextMenbers);

    setMembers(nextMenbers);
    setNextNum(nextNum + 1);

    input_id.current.value = "";
    input_pw.current.value = "";
    input_jumin1.current.value = "";
    input_jumin2.current.value = "";
    input_tel1.current.value = "";
    input_tel2.current.value = "";
    input_tel3.current.value = "";
  };

  const onRemove = (num) => {
    const deletememberList = members.filter((member) => member.num !== num);
    setMembers(deletememberList);
  };

  //   const memberList = members.map((member) => (
  //     <tr key={member.num}>
  //       <td>{member.id}</td>
  //       <td>{member.pw}</td>
  //       <td>
  //         {member.jumin1}-{member.jumin2}
  //       </td>
  //       <td>
  //         {member.tel1}-{member.tel2}-{member.tel3}
  //       </td>
  //       <td>
  //         <button onClick={() => onRemove(member.num)}>삭제</button>
  //       </td>
  //     </tr>
  //   ));

  return (
    <div>
      <center>
        <h1>회원 가입</h1>
      </center>
      <table ALIGN="center" border="1">
        <tr>
          <td>아이디</td>
          <td>
            <input
              size="10"
              type="text"
              name="id"
              placeholder="아이디"
              // value={this.state.id}
              onChange={onChange}
              onKeyPress={handleKeyPress}
              ref={input_id}
            />
          </td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>
            <input
              size="10"
              type="text"
              name="pw"
              placeholder="패스워드"
              // value={this.state.pw}
              onChange={onChange}
              onKeyPress={handleKeyPress}
              ref={input_pw}
            />
          </td>
        </tr>
        <tr>
          <td>주민번호</td>
          <td>
            <input
              size="6"
              type="text"
              name="jumin1"
              placeholder="앞자리6자리"
              // value={this.state.jumin1}
              onChange={onChange}
              onKeyPress={handleKeyPress}
              ref={input_jumin1}
            />
            -
            <input
              size="7"
              type="text"
              name="jumin2"
              placeholder="뒷자리7자리"
              // value={this.state.jumin2}
              onChange={onChange}
              onKeyPress={handleKeyPress}
              ref={input_jumin2}
            />
          </td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td>
            <input
              size="3"
              type="text"
              name="tel1"
              placeholder="3자리"
              // value={this.state.tel1}
              onChange={onChange}
              onKeyPress={handleKeyPress}
              ref={input_tel1}
            />
            -
            <input
              size="4"
              type="text"
              name="tel2"
              placeholder="4자리"
              // value={this.state.tel2}
              onChange={onChange}
              onKeyPress={handleKeyPress}
              ref={input_tel2}
            />
            -
            <input
              size="4"
              type="text"
              name="tel3"
              placeholder="4자리"
              // value={this.state.tel3}
              onChange={onChange}
              onKeyPress={handleKeyPress}
              ref={input_tel3}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2" ALIGN="center">
            {/* onClick={onClick} 에서 {onClick}에서 onClick처럼 괄호가 없는 경우는 위에서 정의한 화살표 함수가
            저장된 변수를 나타내며 함수 호출 형식이 아니기 때문에 자동으로 호출되지 않는다. */}
            <button onClick={onClick} ref={input_btn}>
              추가
            </button>
          </td>
        </tr>
      </table>

      <br />
      <br />
      <center>
        <h1>회원 목록</h1>
      </center>
      <table align="center" border="1">
        <tr>
          <td>아이디</td>
          <td>비밀번호</td>
          <td>주민번호</td>
          <td>전화번호</td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>
        {/* {memberList} */}
        {members.map((member) => (
          <tr key={member.num}>
            <td>{member.id}</td>
            <td>{member.pw}</td>
            <td>
              {member.jumin1}-{member.jumin2}
            </td>
            <td>
              {member.tel1}-{member.tel2}-{member.tel3}
            </td>
            <td>
              {/* 이벤트 함수를 호출할때 함수명()로 호출하는 경우 렌더링될때 자동으로 한번은 호출되므로 반드시
             화살표 함수로 기술해야 한다.  그렇지 않은 경우 무한 루프에 빠지거나 의도하지 않은 수행을 하는 상황이 발생 */}
              <button onClick={() => onRemove(member.num)}>삭제</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Problem0302;
