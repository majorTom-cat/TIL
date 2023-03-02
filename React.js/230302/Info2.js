import React, { useState } from "react";

const Info2 = () => {
  const [form, setForm] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = form;

  //   const [name, setName] = useState("");
  //   const [nickname, setNickname] = useState("");

  const onChangeForm = (e) => {
    //setForm(e.target.value);

    // 객체를 복제하여 속성값을 변경하고 변경된 데이터로 수정
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChangeForm} />
        <input name="nickname" value={nickname} onChange={onChangeForm} />
      </div>
      <div>
        <div>
          <b>이히르음:</b> {name}
        </div>
        <div>
          <b>니힉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info2;
