import React, { useState, useReducer } from "react";

const Counter = () => {
  const [value, setValue] = useState(0); // useState 함수는 두 개의 값을 갖는 배열 객체 반환.
  // [상태값, 상태값을 다루는 함수]

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      {/* Count 컴포넌트만 리렌더링. App은 리렌더링 안함 */}
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
