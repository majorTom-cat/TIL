import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /* 앞 코드에는 비구조화 할당 문법을 사용했습니다.
           다음 코드와 같은 의미입니다.
           const scrollHeight = this.box.scrollHeight;
           const clientHeight = this.box.cliengHeight;

           자바스크립트로 스크롤바를 내릴 때는 DOM 노드가 가진 다음 값들을 사용합니다.

• scrollTop: 세로 스크롤바 위치(0~350)

• scrollHeight: 스크롤이 있는 박스 안의 div 높이(650)

• clientHeight: 스크롤이 있는 박스의 높이(300)

스크롤바를 맨 아래쪽으로 내리려면 scrollHeight에서 clientHeight 높이를 빼면 되겠지요?
        */
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    // 객체 형식으로 스타일 지정
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    // 객체 형식으로 스타일 지정
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    // 인라인 스타일로 부여
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
