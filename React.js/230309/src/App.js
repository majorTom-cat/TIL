import "./App.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Final_Main from "./Final/Final_Main";
import Login_Main from "./Final/Login_Main";
import Write from "./Write/CreatProduct";
import Detail from "./Detail/Detail";
import Detail_log from "./Detail/Detail_login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Final_Main />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<SignUp />} />
          <Route path="Write" element={<Write />} />
          <Route path="Detail" element={<Detail />} />
          <Route path="/home/Detail" element={<Detail_log />} />
          <Route path="/home" element={<Login_Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
