import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    // 일부러 무조건 참이 되게 설계
    // 페이지를 리다이렉트 할때 사용
    // 컴포넌트를 화면에 보여주는 순간 다른 페이지로 이동
    return <Navigate to="/login" replace={true} />;
    // Navigate: useNavigate 훅과 동일한 역할을 하는 컴포넌트. 뭘 선택해서 쓸지는 선택
  }

  return <div>마이 페이지</div>;
};

export default MyPage;
