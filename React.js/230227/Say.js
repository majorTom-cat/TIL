import React, { useState } from "react";

// 컴포넌트 만들때에도 선언적 함수로 만들수도, 화살표 함수로 만들수도 있다
const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>

      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

// function Say() => {
//     const [message, setMessage] = useState("");
//     const onClickEnter = () => setMessage("안녕하세요!");
//     const onClickLeave = () => setMessage("안녕히 가세요!");

//     return (
//       <div>
//         <button onClick={onClickEnter}>입장</button>
//         <button onClick={onClickLeave}>퇴장</button>
//         <h1>{message}</h1>
//       </div>
//     );
//   };

export default Say;
