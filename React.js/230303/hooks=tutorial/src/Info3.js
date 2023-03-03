import React, { useState, useEffect, useReducer } from "react";

function reducer(state, action) {
  console.log(action);
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info3 = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state; // 비구조화 할당
  const onChange = (e) => {
    console.log(e);
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info3;
