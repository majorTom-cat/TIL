import "./App.css";
import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPractice2 from "./EventPractice2";
import EventPractice3 from "./EventPractice3";
import EventPractice4 from "./EventPractice4";

const App = () => {
  return <EventPractice4 />;
};

// function App() {
//   return <Say />;
// }

// function App() {
//   return <Counter />;
// }

// function App() {
//   return (
//     <MyComponent name="React" favoriteNumber={1}>
//       리액티티
//     </MyComponent>
//   );
// } // name={3}

// class App extends Component {
//   render() {
//     const name = "리액트";
//     return <div className="react">{name}</div>;
//   }
// }

export default App;
