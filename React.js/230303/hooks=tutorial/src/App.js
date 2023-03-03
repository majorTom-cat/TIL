import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import Info from "./Info";
import Info2 from "./Info2";
import Counter2 from "./Counter2";
import Info3 from "./Info3";
import Average from "./Average";
import Info4 from "./Info4";

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? "숨기기" : "보이기"}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   );
// };

const App = () => {
  return <Info4 />;
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
