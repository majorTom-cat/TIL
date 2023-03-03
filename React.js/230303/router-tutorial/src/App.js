import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:aaa" element={<Profile />} />
      </Route>

      <Route path="/Articles/" element={<Articles />}>
        <Route path="/Articles/:id" element={<Article />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/MyPage" element={<MyPage />} />

      <Route path="*" element={<NotFound />} />
      {/* 이 Route는 위치상 가장 마지막에 위치해야함
       * : 와일드카드. 나머지 어떤 URL도 다 처리할 수 있음 */}
    </Routes>
  );
};

export default App;
