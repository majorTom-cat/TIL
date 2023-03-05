import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
  // const location = useLocation(); // 훅임. location 객체를 반환

  const [searchParams, setSearchParams] = useSearchParams(); // 훅
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    console.log(mode);
    // mode === null 를 mode === "null" 로 비교.
    const nextMode = mode === "null" ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>

      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>

      {/* <p>쿼리스트링: {location.search}</p> */}
      {/* // http://localhost:3000/about?q=react&name=lee */}
      {/* <p>쿼리스트링: {location.pathname}</p> */}
    </div>
  );
};

export default About;
