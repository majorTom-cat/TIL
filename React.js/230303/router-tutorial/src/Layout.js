import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  // Link 컴포넌트를 사용하지 않고 다른 페이지로 이동해야 할때 사용하는 훅
  const navigate = useNavigate(); // navigate 객체 생성
  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1); // JS 객체의 history.back() 과 비슷
    //  navigate(1); // JS 객체의 history.forward() 와 비슷
  };

  const goArticles = () => {
    // articles 경로로 이동
    navigate("/articles", { replace: true });
    // replace: true 는 페이지를 이동할때 현재 페이지를 기록에 남기지 않는다. history 객체에 기록을 남기지 않는다. 쓸일은 잘 없음
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontsize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <maim>
        <Outlet />
      </maim>
    </div>
  );
};

export default Layout;
