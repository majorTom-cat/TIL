import React from "react";

import Login_header from "./Header/Login_header";
// import Banner from "./banner/Header2";
import Banner from "./banner/banner";
import List from "./List/List2";
import Footer from "./Footer/Footer";
import "./Main.css";
function Main() {
  return (
    <div>
      <Login_header />
      <Banner />
      <List />
      <Footer />
    </div>
  );
}

export default Main;
