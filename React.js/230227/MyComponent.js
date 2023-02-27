import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    // 파라미터를 안줬을때의 기본값 설정
    name: "홍길동",
    name2: "HongGilDong",
  };
  // 정의니까 끝에 세미콜론 붙음

  static propTypes = {
    name: PropTypes.string,
    name2: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// // 화살표 함수. 전달받은 파라미터 없음
// const MyComponent = ({ name, name2, favoriteNumber, children }) => {
//   // props 대신
//   // props를 객체 형태로 전달받음
//   // const { name, name2, children } = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}, {name2}입니다. <br />
//       children 값은 {children} 입니다. <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   ); // 하나 전달할땐 {} 생략하기도 함. "React"를 전달받음
// };

MyComponent.defaultProps = {
  // 파라미터를 안줬을때의 기본값 설정
  name: "홍길동",
  name2: "HongGilDong",
};
// 정의니까 끝에 세미콜론 붙음

MyComponent.propTypes = {
  name: PropTypes.string,
  name2: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

// // 선언적 함수
// function MyComponent() {
//   return <div>나의 새롭고 멋진 컴포넌트!!!!!!</div>;
// }

//export { MyComponent }; // 권장사항 아님
export default MyComponent;
