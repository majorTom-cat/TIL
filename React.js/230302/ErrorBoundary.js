import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  // error : 어떤 에러가 발생했는지 알려줌
  // info : error가 어디에서 발생했는지
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }
  render() {
    if (this.state.error) return <div>에러가 발생했습니다!</div>;
    return this.props.children; // 에러가 없으면. children은 LifeCycleSample
  }
}

export default ErrorBoundary;
