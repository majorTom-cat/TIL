// import React from "react";
import { useParams } from "react-router-dom";
// useParams : 훅의 한 형태

// 객체 안의 객체
const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공",
  },
};

const Profile = () => {
  // 훅 : URL 파라미터를 객체 형식으로 조회
  // URL 파라미터 이름은 라우터를 설정할때 Route 컴포넌트의 path props를 통해 설정
  const params = useParams();
  const profile = data[params.aaa]; // username을 aaa 로 바꿈.

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
