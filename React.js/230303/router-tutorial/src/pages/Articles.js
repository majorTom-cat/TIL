import { Link, NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <div>
      <Outlet />
      {/* // 이 컴포넌트는 Route의 children으로 들어가는 JSX를 보여주는 역할을 한다.
        하위 컴포넌트인 Article을 이 위치에 출력하라는뜻 */}

      <ul>
        <li>
          {/* 
          NavLink 컴포넌트 : 링크에서 사용하는 경로가 현재 라우터의 경로와 일치하는 경우 특정 스타일
          또는 CSS 클래스를 적용하는 컴포넌트이다.
          용도 자체가 이런 용도. 이런게 있다 정도로 체크
          NavLink 컴포넌트는 isActive를 파라미터로 전달 받으며 boolean타입이다. 
          */}
          {/* html 문서에 class가 없음. 링크를 클릭하면 class="active" 가 되며 isActive 파라미터에 true가 전달 */}
          <NavLink
            to={"/articles/1"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/articles/2"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/articles/3"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 3
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
